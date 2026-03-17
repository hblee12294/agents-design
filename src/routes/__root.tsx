import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { TopicSidebar } from '../components/TopicSidebar'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 flex gap-10">
        <aside className="hidden md:block w-48 shrink-0 pt-1">
          <div className="sticky top-20">
            <TopicSidebar />
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
