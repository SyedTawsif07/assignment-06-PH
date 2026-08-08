import './App.css'
import Banner from './Components/Banner/Banner'
import PremiumDigi from './Components/Banner/PremiumDigi'
import StatSection from './Components/Banner/StatSection'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatSection></StatSection>
      <PremiumDigi></PremiumDigi>
    </>
  )
}

export default App