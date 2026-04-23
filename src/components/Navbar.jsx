import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Home, Sparkles, Palette, Building2 } from 'lucide-react'

const navLinks = [
  { to: '/',                label: 'Home',      icon: Home      },
  { to: '/ai-generate',     label: 'AI Studio', icon: Sparkles  },
  { to: '/generate-layout', label: 'Layouts',   icon: Building2 },
  { to: '/customize',       label: 'Customize', icon: Palette   },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(248, 247, 244, 0.90)',
        backdropFilter: 'blur(16px) saturate(180%)',
        borderColor: 'rgb(235, 235, 235)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm"
              style={{ background: 'rgb(var(--color-navy))' }}
            >
              <Home className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: 'rgb(var(--color-navy))' }}
            >
              Homelytics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3.5 py-2 text-sm font-medium transition-colors no-underline rounded-lg ${
                  isActive(to) ? 'nav-active-underline' : 'hover:bg-black/[0.04]'
                }`}
                style={{
                  color: isActive(to)
                    ? 'rgb(var(--color-navy))'
                    : 'rgb(var(--fg-tertiary))',
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/ai-generate"
              className="btn-primary text-sm py-2.5 px-5 no-underline inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Start Designing
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl transition-colors touch-target"
            style={{
              background: mobileMenuOpen ? 'rgb(var(--bg-secondary))' : 'transparent',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen
              ? <X className="w-5 h-5" style={{ color: 'rgb(var(--fg-primary))' }} />
              : <Menu className="w-5 h-5" style={{ color: 'rgb(var(--fg-primary))' }} />
            }
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-3 border-t"
            style={{ borderColor: 'rgb(var(--border-primary))' }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium no-underline transition-colors"
                  style={{
                    background: isActive(to) ? 'rgb(var(--bg-secondary))' : 'transparent',
                    color: isActive(to)
                      ? 'rgb(var(--color-navy))'
                      : 'rgb(var(--fg-tertiary))',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}

              <div
                className="pt-3 mt-2 border-t"
                style={{ borderColor: 'rgb(var(--border-primary))' }}
              >
                <Link
                  to="/ai-generate"
                  className="btn-primary text-sm py-3 text-center no-underline block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Designing
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
