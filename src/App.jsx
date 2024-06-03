
import './main.css'
import First from './First_page.jsx'
import Second from './second_page.jsx'
import Third from './Third_Page.jsx'
import Fourth from './Fourth_Page.jsx'
import Fifth from './Fifth_page.jsx'
import Sixth from './sixth_page.jsx'
import Seventh from './Seventh_page.jsx'
function App() {
  

  return (
    <>
    <div className='container'>
    
    <First/>
   </div>
    <div className='container'>
    <Second/>
    
    </div>
    <div className='container'>
    <Third/>
    </div>
    <div className='container'>
    <Fourth/>
    </div>
    <div className='container'>
  <Fifth/>
  </div>
  <div className='container'> <Sixth/></div>
  <Seventh/>
      </>
  )
}

export default App
