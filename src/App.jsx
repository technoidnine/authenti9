import Footer from "./components/Footer";
import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <AllRoutes/>
        <Footer />
      </>
    </div>
  )
}

export default App