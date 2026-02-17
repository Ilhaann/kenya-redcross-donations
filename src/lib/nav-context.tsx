"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Page = "home" | "packages" | "campaigns" | "dropoff"

interface NavContextType {
  activePage: Page
  setActivePage: (page: Page) => void
}

const NavContext = createContext<NavContextType>({
  activePage: "home",
  setActivePage: () => {},
})

export function NavProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<Page>("home")

  return (
    <NavContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  return useContext(NavContext)
}

export type { Page }
