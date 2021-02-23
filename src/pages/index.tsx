import Head from "next/head";
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
import Footer from "./sections/Footer";
import Media from "./sections/Media";

const Index = () => (
  <Container>
    <Head>
      <title>Greenwoodrecords - Tonstudio</title>
      <meta
        name="title"
        content="greenwoodrecords - Tonstudio - greenwood records greenwood-records by Fabian hainzl"
      />
      <meta content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1, width=device-width"
        shrink-to-fit="no"
      />
      <meta
        name="description"
        content="Tonstudio - Musikproduktion. Greenwoodrecords ist der perfekte Standort in Niederösterreich für ihre Aufnahmen. 
        Wir freuen uns über jedes Genre, egal ob Pop, Klassik, Jazz, Rock. Die lebhafte Akustik verleiht jeder Aufnahme einen natürlichen Klangcharakter. 
        Es wurde in der Planung besonderes Augenmerk auf die Raumhöhe und das Volumen gelegt. Die Aufnahmeräume ist unter anderem perfekt geeignet für Bandaufnahmen mit mittelgroßer Besetzung. -Fabian Hainzl"
      />
      <meta property="og:type" content="website"></meta>
      <meta property="og:site_name" content="greenwoodrecords.at" />
      <meta property="og:title" content="greenwoodrecords - Tonstudio" />
      <meta property="og:url" content="https://greenwoodrecords.at/"></meta>
      <meta
        property="og:description"
        content="Tonstudio - Musikproduktion. Greenwoodrecords ist der perfekte Standort für ihre Aufnahmen. 
        Wir freuen uns über jedes Genre, egal ob Pop, Klassik, Jazz, Rock."
      />
    </Head>
    <ImageSlider />
    <Navigation />
    <Main>
      <Studio />
      <Equipment />
      <Services />
      <Gallery />
      <Contact />
      <Media />
    </Main>
    <Footer />
    {/* <DarkModeSwitch /> */}
  </Container>
);

export default Index;
