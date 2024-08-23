import './App.css'
import LandingPage from './LandingPage'
import Header from './Header'
import About from './About'
import Updates from './Updates'
import Newsletter from './Newsletter'
import Footer from './Footer'

function App() {
  return (
    <div className='App text-center'>
        <Header/>
        <LandingPage/>
        <About/>
        <Updates/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default App
