
import { Suspense } from 'react'
import './App.css'
import DaisyNave from './componant/DaisyNave/DaisyNave'
import NavBar from './componant/NavBar/NavBar'
import PricingOptions from './componant/PricingOptions/PricingOptions'

function App() {

  const PricingPromice = fetch("PricingData.json").then(res => res.json())

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNave></DaisyNave> */}
      </header>
      <main>
        <Suspense fallback={
          <span className="loading loading-spinner loading-lg"></span>
        }>
          <PricingOptions PricingPromice={PricingPromice}></PricingOptions>
        </Suspense>
      </main>

      <footer>

      </footer>



    </>
  )
}

export default App
