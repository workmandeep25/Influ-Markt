import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Section1 } from './Component/Section1';
import { Section2 } from './Component/Section2';
import { Section3 } from './Component/Section3';
import { Section4 } from './Component/Section4';
import { Section5 } from './Component/Section5';
import { Footer } from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;
