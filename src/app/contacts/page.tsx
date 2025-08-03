import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactUsPage from "@/containers/Contacts";
import FloatingActionButtons from "@/containers/HomePage/FloatingActionButtons";

export const metadata = {
    title: "Contact Us | Compact Softwares & Services",
    description: "📞 Reach out to CSSBusy for inquiries, support, or partnership opportunities. We're here to assist you with training, software, and business services. Visit us or send us a message today!",
    keywords: [
        "CSSBusy contact",
        "get in touch CSSBusy",
        "CSSBusy inquiry",
        "training contact",
        "accounting software support",
        "business services Delhi",
        "contact Kundli branch",
        "contact Bahadurgarh",
        "Rohini Delhi office",
        "accounting training center contact"
    ],
    openGraph: {
        title: "Contact Us | CSSBusy",
        description: "Connect with CSSBusy – Professional training, GST software solutions, and business services. Call, email, or visit our branches in Delhi NCR.",
        url: "https://www.cssbusy.com/contact-us",
        siteName: "CSSBusy",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact CSSBusy",
        description: "📩 Message or call us for training, business software, and services. Multiple branches across Delhi NCR.",
    },
};

export default function Contacts() {
    return (
        <>
            <Header activePage="contacts" />
            <ContactUsPage />
            <Footer />
            <FloatingActionButtons />
        </>
    )
}


