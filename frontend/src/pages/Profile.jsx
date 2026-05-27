import { useEffect, useState } from 'react';
import { 
  Zap, 
  Bell, 
  ArrowLeftRight, 
  TrendingUp, 
  ShieldCheck, 
  UserPlus, 
  Send, 
  Moon, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Copy
} from 'lucide-react';
import profileData from '../mocks/profile.json';
import Card from '../components/ui/Card';

const Switch = ({ checked }) => (
  <div className={`w-[46px] h-[26px] rounded-full p-[3px] transition-colors duration-200 ease-in-out flex items-center ${checked ? 'bg-[var(--color-purple-light)]' : 'bg-[var(--color-surface-3)]'}`}>
    <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${checked ? 'translate-x-[20px]' : 'translate-x-0'}`} />
  </div>
);

const SettingsGroup = ({ title, children }) => (
  <div className="flex flex-col gap-3 mt-4">
    <span className="text-[12px] font-bold tracking-widest text-[var(--color-text-tertiary)] uppercase ml-1">
      {title}
    </span>
    <Card className="flex flex-col px-4 py-1">
      {children}
    </Card>
  </div>
);

const SettingsItem = ({ icon: Icon, label, rightElement, isDestructive, hideBorder }) => (
  <div className={`flex items-center justify-between py-3.5 ${hideBorder ? '' : 'border-b border-[var(--color-border)]/50'}`}>
    <div className="flex items-center gap-4">
      <div className={`w-[38px] h-[38px] rounded-xl flex items-center justify-center ${isDestructive ? 'text-[var(--color-danger)] bg-[var(--color-danger)]/10' : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]'}`}>
        <Icon size={18} />
      </div>
      <span className={`text-[15px] font-medium tracking-wide ${isDestructive ? 'text-[var(--color-danger)]' : 'text-[var(--color-text-primary)]'}`}>
        {label}
      </span>
    </div>
    <div className="flex items-center">
      {rightElement}
    </div>
  </div>
);

export default function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(profileData);
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col w-full h-full text-[var(--color-text-primary)] relative pb-28">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 sticky top-0 bg-[var(--color-bg)]/90 backdrop-blur-md z-10 border-b border-[var(--color-border)]/50">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-[var(--color-text-primary)]" fill="currentColor" />
          <span className="heading-lg text-[var(--color-text-primary)]">SwiftyEx Pulse</span>
        </div>
      </div>

      <div className="flex flex-col p-[var(--spacing-4)]">
        {/* Profile Info */}
        <div className="flex flex-col items-center justify-center mt-6 mb-4 relative">
          <div className="w-[100px] h-[100px] rounded-full bg-[var(--color-purple-primary)] shadow-[var(--shadow-glow)] flex items-center justify-center relative z-10">
            <span className="text-[36px] font-bold text-white tracking-widest">
              {data.display_name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          {/* Subtle glow behind avatar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-[var(--color-purple-primary)]/20 blur-[30px] rounded-full pointer-events-none" />
          
          <h2 className="text-[22px] font-bold text-[var(--color-text-primary)] mt-5">
            {data.display_name}
          </h2>
          <span className="text-[15px] text-[var(--color-text-secondary)] mt-1">
            {data.username}
          </span>
          
          <button className="mt-5 px-6 py-2 rounded-full border border-[var(--color-purple-light)] text-[var(--color-purple-light)] font-medium text-[14px] hover:bg-[var(--color-purple-primary)]/10 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Preferences */}
        <SettingsGroup title="Preferences">
          <SettingsItem 
            icon={Bell} 
            label="Proactive Alerts" 
            rightElement={<Switch checked={data.settings.proactive_alerts} />} 
          />
          <SettingsItem 
            icon={ArrowLeftRight} 
            label="Smart Swap Notifications" 
            rightElement={<Switch checked={data.settings.smart_swap_notifications} />} 
          />
          <SettingsItem 
            icon={TrendingUp} 
            label="Rate Pulse Updates" 
            rightElement={<Switch checked={data.settings.rate_pulse_updates} />} 
            hideBorder
          />
        </SettingsGroup>

        {/* Account */}
        <SettingsGroup title="Account">
          <SettingsItem 
            icon={ShieldCheck} 
            label="KYC Status" 
            rightElement={
              <div className="flex items-center gap-1.5 bg-[#0A3020] px-2.5 py-1 rounded-sm border border-[var(--color-success)]/20">
                <ShieldCheck size={12} className="text-[var(--color-success)]" fill="currentColor" />
                <span className="text-[12px] font-bold text-[var(--color-success)] tracking-wide">Verified</span>
              </div>
            } 
          />
          <SettingsItem 
            icon={UserPlus} 
            label="Referral Code" 
            rightElement={
              <div className="flex items-center gap-2">
                <span className="font-mono text-[14px] font-bold text-[var(--color-text-secondary)]">{data.referral_code}</span>
                <Copy size={14} className="text-[var(--color-text-secondary)]" />
              </div>
            } 
          />
          <SettingsItem 
            icon={Send} 
            label="Linked Telegram Account" 
            rightElement={<ChevronRight size={20} className="text-[var(--color-text-tertiary)]" />} 
            hideBorder
          />
        </SettingsGroup>

        {/* App */}
        <SettingsGroup title="App">
          <SettingsItem 
            icon={Moon} 
            label="Appearance" 
            rightElement={
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[var(--color-text-secondary)] font-medium">Dark Mode</span>
                <ChevronRight size={20} className="text-[var(--color-text-tertiary)]" />
              </div>
            } 
          />
          <SettingsItem 
            icon={HelpCircle} 
            label="Help & Support" 
            rightElement={<ChevronRight size={20} className="text-[var(--color-text-tertiary)]" />} 
          />
          <SettingsItem 
            icon={LogOut} 
            label="Sign Out" 
            isDestructive
            hideBorder
          />
        </SettingsGroup>
      </div>
    </div>
  );
}
