import './App.css';
import Header from './Components/Header/Header';
import Aboutus from './Components/AboutUs/Aboutus';
import { Hero } from './Components/Banner/Banner';
import { StreamlinedExperience } from './Components/Services/Services';
import { MoreFeatures } from './Components/MoreFeatures/MoreFeatures';
import Footer from './Components/Footer/Footer';
import { Services } from './Components/MoreFeatures/Services';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='pt-60'>
      <h2 className='heading'>ApexPad DApps</h2>
    <Services/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
