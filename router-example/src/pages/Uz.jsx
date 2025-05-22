

import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/navbar"
import TelegramButton from "../components/telegram"
import Header from "../components/header"
import About from "../components/about"
import Tour from "../components/tour"
import Hotel from "../components/hotel"
import AviaChiptalar from "../components/aviatickets"
import PopularCities from "../components/popularCities"
import Partners from "../components/partners"
import ContactSection from "../components/contact"
import Footer from "../components/footer";
function AppUz() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kamida 2 soniya kutish
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {
        loading ? <Loader /> : <>
          <Navbar />
          <TelegramButton />
          <Header />
          <About />
          <Tour />
          <Hotel />
          <AviaChiptalar />
          <PopularCities />
          <Partners />
          <ContactSection />
          <Footer />
        </>
      }
    </>
  )
}

export default AppUz