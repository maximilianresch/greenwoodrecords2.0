import { Container } from '../components/Container'
import { Main } from '../components/Main'
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import {ImageSlider} from '../components/ImageSlider'
import {Navigation} from '../components/Navigation'
import Contact from './sections/Contact'
import Gallery from './sections/Gallery'
import Studio from './sections/Studio'
import Services from './sections/Services'
import Equipment from './sections/Equipment'



const Index = () => (
  <Container >
    <Navigation />
      <ImageSlider />
    <Main>
      
      <Studio />
      <Equipment />
      <Services />
      <Gallery />
     <Contact />
    
    </Main>

    {/* <DarkModeSwitch /> */}
    <Footer>
    
    </Footer>
   
  </Container>
)

export default Index
