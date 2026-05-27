import { NavLink } from 'react-router-dom';
import { Home, Wallet, Activity, ArrowLeftRight, User } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/assets', icon: Wallet, label: 'Assets' },
    { to: '/rates', icon: Activity, label: 'Rates' },
    { to: '/swap', icon: ArrowLeftRight, label: 'Swap' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-[480px] h-[64px] bg-[var(--color-bg)] border-t border-[var(--color-border)] flex items-center justify-between px-4 pb-safe z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full gap-[4px] relative h-full ${
              isActive ? 'text-[var(--color-purple-primary)]' : 'text-[var(--color-text-tertiary)]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <item.icon size={24} />
              <span className="body-sm font-medium" style={{ fontSize: '10px' }}>
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-[var(--color-purple-primary)] absolute bottom-1" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
