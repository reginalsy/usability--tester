import React from 'react';
import { X, Check, ShieldCheck, Zap } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Digital Basic',
      price: '$9.90',
      period: '/month',
      desc: 'Unlimited access on web and mobile app for 1 device.',
      features: [
        'Full access to straitstimes.com',
        'Mobile app breaking news alerts',
        'Standard newsletters'
      ],
      popular: false
    },
    {
      name: 'Digital All-Access',
      price: '$19.90',
      period: '/month',
      desc: 'Our most popular plan. Read across 4 concurrent devices.',
      features: [
        'Everything in Digital Basic',
        'Daily digital E-paper replica edition',
        'ST Visual & Multimedia Interactive stories',
        '2-week print archive PDF access',
        'No ad interruptions in article texts'
      ],
      popular: true
    },
    {
      name: 'Print + Digital Bundle',
      price: '$29.90',
      period: '/month',
      desc: 'Physical Straits Times doorstep delivery plus full Digital All-Access.',
      features: [
        'Physical paper delivered every morning',
        'Full 4-device Digital All-Access',
        'Exclusive subscriber events & perks'
      ],
      popular: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xs max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="font-masthead text-xl font-bold text-[#0c2340]">
            THE STRAITS TIMES
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
            Unlock Unlimited Trusted Journalism
          </h3>
          <p className="text-gray-600 text-sm mt-2 font-serif">
            Join thousands of informed readers across Singapore and the region. Cancel anytime with a single click.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-5 rounded-xs border flex flex-col justify-between relative ${
                p.popular
                  ? 'border-[#00427a] bg-blue-50/40 ring-2 ring-[#00427a]'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00427a] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Best Value
                </div>
              )}

              <div>
                <h4 className="font-bold text-gray-900 text-base">{p.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{p.desc}</p>
                <div className="my-4">
                  <span className="font-serif text-3xl font-black text-[#0c2340]">
                    {p.price}
                  </span>
                  <span className="text-xs text-gray-500 font-sans">{p.period}</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  onSuccess();
                  onClose();
                }}
                className={`mt-6 w-full py-2 px-3 text-xs font-bold rounded-xs cursor-pointer transition-colors ${
                  p.popular
                    ? 'bg-[#00427a] hover:bg-[#0c2340] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                }`}
              >
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Secure 256-bit encrypted checkout. SPH Media ID guarantee.</span>
          </div>
          <span className="text-gray-400">Terms &amp; conditions apply</span>
        </div>
      </div>
    </div>
  );
};
