
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/containers/HomePage";

export default function Home() {
  return (
    <>
      <Header activePage="home" />
      <HomePage />
      <Footer />
    </>
  );
}
