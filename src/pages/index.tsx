import { Container } from "../components/Container";
import { Main } from "../components/Main";
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { ImageSlider } from "../components/ImageSlider";
import { Navigation } from "../components/Navigation";
import Contact from "./sections/Contact";
import Gallery from "./sections/Gallery";
import Studio from "./sections/Studio";
import Services from "./sections/Services";
import Equipment from "./sections/Equipment";
import Footer from './sections/Footer';

const Index = () => (
  <Container>
    <ImageSlider />
    <Navigation />
    <Main>
      <Studio />
      <Equipment />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </Main>

    {/* <DarkModeSwitch /> */}
   
  </Container>
);

export default Index;
