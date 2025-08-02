import {
    FileText,
    Factory,
    Users,
    ShieldCheck,
    Smartphone,
    Layers3,
    Star,
    MessageCircle,
} from "lucide-react";

const perpetualPlans = [
    {
        name: "BASIC",
        price: "₹9,999",
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
        price: "₹14,999",
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
        price: "₹19,999",
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
        price: "₹4,999 /yr",
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
        price: "₹6,999 /yr",
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
        price: "₹9,999 /yr",
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
        className={`relative w-full sm:w-[300px] p-[2px] rounded-2xl transition-transform duration-300 transform ${plan.popular ? "scale-105 md:scale-113  hover:scale-115" : " hover:scale-105"}`}
        style={{ animationDelay: `${index * 150}ms` }}
    >
        <div
            className={`rounded-2xl p-6 h-full flex flex-col justify-between border shadow-md transition-all duration-300 backdrop-blur-lg
        ${plan.popular
                    ? "bg-gradient-to-br from-white to-purple-50 border-purple-300 ring-2 ring-purple-400"
                    : "bg-white/80 border-gray-200 hover:ring-2 hover:ring-blue-300"
                }
      `}
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
                <div className="text-xl font-bold text-[#05092D]">{plan.price}</div>
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
    </div>
);

export default function PricingPage() {
    return (
        <main
            id="pricing"
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-50"
        >
            {/* Hero Section */}
            <div className="relative pt-20 px-4 text-center bg-[#09356C] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Main Content */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                        Pricing
                    </h1>

                    <p className="text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
                        We offers best pricing for you
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto space-y-20 pt-5">
                {/* Perpetual Plans */}
                <div className="text-center space-y-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05092D]">
                        BUSY Software – Perpetual Plans
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {perpetualPlans.map((plan, idx) => (
                            <PlanCard key={idx} plan={plan} index={idx} />
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-gray-500 italic">
                        📱 <b>Special:</b> 1 Mobile App Free for 1st Year
                    </p>
                </div>

                {/* Subscription Plans */}
                <div className="text-center space-y-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05092D]">
                        BUSY Software – Subscription Plans
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {subscriptionPlans.map((plan, idx) => (
                            <PlanCard key={idx} plan={plan} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
