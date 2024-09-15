import AboutMe from "../components/common/AboutMe/AboutMe";
import FaqSection from "../components/common/FaqSection/FaqSection";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header"
import HomeBanner from "../components/common/HomeBanner/HomeBanner";
import { Services, ServiceInfoSection } from "../components/common/Services/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Services />
      <ServiceInfoSection />
      <AboutMe />
      <FaqSection />
      <Footer />
    </div>
  );
}