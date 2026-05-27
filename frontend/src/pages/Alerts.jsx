import { useEffect, useState } from 'react';
import { Trash2, TrendingUp, TrendingDown, Plus, CheckCircle2 } from 'lucide-react';
import alertsData from '../mocks/alerts.json';
import Card from '../components/ui/Card';

export default function Alerts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(alertsData);
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col p-[var(--spacing-4)] gap-[var(--spacing-6)] pt-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="heading-xl text-[var(--color-text-primary)]">My Alerts</h1>
        <p className="body-sm text-[var(--color-text-secondary)]">Manage your market triggers</p>
      </div>

      {/* Active Alerts */}
      <div className="flex flex-col gap-[var(--spacing-3)]">
        <h2 className="label tracking-[0.1em] text-[var(--color-text-secondary)] mb-1">ACTIVE ALERTS</h2>
        
        {data.active.map(alert => (
          <Card key={alert.id} className="flex flex-col gap-3 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="heading-lg text-[var(--color-text-primary)]">{alert.pair}</span>
                <div className="flex items-center gap-1.5 bg-[var(--color-purple-primary)]/20 px-2.5 py-1 rounded-[var(--radius-full)] text-[var(--color-purple-light)] label text-[10px] uppercase tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-purple-light)]" />
                  Watching
                </div>
              </div>
              <button className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
            <div className={`flex items-center gap-2 font-mono text-[14px] ${alert.direction === 'up' ? 'text-[var(--color-purple-light)]' : 'text-[#FFB4B4]'}`}>
              {alert.direction === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{alert.condition}</span>
            </div>
          </Card>
        ))}

        {/* Add New Alert Card */}
        <button className="w-full h-[100px] rounded-[var(--radius-md)] border border-dashed border-[var(--color-purple-primary)]/40 flex flex-col items-center justify-center gap-2.5 hover:bg-[var(--color-purple-primary)]/5 transition-colors group mt-1">
          <div className="w-[36px] h-[36px] rounded-full bg-[var(--color-purple-primary)]/10 flex items-center justify-center text-[var(--color-purple-light)] group-hover:bg-[var(--color-purple-primary)] group-hover:text-white transition-colors">
            <Plus size={20} />
          </div>
          <span className="font-mono text-[13px] text-[var(--color-text-primary)]">Add New Alert</span>
        </button>
      </div>

      {/* Triggered Alerts */}
      <div className="flex flex-col gap-[var(--spacing-3)] mt-2">
        <h2 className="label tracking-[0.1em] text-[var(--color-text-secondary)] mb-1">TRIGGERED</h2>
        
        {data.triggered.map(alert => (
          <Card key={alert.id} className="flex flex-col gap-2 opacity-60">
            <div className="flex items-center gap-2">
              <span className="heading-lg text-[var(--color-text-tertiary)] line-through decoration-[var(--color-text-tertiary)]">{alert.pair}</span>
              <CheckCircle2 size={18} className="text-[var(--color-success)]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[13px] text-[var(--color-text-tertiary)]">
              <span>{alert.condition}</span>
              <span className="text-[var(--color-border)]">•</span>
              <span className="font-sans text-[var(--color-text-secondary)]">{alert.timeAgo}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
