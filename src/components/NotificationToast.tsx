import React from 'react';
import { useApp } from '../context/AppContext';
import { Bell, CheckCircle, AlertTriangle, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { notifications, dismissNotification } = useApp();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-5 left-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {notifications.map(notif => {
        const isSuccess = notif.type === 'success';
        const isAlert = notif.type === 'alert';

        return (
          <div
            key={notif.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in slide-in-from-top-3 ${
              isSuccess
                ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-100'
                : isAlert
                ? 'bg-rose-950/90 border-rose-500/40 text-rose-100'
                : 'bg-slate-900/90 border-cyan-500/40 text-slate-100'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {isSuccess && <CheckCircle className="w-5 h-5 text-emerald-400" />}
              {isAlert && <AlertTriangle className="w-5 h-5 text-rose-400" />}
              {!isSuccess && !isAlert && <Bell className="w-5 h-5 text-cyan-400" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-semibold truncate">{notif.title}</h4>
                <span className="text-[10px] text-slate-400 shrink-0">{notif.timestamp}</span>
              </div>
              {notif.message && <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{notif.message}</p>}
            </div>

            <button
              onClick={() => dismissNotification(notif.id)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
