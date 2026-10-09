import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { sound } from '../utils/audio';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  time: string;
}

export const LiveChatWidget: React.FC = () => {
  const { isChatOpen, setIsChatOpen, language, recordAnalyticsEvent, triggerNotification } = useApp();
  const isAr = language === 'ar';

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg-1',
      sender: 'assistant',
      text: isAr
        ? 'أهلاً بك! أنا المساعد الذكي لمكتب المطور والمهندس محمد تامر. كيف يمكنني خدمتك اليوم بخصوص مشروعك البرمجي؟'
        : "Hello! Welcome to Mohamed Tamer's engineering desk. How can I assist you with your mobile or web app project today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    {
      ar: 'كم تكلفة ووقت برمجة تطبيق جوال؟',
      en: 'What is the budget and timeline for a mobile app?'
    },
    {
      ar: 'هل تضمن قبول التطبيق على Apple Store و Google Play؟',
      en: 'Do you guarantee App Store and Google Play approval?'
    },
    {
      ar: 'كيف تتم حماية مشروعي وضمان حقوقي المالية؟',
      en: 'How are my intellectual property and payments protected?'
    },
    {
      ar: 'أريد التواصل مباشرة مع محمد عبر واتساب',
      en: 'I want to talk directly to Mohamed on WhatsApp'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    sound.playClick();
    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Smart automated responses tailored for Mohamed Tamer
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (lower.includes('تكلفة') || lower.includes('سعر') || lower.includes('cost') || lower.includes('budget') || lower.includes('price')) {
        reply = isAr
          ? 'تبدأ تكلفة التطبيقات عادةً من $1,500 إلى $5,000 حسب حجم الميزات وبوابات الدفع ولوحة التحكم. يمكنك أيضاً استخدام حاسبة التقدير في موقعنا للحصول على حساب فوري، أو مراسلة محمد على واتساب: 01149556339.'
          : 'App investments typically range from $1,500 to $5,000 depending on features, payment gateways, and backend scope. You can also use our interactive Cost Estimator for an immediate quote!';
      } else if (lower.includes('متجر') || lower.includes('apple') || lower.includes('google') || lower.includes('قبول') || lower.includes('store') || lower.includes('approval')) {
        reply = isAr
          ? 'نعم بكل تأكيد! جميع التطبيقات التي يطورها مهندس محمد تُسلَّم مع ضمان 100% للقبول في متجر آبل App Store وجوجل بلاي Google Play وفق سياسات المطورين المحدثة لعام 2026.'
          : 'Yes, 100% guaranteed! Every application developed is strictly compliant with current Apple App Store and Google Play Console guidelines.';
      } else if (lower.includes('حقوق') || lower.includes('مستقل') || lower.includes('عقد') || lower.includes('protect') || lower.includes('escrow') || lower.includes('guarantee')) {
        reply = isAr
          ? 'حقوقك محفوظة تماماً عبر التعاقد الرسمي من خلال منصة مستقل (Mostaql Escrow) حيث لا يُصرف أي مبلغ إلا بعد فحصك للتطبيق وتسليمه، بالإضافة إلى تسليم الكود المصدري كاملاً ووثائق الشرح.'
          : 'Your payments and IP are 100% protected through Mostaql Escrow or milestone contracts, and full source code ownership is delivered upon completion.';
      } else if (lower.includes('واتساب') || lower.includes('whatsapp') || lower.includes('رقم') || lower.includes('تواصل') || lower.includes('phone')) {
        reply = isAr
          ? 'يمكنك مراسلة محمد تامر مباشرة على رقم الواتساب: 01149556339 (+201149556339) للرد الفوري ومناقشة تفاصيل المشروع.'
          : 'You can reach Mohamed directly on WhatsApp at +201149556339 (01149556339) for immediate technical consultation.';
      } else {
        reply = isAr
          ? 'شكراً لرسالتك! مهندس محمد تامر متواجد حالياً ومتاح للمناقشة الفورية. يسعدنا نقلك إلى محادثة واتساب المباشرة (01149556339) لتلقي عرض العمل بالتفصيل.'
          : 'Thank you for your inquiry! Mohamed Tamer is online and ready to discuss your project specifications. Click below to continue on WhatsApp (+201149556339).';
      }

      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: 'msg-' + (Date.now() + 1),
          sender: 'assistant',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      sound.playNotification();
    }, 900);
  };

  return (
    <>
      {/* Floating Trigger Button with Mohamed Tamer's Photo */}
      <button
        onClick={() => {
          recordAnalyticsEvent('whatsapp_click', 'chat_widget');
          setIsChatOpen(!isChatOpen);
        }}
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-2xl shadow-indigo-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        aria-label="Live Customer Support"
      >
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
          {isChatOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <img
              src={PROFILE_INFO.avatarUrl}
              alt="Mohamed Tamer"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <span className="absolute -top-1 -right-1 rtl:-right-auto rtl:-left-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#080c18] animate-pulse" />
      </button>

      {/* Chat Window Drawer */}
      {isChatOpen && (
        <div className="fixed bottom-22 right-4 rtl:right-auto rtl:left-4 z-40 w-92 sm:w-96 rounded-2xl bg-[#0e1424] border border-indigo-950/80 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="p-4 bg-[#080c18] border-b border-indigo-950/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[1.5px] overflow-hidden shrink-0 shadow-md">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt="Mohamed Tamer"
                  className="w-full h-full object-cover rounded-[9px]"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#080c18]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                  <span>{isAr ? 'محادثة مباشرة مع محمد تامر' : 'Chat with Mohamed Tamer'}</span>
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>{isAr ? 'متصل الآن ومتاح للاستشارة' : 'Online & Available'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-4 flex-1 h-80 overflow-y-auto space-y-3 bg-[#080c18]/60">
            {messages.map((m) => {
              const isUser = m.sender === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      isUser
                        ? 'bg-indigo-600 text-white rounded-br-none rtl:rounded-br-2xl rtl:rounded-bl-none'
                        : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono mt-1 px-1">
                    {m.time}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1 text-slate-400 text-xs py-1 px-3 bg-slate-900 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce delay-200" />
                <span className="text-[11px] ml-1">{isAr ? 'يكتب رد...' : 'Typing...'}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2.5 bg-[#080c18] border-t border-indigo-950/60 overflow-x-auto scrollbar-none flex gap-1.5">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(isAr ? q.ar : q.en)}
                className="shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/30 transition-colors whitespace-nowrap cursor-pointer"
              >
                {isAr ? q.ar : q.en}
              </button>
            ))}
          </div>

          {/* WhatsApp Direct Handoff Banner */}
          <div className="px-3 py-2 bg-emerald-950/40 border-t border-emerald-900/40 flex items-center justify-between text-xs">
            <span className="text-emerald-300 font-medium text-[11px]">
              {isAr ? 'للتواصل الفوري المباشر:' : 'Instant direct WhatsApp:'}
            </span>
            <a
              href={PROFILE_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono font-bold text-emerald-400 hover:underline"
            >
              <span>01149556339</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Input form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={isAr ? 'اكتب رسالتك هنا...' : 'Type a message...'}
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="p-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 rtl:rotate-180" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
