import { useEffect, useState } from 'react';
import { ArrowLeft, MoreHorizontal, Zap, ArrowLeftRight, Mic, Plus, Send, Sparkles, CheckCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import chatData from '../mocks/chat.json';

export default function Chat() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setData(chatData);
  }, []);

  if (!data) return null;

  const renderMessageText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;
    let result = text;
    highlights.forEach(highlight => {
      result = result.replace(highlight, `<span class="text-[#2DD4BF] font-medium">${highlight}</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="flex flex-col w-full h-full text-[var(--color-text-primary)] relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] shrink-0 z-10 bg-[var(--color-bg)]">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--color-purple-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
              <Zap size={18} className="text-white" fill="currentColor" />
            </div>
            <span className="heading-lg text-[var(--color-text-primary)]">Ask Pulse</span>
          </div>
        </div>
        <button className="text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] p-2 rounded-full transition-colors">
          <MoreHorizontal size={24} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 pb-[140px] no-scrollbar">
        <div className="flex justify-center">
          <span className="bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] text-[12px] px-3 py-1 rounded-full font-medium">
            Today
          </span>
        </div>

        {data.messages.map(msg => (
          msg.sender === 'user' ? (
            <div key={msg.id} className="flex flex-col items-end gap-1">
              <div className="bg-[#8B5CF6] text-white p-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                <p className="body-lg">{msg.text}</p>
                <div className="flex items-center justify-end gap-1 mt-2 text-white/80 text-[11px] font-medium">
                  <span>{msg.timestamp}</span>
                  {msg.read && <CheckCheck size={14} />}
                </div>
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex gap-3 max-w-[92%]">
              <div className="w-8 h-8 rounded-full bg-[var(--color-surface-2)] shrink-0 flex items-center justify-center mt-1">
                <Zap size={14} className="text-white" fill="currentColor" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] p-[18px] rounded-2xl rounded-tl-sm shadow-sm flex flex-col gap-4">
                  <p className="text-[15px] leading-relaxed text-[var(--color-text-primary)]/95">
                    {renderMessageText(msg.text, msg.highlights)}
                  </p>
                  {msg.action && (
                    <Link to={msg.action.to} className="self-start">
                      <button className="flex items-center gap-2 bg-transparent border border-[var(--color-border)] px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-border)] transition-colors">
                        <ArrowLeftRight size={16} />
                        {msg.action.label}
                      </button>
                    </Link>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-[0.05em] font-bold ml-1">
                  <Sparkles size={12} />
                  Powered by AI
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-[64px] w-full max-w-[480px] px-4 pb-2 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)] to-transparent pt-8">
        {/* Quick Actions */}
        <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar pb-1">
          {data.quickActions.map(action => (
            <button key={action} className="whitespace-nowrap bg-transparent border border-[var(--color-surface-2)] px-4 py-2 rounded-full text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)] hover:text-white transition-all">
              {action}
            </button>
          ))}
        </div>

        {/* Input Pill */}
        <div className="mb-4 bg-[#111] backdrop-blur-xl border border-[var(--color-border)] rounded-full p-1.5 flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-surface-2)] transition-colors">
            <Plus size={22} />
          </button>
          <input 
            type="text" 
            placeholder="Ask anything about your crypto..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] text-[15px] px-1"
          />
          <button className="w-10 h-10 rounded-full bg-[var(--color-purple-primary)] flex items-center justify-center shrink-0 text-white shadow-[var(--shadow-glow)] hover:opacity-90 transition-opacity">
            <Send size={18} className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
