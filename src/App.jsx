import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'

import Testimonial from './components/Section/Testimonial/Testimonial'
import ContactForm from './components/Section/Contact/ContactForm'
import Experience from './components/Section/Experiences/Experience'
import AboutMe from './components/Section/About Me/AboutMe'
import Projects from './components/Section/Projects/Projects'
import Hero from './components/Section/Hero/Hero'
import Header from './components/Section/Header/Header'
import Skills from './components/Section/Skills/Skills'

function App() {
  

  return (
    <>
    <Header />
    <Hero />
    <Skills />
    <Experience />
    <AboutMe />
    <Testimonial />
    
    <Projects />
   
    </>
  )
}

export default App
