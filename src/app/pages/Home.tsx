import AboutMe from "../components/common/AboutMe/AboutMe";
import FaqSection from "../components/common/FaqSection/FaqSection";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header"
import HomeBanner from "../components/common/HomeBanner/HomeBanner";
import { Services, ServiceInfoSection } from "../components/common/Services/Services";
import StatsOverlay from "../components/common/StatsOverlay/StatsOverlay";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      {/* <StatsOverlay
        casesAttended={50}
        statesServed={26}
        yearsOfExperience={7}
      /> */}
      <Services />
      <ServiceInfoSection />
      <AboutMe />
      <FaqSection />
      <Footer />
    </div>
  );
}