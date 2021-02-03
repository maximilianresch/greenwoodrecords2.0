import { Container } from '../components/Container'
import { Main } from '../components/Main'
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import {ImageSlider} from '../components/ImageSlider'
import {Navigation} from '../components/Navigation'
import {Contact} from '../components/Contact'
import {Gallery} from '../components/Gallery'
import {Studio} from '../components/Studio'
import {Services} from '../components/Services'
import {Equipment} from '../components/Equipment'



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
