"use client";

import { useState, useEffect } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Building,
    Send,
    MessageCircle,
    CheckCircle,
    User,
    Smartphone,
    RefreshCw,
    Shield,
    X,
    ChevronRight
} from "lucide-react";

export default function ContactUsPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
        captcha: "",
    });

    const [formErrors, setFormErrors] = useState<any>({
        name: "",
        email: "",
        mobile: "",
        message: "",
        captcha: ""
    });


    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaCode, setCaptchaCode] = useState("");
    const [captchaValid, setCaptchaValid] = useState<boolean | null>(null);

    // Generate random captcha on component mount
    const generateCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptchaCode(result);
        setCaptchaValid(null);
        setForm(prev => ({ ...prev, captcha: "" }));
    };

    // Validate captcha in real-time
    const validateCaptcha = (inputValue: string) => {
        if (inputValue === "") {
            setCaptchaValid(null);
        } else if (inputValue.toLowerCase() === captchaCode.toLowerCase()) {
            setCaptchaValid(true);
        } else {
            setCaptchaValid(false);
        }
    };

    // Initialize captcha when component mounts
    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "mobile") {
            // Allow only numbers, +, (, ), space and dash
            const allowed = /^[0-9+\-()\s]*$/;
            if (!allowed.test(value)) return;
        }

        setForm({ ...form, [name]: value });

        // Reset error on change
        setFormErrors({ ...formErrors, [name]: "" });

        if (name === "captcha") {
            validateCaptcha(value);
            setFormErrors({ ...formErrors, captcha: "" });
        }
    };


    const handleSubmit = async () => {
        let errors = {
            name: "",
            email: "",
            mobile: "",
            message: "",
            captcha: ""
        };

        // Validate fields
        if (!form.name) errors.name = "Name is required.";
        if (!form.email) {
            errors.email = "Email is required.";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(form.email)) errors.email = "Invalid email format.";
        }

        if (!form.mobile) {
            errors.mobile = "Mobile number is required.";
        } else {
            const phoneRegex = /^[+()0-9\s-]{10,16}$/;
            if (!phoneRegex.test(form.mobile)) errors.mobile = "Invalid phone number.";
        }

        if (!form.message) errors.message = "Message cannot be empty.";
        if (!captchaValid) errors.captcha = "Captcha is incorrect.";

        setFormErrors(errors);

        // Check if any error is set
        const hasErrors = Object.values(errors).some(err => err !== "");
        if (hasErrors) return;

        // Proceed if no errors
        setIsSubmitting(true);
        const { name, email, mobile, message } = form;
        const encodedMessage = encodeURIComponent(
            `New Inquiry:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
        );
        const whatsappURL = `https://wa.me/917872727171?text=${encodedMessage}`;

        setTimeout(() => {
            window.open(whatsappURL, "_blank");
            setIsSubmitting(false);
            setForm({
                name: "",
                email: "",
                mobile: "",
                message: "",
                captcha: ""
            });
            setFormErrors({});
            generateCaptcha();
        }, 1000);
    };


    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            content: "+91-7872727171, 9810214216",
            subtitle: "Call us during business hours",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: Mail,
            title: "Email",
            content: "sales@cssbusy.com",
            subtitle: "We'll respond within 24 hours",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: MapPin,
            title: "Address",
            content: "258, Pocket-5, Sector-2, Rohini, Delhi-110088",
            subtitle: "Visit our main office",
            color: "from-red-500 to-pink-600"
        },
        {
            icon: Building,
            title: "Branches",
            content: "Kundli, Jhajjar, Bahadurgarh, Jind, Sonipat, Rohtak",
            subtitle: "Multiple locations to serve you",
            color: "from-purple-500 to-indigo-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative py-6 px-4 text-center bg-[#09356C] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Decorative Blurs */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-36 h-36 bg-cyan-300/10 rounded-full blur-2xl"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <MessageCircle className="w-6 h-6 text-cyan-300" />
                        <span className="text-cyan-300 font-medium text-xs uppercase tracking-wide">Get in Touch</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                        Contact Us
                    </h1>

                    <p className="text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
                        Ready to transform your business? We're here to help you every step of the way.
                    </p>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid-cols-1 gap-12">

                    {/* Contact Form */}
                    <div className="col-span-1">
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-3">Send us a Message</h2>
                                <p className="text-gray-600">Fill out the form below and we'll respond via WhatsApp</p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div className="relative">
                                        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'
                                            }`}>
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            name="name"
                                            placeholder="Full Name"
                                            className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none bg-white/50 text-black placeholder-gray-500 ${focusedField === 'name'
                                                ? 'border-blue-500 bg-white shadow-lg'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                            value={form.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                        {formErrors.name && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <X className="w-4 h-4" />
                                                {formErrors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Mobile Field */}
                                    <div className="relative">
                                        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'mobile' ? 'text-blue-600' : 'text-gray-400'
                                            }`}>
                                            <Smartphone className="w-5 h-5" />
                                        </div>
                                        <input
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            type="tel"
                                            className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none bg-white/50 text-black placeholder-gray-500 ${focusedField === 'mobile'
                                                ? 'border-blue-500 bg-white shadow-lg'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                            value={form.mobile}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('mobile')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                        {formErrors.mobile && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <X className="w-4 h-4" />
                                                {formErrors.mobile}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
                                        }`}>
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <input
                                        name="email"
                                        placeholder="Email Address"
                                        type="email"
                                        className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none bg-white/50 text-black placeholder-gray-500 ${focusedField === 'email'
                                            ? 'border-blue-500 bg-white shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        value={form.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    {formErrors.email && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <X className="w-4 h-4" />
                                            {formErrors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <div className={`absolute left-4 top-6 transition-colors duration-300 ${focusedField === 'message' ? 'text-blue-600' : 'text-gray-400'
                                        }`}>
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none bg-white/50 resize-none text-black placeholder-gray-500 ${focusedField === 'message'
                                            ? 'border-blue-500 bg-white shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    {formErrors.message && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <X className="w-4 h-4" />
                                            {formErrors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Captcha Field */}
                                <div className="space-y-4">
                                    <label className="text-sm font-medium text-gray-700">Security Verification</label>

                                    {/* Captcha Display */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl border">
                                        {/* Left Section: Captcha Info */}
                                        <div className="flex flex-wrap items-center gap-3">
                                            <Shield className="w-5 h-5 text-gray-600 shrink-0" />
                                            <span className="text-sm font-medium text-gray-700">Enter this code:</span>
                                            <span className="text-xl font-mono font-bold text-black bg-white px-4 py-2 rounded-lg border-2 border-gray-300 select-none tracking-wider">
                                                {captchaCode}
                                            </span>
                                        </div>

                                        {/* Right Section: Button */}
                                        <button
                                            type="button"
                                            onClick={generateCaptcha}
                                            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 group text-sm font-medium w-full md:w-auto"
                                            title="Generate new captcha"
                                        >
                                            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                                            <ChevronRight className="w-4 h-4" />
                                            New Code
                                        </button>
                                    </div>


                                    {/* Captcha Input */}
                                    <div className="relative">
                                        <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'captcha' ? 'text-blue-600' :
                                            captchaValid === true ? 'text-green-600' :
                                                captchaValid === false ? 'text-red-600' : 'text-gray-400'
                                            }`}>
                                            {captchaValid === true ? <CheckCircle className="w-5 h-5" /> :
                                                captchaValid === false ? <X className="w-5 h-5" /> :
                                                    <Shield className="w-5 h-5" />}
                                        </div>
                                        <input
                                            name="captcha"
                                            placeholder="Enter the code above"
                                            className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 focus:outline-none bg-white/50 text-black placeholder-gray-500 ${focusedField === 'captcha' ? 'border-blue-500 bg-white shadow-lg' :
                                                captchaValid === true ? 'border-green-500 bg-green-50' :
                                                    captchaValid === false ? 'border-red-500 bg-red-50' :
                                                        'border-gray-200 hover:border-gray-300'
                                                }`}
                                            value={form.captcha}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('captcha')}
                                            onBlur={() => setFocusedField(null)}
                                            maxLength={6}
                                        />
                                        {formErrors.captcha && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <X className="w-4 h-4" />
                                                {formErrors.captcha}
                                            </p>
                                        )}

                                        {/* Validation Message */}
                                        {captchaValid === false && form.captcha !== "" && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <X className="w-4 h-4" />
                                                Incorrect code. Please try again.
                                            </p>
                                        )}
                                        {captchaValid === true && (
                                            <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
                                                <CheckCircle className="w-4 h-4" />
                                                Code verified successfully!
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting || !captchaValid || !form.name || !form.email || !form.mobile || !form.message}
                                    className={`group w-full py-4 px-8 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 ${isSubmitting || !captchaValid || !form.name || !form.email || !form.mobile || !form.message
                                        ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                                        : 'bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 hover:scale-105 text-white'
                                        }`}
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Submit via WhatsApp
                                                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                <p className="text-center text-gray-500 text-sm">
                                    🔒 Your information is secure and will only be used to contact you
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-16 text-center">
                    <div className="bg-[#09356C] rounded-3xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-green-300" />
                                <span>Expert Support Team</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-green-300" />
                                <span>Quick Response Time</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6 text-green-300" />
                                <span>Multiple Office Locations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}