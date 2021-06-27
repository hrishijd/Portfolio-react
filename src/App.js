import './App.css';
import Navbar from './Navbar';
import About from './About'
import Skills from './Skills'
import Education from './Education'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Education/>      
      <Skills/>
    </div>
  );
}

export default App;
