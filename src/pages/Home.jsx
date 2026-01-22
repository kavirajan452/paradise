import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Divisions from '../components/sections/Divisions';
import Products from '../components/sections/Products';
import Technology from '../components/sections/Technology';
import Responsibility from '../components/sections/Responsibility';
import Clients from '../components/sections/Clients';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Divisions />
      <Products />
      <Technology />
      <Responsibility />
      <Clients />
      <CTA />
    </main>
  );
};

export default Home;
