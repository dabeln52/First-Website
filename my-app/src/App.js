import React from 'react';
import Navbar from './Top';
import SignUp from './signup';
import Services from './ProjectSection';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './footer';

function App() {
  return (
    <div>
      <Navbar />
      <SignUp />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
