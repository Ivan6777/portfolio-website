import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { PortfolioGrid } from '@/app/components/PortfolioGrid';
import { SkillsClients } from '@/app/components/SkillsClients';
import { DomainCards } from '@/app/components/DomainCards';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Header />
      <main>
        <HeroSection />
        <PortfolioGrid />
        <DomainCards />
        <SkillsClients />
        <Footer />
      </main>
    </div>
  );
}
