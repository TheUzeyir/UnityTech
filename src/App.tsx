import Header from "./assets/layout/header/Header"
import MainPage from "./assets/page/mainPage/MainPage"
import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <Header/>
      <MainPage/>
    </Router>
    </>
  )
}

export default App
