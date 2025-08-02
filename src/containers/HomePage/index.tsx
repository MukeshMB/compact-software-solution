import AboutUs from './AboutUs';
import BusyCloud from './BusyCloud';
import BusyMobileApp from './BusyMobileApp';
import BusyRecomSection from './BusyRecom';
import Course from './Course';
import FloatingActionButtons from './FloatingActionButtons';
import HeroSection from './HeroSection';
import Partner from './Partner';
import PricingSection from './PricingSection';
import Services from './Services';
import StatsBanner from './Stats';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <Services />
            <StatsBanner />
            <PricingSection />
            <BusyCloud />
            <Course />
            <BusyMobileApp />
            <BusyRecomSection />
            <Partner />
            <AboutUs />
            <FloatingActionButtons />
        </div>
    );
};
