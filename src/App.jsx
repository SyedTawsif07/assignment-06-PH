import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import PremiumDigi from './Components/Banner/PremiumDigi'
import StatSection from './Components/Banner/StatSection'
import Navbar from './Components/Navbar/Navbar'

const fetchProducts = async () => {
  const res = await fetch("/public/products.json");
  return res.json();
}
function App() {

  const promiseFetchProducts = fetchProducts();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatSection></StatSection>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PremiumDigi promiseFetchProducts={promiseFetchProducts}></PremiumDigi>
      </Suspense>

    </>
  )
}

export default App