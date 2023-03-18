import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NutritionalInfo from "./components/NutritionalInfo";
import Products from "./components/Products";
import Footer from "./components/Footer";
import NavbarElement1 from "./assets/navbar-element-1.png";
import NavbarElement2 from "./assets/navbar-element-2.png";

function App() {
  return (
    <div className="App">
      <img className="navbar-element-1" src={NavbarElement1} />
      <img className="navbar-element-2" src={NavbarElement2} />
      <Navbar />
      <Hero />
      <NutritionalInfo />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
