import { useEffect, useState } from 'react';
import { Bell, Activity, ArrowLeftRight, Zap } from 'lucide-react';
import greetingData from '../mocks/greeting.json';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(greetingData);
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col p-[var(--spacing-4)] gap-[var(--spacing-5)] pt-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[var(--spacing-3)]">
          <Link to="/chat" className="shrink-0">
            <div className="w-[40px] h-[40px] rounded-[var(--radius-full)] bg-[var(--color-purple-primary)] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-[var(--shadow-glow)]">
              <Zap size={20} className="text-white" fill="currentColor" />
            </div>
          </Link>
          <div>
            <h2 className="heading-lg text-[var(--color-text-primary)]">SwiftyEx Pulse</h2>
            <p className="body-sm text-[var(--color-text-secondary)]">Your AI Market Companion</p>
          </div>
        </div>
      </div>

      {/* Greeting Card */}
      <Card glow className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-purple-primary)]/10 to-transparent pointer-events-none" />
        <p className="body-lg text-[var(--color-text-primary)] relative z-10 leading-relaxed">
          {data.greeting}
        </p>
      </Card>

      {/* Quick Actions */}
      <div className="flex gap-[var(--spacing-3)]">
        <Link to="/swap" className="flex-1">
          <Button variant="secondary" className="w-full gap-2">
            <ArrowLeftRight size={16} /> Swap
          </Button>
        </Link>
        <Link to="/rates" className="flex-1">
          <Button variant="secondary" className="w-full gap-2">
            <Activity size={16} /> Rates
          </Button>
        </Link>
        <Link to="/alerts" className="flex-1">
          <Button variant="secondary" className="w-full gap-2">
            <Bell size={16} /> Alerts
          </Button>
        </Link>
      </div>

      {/* Coin Cards */}
      <div className="grid grid-cols-2 gap-[var(--spacing-3)]">
        <Card className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="heading-md text-[var(--color-text-primary)]">BTC</span>
            <span className="label text-[var(--color-success)] bg-[var(--color-success)]/15 px-2 py-0.5 rounded-[var(--radius-sm)]">+3.2%</span>
          </div>
          <span className="font-mono text-[20px] font-bold mt-1 text-[var(--color-text-primary)]">
            ₦{data.rates.BTC_NGN.toLocaleString()}
          </span>
        </Card>
        <Card className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="heading-md text-[var(--color-text-primary)]">USDT</span>
            <span className="label text-[var(--color-success)] bg-[var(--color-success)]/15 px-2 py-0.5 rounded-[var(--radius-sm)]">+1.2%</span>
          </div>
          <span className="font-mono text-[20px] font-bold mt-1 text-[var(--color-text-primary)]">
            ₦{data.rates.USDT_NGN.toLocaleString()}
          </span>
        </Card>
      </div>
    </div>
  );
}
