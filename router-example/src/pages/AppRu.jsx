

import { useEffect, useState } from "react";
import Loader from "../components/_ru/Loader";
import Navbar from "../components/_ru/navbar"
import TelegramButton from "../components/telegram"
import Header from "../components/_ru/header"
import About from "../components/_ru/about"
import Tour from "../components/_ru/tour"
import Hotel from "../components/_ru/hotel"
import AviaChiptalar from "../components/_ru/aviatickets"
import PopularCities from "../components/_ru/popularCities"
import Partners from "../components/_ru/partners"
import ContactSection from "../components/_ru/contact"
import Footer from "../components/_ru/footer";
function AppRu() {

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

export default AppRu