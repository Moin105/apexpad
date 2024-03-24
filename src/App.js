import './App.css';
import Header from './Components/Header/Header';
import Aboutus from './Components/AboutUs/Aboutus';
import { Hero } from './Components/Banner/Banner';
import { StreamlinedExperience } from './Components/Services/Services';
import { MoreFeatures } from './Components/MoreFeatures/MoreFeatures';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     {/* <div className="glowing-line"></div> */}
     <Header />
     <Hero/>
     {/* <div className="moving-gradient"></div> */}
     <StreamlinedExperience/>
     <MoreFeatures/>
     {/* <Aboutus/> */}
     <Footer/>
    </div>
  );
}

export default App;
