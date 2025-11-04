import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentGrid from "./components/ContentGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ContentGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
