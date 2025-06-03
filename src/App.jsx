import { useState } from 'react'
import './App.css'
import Header from './components/header'
import MainSection from './components/MainSection'
import Problem from './components/problem'
import Solution from './components/Solution'
import Solution2 from './components/solution2'
import BusinessModel from './components/BModel'
import BusinessModel2 from './components/BModel2'
import Example from './components/Example'
import ProfitDistribution from './components/ProfitDistribution'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <Header/>
      <MainSection/>
      <Problem/>
      <Solution/>
      <Solution2/>
      <BusinessModel/>
      <BusinessModel2/>
      <Example/>
      <ProfitDistribution/>
      <Footer/>
    </div>
  )
}

export default App

