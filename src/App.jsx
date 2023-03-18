import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NutritionalInfo from "./components/NutritionalInfo";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NutritionalInfo />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
