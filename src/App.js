import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import './style/App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='side'>
        <Navbar />
      </div>
      <div className='main'>
        <Welcome />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
