import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, ArrowLeftRight, Sparkles, Zap, DollarSign } from 'lucide-react';
import swapData from '../mocks/smart-swap-analysis.json';
import Card from '../components/ui/Card';

export default function Swap() {
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState('');
  const [targetRate, setTargetRate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setData(swapData);
    if (swapData) {
      setTargetRate(swapData.suggested_target.toLocaleString());
    }
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col w-full h-full text-[var(--color-text-primary)] relative mx-auto pb-32 no-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-[var(--color-bg)]/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 -ml-1 text-[var(--color-text-primary)] hover:opacity-80 transition-opacity">
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-[var(--color-purple-light)]" fill="currentColor" />
            <span className="heading-lg text-[var(--color-text-primary)]">Smart Swap</span>
          </div>
        </div>
        <button className="text-[var(--color-text-primary)] hover:opacity-80 transition-opacity">
          <Settings size={22} />
        </button>
      </div>

      <div className="flex flex-col p-[var(--spacing-4)] gap-[var(--spacing-6)]">
        {/* Token Selector Card */}
        <Card className="flex items-center justify-between py-[var(--spacing-5)] px-6 relative overflow-hidden">
          {/* Left Token */}
          <div className="flex items-center gap-3 z-10 bg-[var(--color-surface)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-surface-2)] flex items-center justify-center border border-[var(--color-border)]">
              <DollarSign size={20} className="text-[var(--color-text-primary)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[16px] font-bold text-[var(--color-text-primary)]">USDT</span>
              <span className="text-[13px] text-[var(--color-text-secondary)]">Tether</span>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-11 h-11 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-purple-primary)] hover:text-[var(--color-purple-primary)] transition-colors group z-20 absolute left-1/2 -translate-x-1/2">
            <ArrowLeftRight size={18} className="text-[var(--color-purple-light)] group-hover:text-[var(--color-purple-primary)] transition-colors" />
          </button>

          {/* Right Token */}
          <div className="flex items-center gap-3 text-right flex-row-reverse z-10 bg-[var(--color-surface)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-surface-2)] flex items-center justify-center border border-[var(--color-border)]">
              <span className="text-[18px] font-bold text-[var(--color-success)]">₦</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono text-[16px] font-bold text-[var(--color-text-primary)]">NGN</span>
              <span className="text-[13px] text-[var(--color-text-secondary)]">Naira</span>
            </div>
          </div>
        </Card>

        {/* AI Insights */}
        <div className="bg-[var(--color-surface-2)] rounded-r-[var(--radius-md)] rounded-l-[4px] border-l-[3px] border-l-[var(--color-purple-primary)] p-5 flex flex-col gap-4 shadow-sm relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-[120px] h-[120px] bg-[var(--color-purple-primary)]/15 blur-[40px] pointer-events-none" />
          
          <div className="flex items-center gap-2 relative z-10">
            <Sparkles size={16} className="text-[var(--color-purple-light)]" />
            <span className="label tracking-[0.1em] text-[var(--color-purple-light)] font-bold">PULSE AI INSIGHTS</span>
          </div>
          
          <div className="flex flex-col gap-3.5 relative z-10 mt-1">
            <div className="flex items-center justify-between">
              <span className="text-[15px] text-[var(--color-text-secondary)]">Best window:</span>
              <span className="font-mono text-[14px] text-[var(--color-text-primary)] tracking-wide">{data.optimal_window}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[15px] text-[var(--color-text-secondary)]">Suggested target:</span>
              <span className="font-mono text-[16px] font-bold text-[var(--color-success)]">₦{data.suggested_target.toLocaleString()}</span>
            </div>
            
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-[var(--color-text-primary)]">Execution Confidence</span>
                <span className="text-[13px] font-bold text-[var(--color-purple-light)] capitalize">{data.confidence}</span>
              </div>
              <div className="flex gap-1.5 h-1.5 w-full">
                <div className="flex-1 rounded-l-full bg-[var(--color-purple-primary)]" />
                <div className="flex-1 bg-[var(--color-purple-primary)]" />
                <div className="flex-1 rounded-r-full bg-[var(--color-border)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="flex flex-col gap-5 mt-3">
          {/* Amount */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[14px] font-bold text-[var(--color-text-primary)]">Amount to swap</label>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-[18px] flex items-center justify-between focus-within:border-[var(--color-purple-light)] transition-colors group">
              <span className="font-mono text-[16px] font-bold text-[var(--color-text-secondary)] w-16 group-focus-within:text-[var(--color-text-primary)] transition-colors">USDT</span>
              <input 
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-right font-mono text-[22px] font-bold text-[var(--color-text-primary)] outline-none w-full placeholder-[var(--color-text-tertiary)]"
              />
            </div>
            <div className="flex justify-end gap-2.5 mt-1">
              {['25%', '50%', 'Max'].map(pct => (
                <button key={pct} className="bg-[var(--color-surface-2)] border border-[var(--color-border)] px-4 py-1.5 rounded-full text-[12px] font-bold text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-text-secondary)] transition-colors">
                  {pct}
                </button>
              ))}
            </div>
          </div>

          {/* Target Rate */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[14px] font-bold text-[var(--color-text-primary)]">My target rate</label>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-[18px] flex items-center justify-between focus-within:border-[var(--color-purple-light)] transition-colors group">
              <span className="font-mono text-[18px] font-bold text-[var(--color-text-secondary)] w-8 group-focus-within:text-[var(--color-text-primary)] transition-colors">₦</span>
              <input 
                type="text"
                value={targetRate}
                onChange={(e) => setTargetRate(e.target.value)}
                className="bg-transparent text-right font-mono text-[22px] font-bold text-[var(--color-text-primary)] outline-none w-full placeholder-[var(--color-text-tertiary)]"
              />
            </div>
            <span className="text-[13px] font-medium text-[var(--color-text-primary)] text-right mt-1">
              Current rate: <span className="font-mono">₦1,620</span>
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="fixed bottom-[64px] w-full max-w-[480px] bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)] to-transparent pt-12 pb-4 px-[var(--spacing-4)] flex flex-col items-center gap-3 pointer-events-none">
        <button className="pointer-events-auto w-full bg-[var(--color-purple-light)] hover:bg-[#8B5CF6] text-white rounded-[100px] py-[18px] flex items-center justify-center gap-2 font-bold text-[17px] shadow-[var(--shadow-glow)] transition-all active:scale-[0.98]">
          Arm Smart Swap
          <Zap size={20} fill="currentColor" />
        </button>
        <span className="text-[13px] text-[var(--color-text-secondary)] font-medium bg-[var(--color-bg)] px-2">
          We'll execute automatically when your rate is hit.
        </span>
      </div>
    </div>
  );
}
