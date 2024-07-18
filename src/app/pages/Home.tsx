import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header"
import HomeBanner from "../components/common/HomeBanner/HomeBanner";
import Services from "../components/common/Services/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      {/* <HomeBanner /> */}
      <Services />
      <Footer />
    </div>
  );
}