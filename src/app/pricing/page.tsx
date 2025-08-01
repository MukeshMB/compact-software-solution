import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingActionButtons from "@/containers/HomePage/FloatingActionButtons";
import PricingPage from "@/containers/PricingPage";

export const metadata = {
    title: "Pricing | BUSY Software Plans | Compact Softwares",
    description: "💼 Explore BUSY Software's perpetual and subscription pricing plans. Choose from BASIC, STANDARD, ENTERPRISE or BLUE, SAFFRON, EMERALD with features like GST, inventory, job work, payroll, and more.",
    keywords: [
        "BUSY software pricing",
        "BUSY perpetual plans",
        "BUSY subscription plans",
        "BUSY accounting software cost",
        "BUSY GST software plans",
        "buy BUSY software",
        "BUSY enterprise plan",
        "BUSY software deals",
        "Compact Softwares BUSY pricing"
    ],
    openGraph: {
        title: "Pricing | BUSY Software Plans",
        description: "See BUSY software pricing for perpetual and subscription plans including GST returns, inventory, mobile apps, cloud backup, and payroll.",
        url: "https://www.cssbusy.com/pricing",
        siteName: "CSSBusy",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "BUSY Software Pricing Plans",
        description: "Compare pricing for BUSY software – perpetual and subscription options with business-ready features and cloud support.",
    },
};

export default function Pricing() {
    return (
        <>
            <Header activePage="pricing" />
            <PricingPage />
            <Footer />
            <FloatingActionButtons />
        </>
    )
}


