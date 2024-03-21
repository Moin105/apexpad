import './App.css';
import Header from './Components/Header/Header';
import Aboutus from './Components/AboutUs/Aboutus';
import { Hero } from './Components/Banner/Banner';
import { StreamlinedExperience } from './Components/Services/Services';
import { MoreFeatures } from './Components/MoreFeatures/MoreFeatures';

function App() {
  return (
    <div className="App">
     {/* <div className="glowing-line"></div> */}
     <Header />
     <Hero/>
     {/* <div className="moving-gradient"></div> */}
     <StreamlinedExperience/>
     <MoreFeatures/>
     <Aboutus/>
    </div>
  );
}

export default App;
