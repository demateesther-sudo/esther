import "./page.css";
import Navbar      from "./components/navbar";
import Hero        from "./components/hero";
import Collections from "./components/collections";
import CardList    from "./components/cardlist";
import PromoBanner from "./components/promobanner";
import Features    from "./components/features";
import Footer      from "./components/footer";

export default function HomePage() {
  return (
    <main className="unomart">
      <Navbar />
      <Hero />
      <Collections />
      <CardList />
      <PromoBanner />
      <Features />
      <Footer />
    </main>
  );
}