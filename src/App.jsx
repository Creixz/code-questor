import './App.css'
import Navbar from './navbar/Navbar'
import Questions from './questions/Questions'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Questions />
      </div>
    </>
  )
}

export default App
