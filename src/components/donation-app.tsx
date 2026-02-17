import { NavProvider, useNav } from "@/lib/nav-context"
import { ModalProvider } from "@/lib/modal-context"
import { AppNav } from "@/components/layout/app-nav"
import { AppFooter } from "@/components/layout/app-footer"
import { HomeView } from "@/components/views/home-view"
import { PackagesView } from "@/components/views/packages-view"
import { CampaignsView } from "@/components/views/campaigns-view"
import { DropOffView } from "@/components/views/dropoff-view"
import { ModalManager } from "@/components/modals/modal-manager"

function PageRouter() {
  const { activePage } = useNav()

  switch (activePage) {
    case "home":
      return <HomeView />
    case "packages":
      return <PackagesView />
    case "campaigns":
      return <CampaignsView />
    case "dropoff":
      return <DropOffView />
    default:
      return <HomeView />
  }
}

export function DonationApp() {
  return (
    <NavProvider>
      <ModalProvider>
        <div className="flex min-h-screen flex-col">
          <AppNav />
          <main className="flex-1">
            <PageRouter />
          </main>
          <AppFooter />
        </div>
        <ModalManager />
      </ModalProvider>
    </NavProvider>
  )
}
