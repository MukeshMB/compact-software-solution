import {
  FileText,
  Boxes,
  Factory,
  ShieldCheck,
  Smartphone,
  Users,
  Star,
  Layers3,
} from "lucide-react";

const perpetualPlans = [
  {
    name: "BASIC",
    price: "₹X,XXX",
    features: [
      "Unlimited Invoices",
      "GST e-Returns",
      "e-Invoice & e-Way Bill",
      "Multi-Godown Inventory",
    ],
    icon: <FileText className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "STANDARD",
    price: "₹X,XXX",
    popular: true,
    features: [
      "Unlimited Invoices",
      "GST e-Returns",
      "Production Planning",
      "Batch-wise Inventory",
    ],
    icon: <Factory className="w-6 h-6 text-purple-500" />,
  },
  {
    name: "ENTERPRISE",
    price: "₹X,XXX",
    features: [
      "User-wise Access Rights",
      "Voucher Approval",
      "Job Work Management",
      "Batch-wise Inventory",
    ],
    icon: <Users className="w-6 h-6 text-pink-500" />,
  },
];

const subscriptionPlans = [
  {
    name: "BLUE",
    price: "₹X,XXX /yr",
    features: [
      "Cloud Sync",
      "GST Filing Automation",
      "Production Reports",
      "User Activity Logs",
    ],
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "SAFFRON",
    price: "₹X,XXX /yr",
    popular: true,
    features: [
      "Call/Indent Management",
      "Payroll Management",
      "Bind Data with Hard Disks",
      "Enhanced Security",
    ],
    icon: <Layers3 className="w-6 h-6 text-orange-500" />,
  },
  {
    name: "EMERALD",
    price: "₹X,XXX /yr",
    features: [
      "GST Automation",
      "Multi-User Access",
      "Advanced Reports",
      "Cloud Backup",
    ],
    icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
  },
];

const PlanCard = ({ plan, index }: any) => (
  <div
    className={`
      w-full sm:w-[300px] flex flex-col justify-between p-6 rounded-2xl shadow-lg
      transition-all duration-300 transform
      hover:scale-105 hover:shadow-xl fade-in-up
      ${plan.popular
        ? "bg-white ring-2 ring-purple-500"
        : "bg-white/90 hover:ring-2 hover:ring-blue-300"}
    `}
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
        {plan.icon}
        {plan.name}
        {plan.popular && (
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-2 font-semibold">
            Most Popular
          </span>
        )}
      </div>

      <ul className="space-y-2 text-sm text-gray-600">
        {plan.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center gap-2">
            <Star className="w-4 h-4 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <button className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
      Get Started
    </button>
  </div>
);


export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-10 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Perpetual Plans */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05092D]">
            BUSY Software – Perpetual Plans
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {perpetualPlans.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">
            📱 <b>Special:</b> 1 Mobile App Free for 1st Year
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05092D]">
            BUSY Software – Subscription Plans
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {subscriptionPlans.map((plan, idx) => (
              <PlanCard key={idx} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
