"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, ClipboardList, Receipt, Landmark } from "lucide-react"
import { InstallPrompt } from "@/components/install-prompt"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Invoice", href: "/", icon: FileText },
    { name: "Quotation", href: "/quotation", icon: ClipboardList },
    { name: "Receipt", href: "/receipt", icon: Receipt },
  ]

  // Determine active item
  const isActive = (href: string) => pathname === href

  // Dynamic theme colors for links
  const getThemeColor = (href: string) => {
    if (href === "/") return { text: "text-blue-600", bg: "bg-blue-600", border: "border-blue-600" }
    if (href === "/quotation") return { text: "text-indigo-600", bg: "bg-indigo-600", border: "border-indigo-600" }
    if (href === "/receipt") return { text: "text-emerald-600", bg: "bg-emerald-600", border: "border-emerald-600" }
    return { text: "text-slate-600", bg: "bg-slate-600", border: "border-slate-600" }
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 select-none">
              <Landmark className="h-6 w-6 text-slate-900" />
              <span>MadeWebs Generators</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const active = isActive(item.href)
                const colors = getThemeColor(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      active
                        ? `${colors.bg} text-white shadow-sm hover:opacity-90`
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <InstallPrompt />
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 h-16 flex items-center justify-around px-2 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => {
          const active = isActive(item.href)
          const colors = getThemeColor(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-200 ${
                active ? `${colors.text} font-semibold` : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Icon className={`h-5 w-5 transition-transform ${active ? "scale-110" : ""}`} />
              <span className="text-[10px] tracking-wide">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
