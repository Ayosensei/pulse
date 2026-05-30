import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Layout() {
  return (
    <div className="mx-auto w-full max-w-[480px] min-h-screen bg-[var(--color-bg)] flex flex-col relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-[var(--color-purple-primary)]/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-20%] w-[250px] h-[250px] bg-[var(--color-success)]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <main className="flex-1 pb-24 overflow-y-auto relative z-10">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
