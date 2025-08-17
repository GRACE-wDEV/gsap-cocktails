import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/hero.jsx';
import Cocktails from './components/Cocktails.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero />
      <Cocktails />
    </main>
  )
}

export default App
