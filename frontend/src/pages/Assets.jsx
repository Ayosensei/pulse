import { useEffect, useState } from 'react';
import { Search, History, Zap, TrendingUp, DollarSign, Banknote, ArrowUp, ArrowDown, Landmark, PlusCircle, ArrowLeftRight, Plus } from 'lucide-react';
import assetsData from '../mocks/assets.json';
import Card from '../components/ui/Card';

const AssetIcon = ({ symbol }) => {
  if (symbol === 'BTC') {
    return (
      <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-surface-2)] flex items-center justify-center border border-[var(--color-border)] shrink-0">
        <span className="text-[18px] text-[var(--color-text-primary)] font-serif font-bold">₿</span>
      </div>
    );
  }
  if (symbol === 'USDT') {
    return (
      <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-surface-2)] flex items-center justify-center border border-[var(--color-border)] shrink-0">
        <DollarSign size={20} className="text-[var(--color-success)]" />
      </div>
    );
  }
  if (symbol === 'USD') {
    return (
      <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-surface-2)] flex items-center justify-center border border-[var(--color-border)] shrink-0">
        <DollarSign size={20} className="text-[var(--color-text-primary)]" />
      </div>
    );
  }
  if (symbol === 'NGN') {
    return (
      <div className="w-[42px] h-[42px] rounded-full bg-[var(--color-surface-2)] flex items-center justify-center border border-[var(--color-border)] shrink-0">
        <Banknote size={20} className="text-[var(--color-text-primary)]" />
      </div>
    );
  }
  return null;
};

export default function Assets() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(assetsData);
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col w-full h-full text-[var(--color-text-primary)] relative pb-28">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-[var(--color-bg)]/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-[var(--color-purple-light)]" fill="currentColor" />
          <span className="heading-lg text-[var(--color-text-primary)]">My Assets</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            <Search size={22} />
          </button>
          <button className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            <History size={22} />
          </button>
        </div>
      </div>

      <div className="flex flex-col p-[var(--spacing-4)] gap-[var(--spacing-5)]">
        {/* Total Balance Card */}
        <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-5 relative overflow-hidden shadow-sm">
          {/* Subtle background glow */}
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-[var(--color-purple-primary)]/15 blur-[50px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 flex flex-col gap-1.5">
            <span className="font-mono text-[13px] tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">Total Balance</span>
            <div className="flex items-end justify-between mt-1 flex-wrap gap-2">
              <h2 className="text-[34px] font-bold tracking-tight text-[var(--color-text-primary)] leading-none">
                ₦{data.total_balance_ngn}
              </h2>
              <div className="flex items-center gap-1.5 bg-[#0A3020] text-[var(--color-success)] px-3 py-1.5 rounded-sm text-[12px] font-bold tracking-wide">
                <TrendingUp size={14} strokeWidth={2.5} />
                <span>{data.total_change_today}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-7 relative z-10">
            <button className="flex-1 bg-[var(--color-purple-light)] text-white hover:bg-[#8B5CF6] py-3.5 rounded-[100px] font-mono text-[14px] font-bold shadow-[var(--shadow-glow)] transition-colors flex items-center justify-center gap-1.5">
              <Plus size={16} /> Deposit
            </button>
            <button className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] hover:bg-[var(--color-surface-3)] text-[var(--color-text-primary)] py-3.5 rounded-[100px] font-mono text-[14px] font-bold transition-colors flex items-center justify-center gap-1.5">
              <ArrowLeftRight size={16} /> Swap
            </button>
          </div>
        </div>

        {/* Asset List */}
        <div className="flex flex-col gap-[var(--spacing-3)] mt-2">
          {data.wallets.map((wallet) => (
            <Card key={wallet.id} className="p-4 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3.5">
                  <AssetIcon symbol={wallet.symbol} />
                  <div className="flex flex-col">
                    <span className="text-[17px] font-bold text-[var(--color-text-primary)] tracking-wide">{wallet.name}</span>
                    <span className="text-[13px] text-[var(--color-text-secondary)] font-medium mt-0.5 tracking-wide">
                      {wallet.symbol}{wallet.network && ` • ${wallet.network}`}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="font-mono text-[15px] font-bold text-[var(--color-text-primary)]">{wallet.balance}</span>
                  <span className="font-mono text-[13px] text-[var(--color-text-secondary)] mt-0.5">{wallet.fiat_value}</span>
                </div>
              </div>
              
              <div className="flex gap-3 pt-2 border-t border-[var(--color-border)]/50 mt-1">
                {wallet.symbol === 'NGN' ? (
                  <>
                    <button className="flex-1 bg-transparent border border-[var(--color-border)] hover:bg-[var(--color-surface-2)] rounded-full py-2.5 text-[14px] font-medium text-[var(--color-text-primary)] transition-colors flex items-center justify-center gap-2 tracking-wide">
                      <Landmark size={16} /> Withdraw
                    </button>
                    <button className="flex-1 bg-transparent border border-[var(--color-border)] hover:bg-[var(--color-surface-2)] rounded-full py-2.5 text-[14px] font-medium text-[var(--color-text-primary)] transition-colors flex items-center justify-center gap-2 tracking-wide">
                      <PlusCircle size={16} /> Fund
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex-1 bg-transparent border border-[var(--color-border)] hover:bg-[var(--color-surface-2)] rounded-full py-2.5 text-[14px] font-medium text-[var(--color-text-primary)] transition-colors flex items-center justify-center gap-2 tracking-wide">
                      <ArrowUp size={16} /> Send
                    </button>
                    <button className="flex-1 bg-transparent border border-[var(--color-border)] hover:bg-[var(--color-surface-2)] rounded-full py-2.5 text-[14px] font-medium text-[var(--color-text-primary)] transition-colors flex items-center justify-center gap-2 tracking-wide">
                      <ArrowDown size={16} /> Receive
                    </button>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
