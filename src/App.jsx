import { useState } from 'react'

import './assets/css/common.css'
import AppNavBar from './components/AppNavBar'
import Landingpage from './pages/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='maindiv'>

      <Landingpage/>
    </div>

  )
}

export default App
