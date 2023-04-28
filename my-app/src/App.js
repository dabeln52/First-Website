import React from 'react';
import Navbar from './Top';
import SignupForm from './signup';
import Services from './ProjectSection';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './footer';
//import { connection } from '../db';

/*connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database!');
  }
});*/

function App() {
  return (
    <div>
      <Navbar />
      <SignupForm />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
