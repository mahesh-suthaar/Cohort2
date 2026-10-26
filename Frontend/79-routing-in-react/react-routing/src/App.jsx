import {Route , Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Product from './pages/Product'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Man from './pages/Man'
import Woman from './pages/Woman'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className='h-screen bg-gray-900'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        {/* nested routes */}
        <Route path='/product/man' element={<Man />} />
        <Route path='/product/woman' element={<Woman />} />
        {/* ****** */}
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />

        {/* Universal not found page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
