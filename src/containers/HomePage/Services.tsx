'use client';

import { X, GraduationCap, Trophy, ChevronDown, User, Users, Phone, CreditCard, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type ServiceCategory = {
    title: string;
    icon: string;
    desc: string;
};

export default function Services() {
    const primaryServices = [
        {
            title: "BUSY Sales & Customization",
            desc: "From sales to setup, we provide full implementation, training, and custom module development for BUSY.",
            icon: "📊"
        },
        {
            title: "Production ERP Solutions",
            desc: "Optimize manufacturing & inventory with our tailor-made Production ERP systems.",
            icon: "🏭"
        },
        {
            title: "BUSY on Cloud",
            desc: "Access your BUSY data securely from anywhere with our cloud-hosted platform.",
            icon: "☁️"
        },
        {
            title: "Payroll Management",
            desc: "Automate salaries, taxes, and compliance using our intuitive payroll software.",
            icon: "💼"
        },
        {
            title: "POS & Barcode Billing",
            desc: "Speed up sales with barcode-enabled billing systems, ideal for retail & warehouses.",
            icon: "🧾"
        },
        {
            title: "Mobile Applications",
            desc: "Stay connected on-the-go with mobile solutions for reporting, sales, and approvals.",
            icon: "📱"
        },
        {
            title: "E-Commerce Software",
            desc: "Run and manage your online store with integrated inventory, billing & dispatch modules.",
            icon: "🛒"
        },
        {
            title: "BUSY Add-ons & Automation",
            desc: "Enhance BUSY with smart modules like Payment Reminders, WhatsApp Integration, Kart Manager, and more.",
            icon: "⚙️"
        }
    ];

    const secondaryServices = [
        {
            title: "Database Hosting",
            icon: "🗄️",
            desc: "Secure and scalable database hosting tailored to BUSY and ERP applications.",
            bg: "bg-yellow-50"
        },
        {
            title: "Data Recovery",
            icon: "💾",
            desc: "Recover critical business data with our expert-level data recovery services.",
            bg: "bg-red-50"
        },
        {
            title: "Remote Desktop Services",
            icon: "🖥️",
            desc: "Access your business applications and data remotely with secure RDP setup.",
            bg: "bg-blue-50"
        },
        {
            title: "Antivirus Solutions",
            icon: "🛡️",
            desc: "Protect your systems with enterprise-grade antivirus and endpoint protection.",
            bg: "bg-green-50"
        },
        {
            title: "Busy Academy – Training Center",
            icon: "🎓",
            desc: "Certified training programs on BUSY Accounting Software for professionals & staff.",
            bg: "bg-purple-50"
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
    const [formData, setFormData] = useState({
        serviceName: '',
        mobile: '',
        studentName: '',
    });

    const handleExploreCategory = (category: ServiceCategory) => {
        setSelectedCategory(category);
        setFormData(prev => ({ ...prev, serviceName: category.title }));
        setIsModalOpen(true);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const generateWhatsAppMessage = () => {
        const message = `🧾 *Service Enquiry – Compact Software Solutions* 🧾

🔹 *Service Requested:*
• ${formData.serviceName || 'Not specified'}

👤 *Client Details:*
${formData.studentName ? `• Name: ${formData.studentName}` : ''}
${formData.mobile ? `• Contact: ${formData.mobile}` : ''}

📩 *Request:*
I am interested in the above service and would like to receive more information and guidance from your team.

Looking forward to your response.

Best regards,
${formData.studentName || 'Client'}

`;

        return encodeURIComponent(message);
    };

    const handleSubmit = () => {
        const whatsappMessage = generateWhatsAppMessage();
        const whatsappUrl = `https://wa.me/+919667337837?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
        setFormData({
            serviceName: '',
            mobile: '',
            studentName: '',
        });
    };

    const cardBackgrounds = [
        'bg-white hover:bg-[#09356C]'
    ];


    return (
        <>
            <section id="services" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-6 sm:px-10 lg:px-24">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-[#00AA3E] font-semibold text-md uppercase tracking-wide">
                        Services
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#00214D]">
                        What We Offer
                    </h2>
                    <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                        From ERP solutions to cloud services and software training — CSS delivers modern, scalable business software backed by 29+ years of domain expertise.
                    </p>
                </div>

                {/* Primary Services Grid */}
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {primaryServices.map((service, index) => (
                        <div
                            key={index}
                            className={`
        rounded-2xl p-6 text-left border transition-all duration-300 shadow-sm hover:
        fade-in-up transform hover:scale-105 hover:shadow-xl
        hover:border-blue-400 border-gray-100  text-black hover:text-white
        ${cardBackgrounds[index % cardBackgrounds.length]}
      `}
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                            <p className="text-gray-400 hover:text-gray-400 text-sm mt-2">{service.desc}</p>
                            <button
                                onClick={() => handleExploreCategory(service)}
                                className="flex items-center text-green-600 font-medium transition-colors cursor-pointer mt-3"
                            >
                                Discuss
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Secondary Services Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-xl font-bold text-[#00214D] mb-10">
                        Secondary Services
                    </h3>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {secondaryServices.map((service, index) => (
                            <div
                                key={index}
                                className={`
        p-4 rounded-xl text-left shadow-sm transition-all duration-300
        fade-in-up transform hover:scale-105 hover:shadow-xl
        hover:border-blue-400 border border-gray-100 text-black hover:text-white
        ${cardBackgrounds[index % cardBackgrounds.length]}
      `}
                                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">{service.icon}</div>
                                    <div>
                                        <h4 className=" font-semibold text-base mb-1">
                                            {service.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 hover:text-gray-400 leading-relaxed">{service.desc}</p>
                                        <button
                                            onClick={() => handleExploreCategory(service)}
                                            className="flex items-center text-green-600 font-medium transition-colors cursor-pointer mt-2"
                                        >
                                            Discuss
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Futuristic Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 flex-col h-full overflow-hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    {/* Modal */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="text-2xl">{selectedCategory?.icon}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        {selectedCategory?.title} Service
                                    </h3>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Form Content */}
                        <div className="overflow-y-auto max-h-[calc(95vh-160px)] flex-1">
                            <div className="p-4 sm:p-6 space-y-6 pb-20">
                                {/* Personal Details */}
                                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl space-y-4">
                                    <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                                        <User className="w-5 h-5 text-blue-600" />
                                        <span>Personal Details</span>
                                    </h4>

                                    <div className="space-y-4">
                                        {/* Student Name - Full Width */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-semibold text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.studentName}
                                                onChange={(e) => handleInputChange('studentName', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white"
                                                placeholder="Enter Your Name"
                                            />
                                        </div>

                                        {/* Mobile and Aadhar - Side by Side */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700 items-center space-x-2">
                                                    <Phone className="w-4 h-4 text-gray-700" />
                                                    <span>Mobile Number</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    pattern="[0-9]{10}"
                                                    value={formData.mobile}
                                                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 bg-white placeholder-gray-500"
                                                    placeholder="Enter 10-digit mobile number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fixed Submit Button */}
                        <div className="flex-shrink-0 border-t border-gray-200 bg-white p-4 sm:p-6">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex flex-row items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                            >
                                <FaWhatsapp className="w-7 h-7 mr-2 text-green-700 font-bold" /> Send WhatsApp Message
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
