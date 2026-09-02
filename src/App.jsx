import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import StatSection from './Components/Banner/StatSection'
import Navbar from './Components/Navbar/Navbar'
import PremiumDigi from './Components/Banner/PremiumDigi'
import { useState } from 'react'
import StepSection from './Components/Banner/StepSection'
import TransparentPricing from './Components/Banner/TransparentPricing'
import WorkPart from './Components/Banner/WorkPart'

const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
}

const fetchDatas = async () => {
  const res = await fetch("/public/transparentData.json")
  return res.json();
}

function App() {
  const promiseFetchProducts = fetchProducts();
  const fetchPromise = fetchDatas();
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <>
      <Navbar selectedProducts={selectedProducts}></Navbar>
      <Banner></Banner>
      <StatSection></StatSection>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PremiumDigi promiseFetchProducts={promiseFetchProducts} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></PremiumDigi>
      </Suspense>
      <StepSection></StepSection>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <TransparentPricing fetchPromise={fetchPromise}></TransparentPricing>
      </Suspense>
      <WorkPart></WorkPart>
    </>
  )
}

export default App