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
      <div className="mx-auto w-full max-w-6xl flex-1 px-8 lg:px-12 py-14 flex gap-14">
        <aside className="hidden md:block w-44 shrink-0">
          <div className="sticky top-8">
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
