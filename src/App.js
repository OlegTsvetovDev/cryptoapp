import { Navbar, Main, Footer } from './components'
import 'antd/dist/antd.css'
import './App.css'


function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <div className="main">
        <Main />
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  )
}


export default App
