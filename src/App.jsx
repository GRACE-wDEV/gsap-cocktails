import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/hero.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero />
      <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App
