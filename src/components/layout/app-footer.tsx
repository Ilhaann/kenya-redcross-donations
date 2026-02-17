export function AppFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Kenya Red Cross Logo" className="h-8 w-8 rounded-full object-contain" />
            <div>
              <p className="font-serif text-sm font-bold text-card">Kenya Red Cross Society</p>
              <p className="text-xs text-card/60">Humanity in Action since 1963</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-card/60">
            <span>Emergency: 1199</span>
            <span>info@redcross.or.ke</span>
            <span>South C, Nairobi</span>
          </div>
        </div>
        <div className="mt-8 border-t border-card/10 pt-6 text-center text-xs text-card/40">
          &copy; {new Date().getFullYear()} Kenya Red Cross Society. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
