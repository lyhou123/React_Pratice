import './App.css'
import NavbarComponent1 from './componet/NavbarComponent'
import Card1 from './componet/card'
import FeedBack1 from './componet/feedback'
import Footer1 from './componet/footer'
import Main from './componet/main'
function App () {
  return (
    <div className="h-screen flex flex-col justify-between">
      <NavbarComponent1/>
      <Main/>
      <Footer1/>
  
    </div>
  )
}
export default App
