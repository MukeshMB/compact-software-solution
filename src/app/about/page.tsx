import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUsPage from "@/containers/About"; // Assuming you have an About container
import FloatingActionButtons from "@/containers/HomePage/FloatingActionButtons";

export const metadata = {
    title: "About Us | Compact Softwares & Services",
    description:
        "💼 Learn more about CSSBusy – a leading provider of professional training, business solutions, and GST software. Discover our journey, values, and mission to empower businesses across India.",
    keywords: [
        "about CSSBusy",
        "CSSBusy company info",
        "CSSBusy mission",
        "GST software provider",
        "professional training institute",
        "business software solutions",
        "accounting training Delhi NCR",
        "CSSBusy team",
        "CSSBusy journey",
        "Compact Softwares background"
    ],
    openGraph: {
        title: "About Us | CSSBusy",
        description:
            "Discover CSSBusy's vision and commitment to delivering top-notch training and software solutions. Learn more about our team, mission, and core values.",
        url: "https://www.cssbusy.com/about-us",
        siteName: "CSSBusy",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About CSSBusy",
        description:
            "🏢 Get to know CSSBusy – our story, team, and goals. Building a better digital future through training and business software excellence.",
    },
};

export default function About() {
    return (
        <>
            <Header activePage="about" />
            <AboutUsPage />
            <Footer />
            <FloatingActionButtons />
        </>
    );
}
