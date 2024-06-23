import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PostSection from "./components/PostSection";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PostSection />
    </div>
  );
}

export default App;
