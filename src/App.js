import React, { useState, useRef } from 'react'
import Contact from './components/contact'
import Features from './components/features'
import Header from './components/header'
import Nav from './components/nav'
import Roadmap from './components/roadmap'
import Tokenomics from './components/tokenomic'
import './App.css'

function App() {
  const TopRef = useRef(null)
  const FeaturesRef = useRef(null)
  const TokenomicsRef = useRef(null)
  const RoadmapRef = useRef(null)
  const scrollToTop = () => {
    TopRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToFeatures = () => {
    FeaturesRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToTokenomics = () => {
    TokenomicsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToRoadmap = () => {
    RoadmapRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div ref={TopRef}>
      <Nav
        scrollToTop={scrollToTop}
        scrollToFeatures={scrollToFeatures}
        scrollToTokenomics={scrollToTokenomics}
        scrollToRoadmap={scrollToRoadmap}
      />
      <div>
        <Header />
        <Features FeaturesRef={FeaturesRef} />
        <Tokenomics TokenomicsRef={TokenomicsRef} />
        <Roadmap RoadmapRef={RoadmapRef} />
        <Contact />
      </div>
    </div>
  )
}

export default App
