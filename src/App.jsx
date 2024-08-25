import './App.css'
import LandingPage from './LandingPage'
import Header from './Header'
import About from './About'
import Updates from './Updates'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Modal from './components/Modal'
function App() {
  return (
    <div className='App text-center'>
        <Modal/>
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
