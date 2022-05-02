import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import './style/App.scss';
import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <HashLoader color={'#08fdd8'} loading={loading} size={150} />
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default App;
