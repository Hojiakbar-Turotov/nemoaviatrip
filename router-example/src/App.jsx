import Navbar from "./components/navbar"
import TelegramButton from "./components/telegram"
import Header from "./components/header"
import About from "./components/about"
import Tour from "./components/tour"
import Hotel from "./components/hotel"
import AviaChiptalar from "./components/aviatickets"
import PopularCities from "./components/popularCities"
import Partners from "./components/partners"
import ContactSection from "./components/contact"
import Footer from "./components/footer"
function App() {

  return (
    <>
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
  )
}

export default App
