import React, { useState } from 'react';
import { X, Lock, Mail, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  isLoggedIn: boolean;
  onClose: () => void;
  onLogin: (email: string) => void;
  onLogout: () => void;
  userEmail: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  isLoggedIn,
  onClose,
  onLogin,
  onLogout,
  userEmail
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email.trim() || 'subscriber@straitstimes.com');
    onClose();
  };

  const handleQuickDemo = () => {
    onLogin('subscriber@straitstimes.com');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xs max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="font-masthead text-2xl font-bold text-[#0c2340]">
            THE STRAITS TIMES
          </span>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">
            SPH Media ID
          </p>
        </div>

        {isLoggedIn ? (
          <div className="text-center py-4 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <div>
              <h4 className="font-bold text-lg text-gray-900">Signed In</h4>
              <p className="text-xs text-gray-500 mt-1">{userEmail}</p>
              <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-[#00427a] text-[11px] font-bold rounded-full">
                All-Access Subscriber
              </span>
            </div>
            <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
              <button
                onClick={onLogout}
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xs cursor-pointer"
              >
                Log out
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 bg-[#0c2340] hover:bg-[#00427a] text-white text-xs font-semibold rounded-xs cursor-pointer"
              >
                Continue Reading
              </button>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xs focus:outline-hidden focus:border-[#00427a]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xs focus:outline-hidden focus:border-[#00427a]"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-1.5 text-gray-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded-xs" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[#00427a] hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#0c2340] hover:bg-[#00427a] text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-colors"
              >
                Log In with SPH Media ID
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={handleQuickDemo}
                className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-[#00427a] text-xs font-semibold rounded-xs border border-blue-200 cursor-pointer transition-colors"
              >
                Quick Demo: One-Click Subscriber Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
