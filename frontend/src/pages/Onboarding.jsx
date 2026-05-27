import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Chip from '../components/ui/Chip';

export default function Onboarding() {
  const navigate = useNavigate();
  const [selectedCoins, setSelectedCoins] = useState(['BTC', 'USDT']);
  const [baseCurrency, setBaseCurrency] = useState('NGN');
  
  const coins = ['BTC', 'ETH', 'USDT', 'USDC', 'SOL', 'TON'];
  const currencies = ['NGN', 'USD'];

  const toggleCoin = (coin) => {
    setSelectedCoins(prev => 
      prev.includes(coin) ? prev.filter(c => c !== coin) : [...prev, coin]
    );
  };

  return (
    <div className="mx-auto w-full max-w-[480px] min-h-screen bg-[var(--color-bg)] flex flex-col relative px-[var(--spacing-4)] py-[var(--spacing-8)]">
      {/* Top Logo */}
      <div className="flex items-center justify-center gap-2 mt-4 mb-12">
        <div className="w-8 h-8 rounded-full bg-[var(--color-purple-primary)] flex items-center justify-center text-sm shadow-[var(--shadow-glow)]">🤖</div>
        <span className="heading-md text-[var(--color-text-primary)] tracking-wide">SwiftyEx Pulse</span>
      </div>

      {/* Main Content (Vertically Centered) */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="heading-xl text-center mb-2 text-[var(--color-text-primary)]">Set Up Your Pulse</h1>
        <p className="body-lg text-[var(--color-text-secondary)] text-center mb-[var(--spacing-6)]">
          Select the assets you want to monitor and your preferred base currency.
        </p>

        <div className="mb-[var(--spacing-6)]">
          <h3 className="heading-md mb-[var(--spacing-3)] text-[var(--color-text-primary)]">Coins you hold</h3>
          <div className="grid grid-cols-2 gap-[var(--spacing-3)]">
            {coins.map(coin => (
              <Chip 
                key={coin} 
                selected={selectedCoins.includes(coin)} 
                onClick={() => toggleCoin(coin)}
              >
                {coin}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <h3 className="heading-md mb-[var(--spacing-3)] text-[var(--color-text-primary)]">Base Currency</h3>
          <div className="grid grid-cols-2 gap-[var(--spacing-3)]">
            {currencies.map(curr => (
              <Chip 
                key={curr} 
                selected={baseCurrency === curr} 
                onClick={() => setBaseCurrency(curr)}
              >
                {curr}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Pinned Bottom Button */}
      <div className="mt-8">
        <Button className="w-full" onClick={() => navigate('/')}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
