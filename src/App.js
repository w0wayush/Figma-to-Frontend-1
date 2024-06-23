import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PostBar from "./components/PostBar";
import PostSection from "./components/PostSection";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PostBar />
      <PostSection />
    </div>
  );
}

export default App;
