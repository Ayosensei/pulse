import { useEffect, useState } from 'react';
import ratesData from '../mocks/rates.json';
import Card from '../components/ui/Card';
import { BrainCircuit } from 'lucide-react';

const Sparkline = ({ data, isHot }) => {
  if (!data || data.length === 0) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 300;
  const height = 60;
  
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 10) - 5;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `${points} ${width},${height} 0,${height}`;
  
  const strokeColor = isHot ? 'var(--color-purple-light)' : 'var(--color-text-tertiary)';

  return (
    <div className="w-full h-[60px] my-5 overflow-hidden relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
        {isHot && (
          <defs>
            <linearGradient id="glow-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--color-purple-primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-purple-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
        )}
        {isHot && (
          <polygon points={areaPoints} fill="url(#glow-gradient)" />
        )}
        <polyline
          points={points}
          fill="none"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const SignalBadge = ({ type }) => {
  const dotColor = {
    HOT: 'bg-[var(--color-success)]',
    WAIT: 'bg-[var(--color-warning)]',
    HOLD: 'bg-[var(--color-danger)]'
  }[type];

  return (
    <div className="flex items-center gap-1.5 bg-[var(--color-surface-2)] px-2.5 py-1 rounded-[var(--radius-full)] border border-[var(--color-border)]">
      <div className={`w-2 h-2 rounded-full ${dotColor} shadow-[0_0_8px_currentColor] opacity-90`} />
      <span className="label text-[11px] font-bold text-[var(--color-text-primary)] tracking-wide">{type}</span>
    </div>
  );
};

export default function Rates() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(ratesData);
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col p-[var(--spacing-4)] gap-[var(--spacing-6)] pt-6 pb-24 animate-fade-in-up">
      <div className="flex flex-col gap-1">
        <h1 className="heading-xl text-[var(--color-text-primary)]">Rate Pulse</h1>
        <p className="body-lg text-[var(--color-text-secondary)]">Live AI-driven market sentiment</p>
      </div>

      <div className="flex flex-col gap-[var(--spacing-4)]">
        {data.rates.map(rate => (
          <Card key={rate.id} glow={rate.signal === 'HOT'} className="flex flex-col p-[var(--spacing-5)] relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[14px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)]">
                  {rate.pair}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="rate-display text-[var(--color-text-primary)] tracking-tight">
                    {rate.price}
                  </span>
                  <span className={`font-mono text-[13px] font-medium ${rate.direction === 'up' ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'}`}>
                    {rate.direction === 'up' ? '↑' : '↓'}{rate.change}
                  </span>
                </div>
              </div>
              <SignalBadge type={rate.signal} />
            </div>

            <Sparkline data={rate.sparkline} isHot={rate.signal === 'HOT'} />

            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-3.5 flex items-start gap-3">
              <div className="text-[var(--color-text-secondary)] shrink-0 mt-0.5">
                <BrainCircuit size={18} />
              </div>
              <p className="text-[14px] leading-relaxed text-[var(--color-text-secondary)] font-medium">
                {rate.insight}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
