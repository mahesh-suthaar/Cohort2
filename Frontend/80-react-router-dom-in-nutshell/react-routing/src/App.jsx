import {createBrowserRouter, RouterProvider, Outlet, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Product from './pages/Product'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Man from './pages/Man'
import Woman from './pages/Woman'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function RootLayout(){
  return(
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children:[
      {index: true, element: <Home />}, //renders at '/' 
      {
      path:'/product',
      element: <Product />,
      children:[
        {path:'man',
        element: <Man />
        },
        {path:'woman',
        element: <Woman />
        }
      ]
      }, 
      {path:'/contact',element: <Contact />},
      {path:'/shop',element: <Shop />},
      {path: '*',element: <NotFound />}
    ]
  },
  
])


function App() {
  return (
    <div className='h-screen bg-gray-700'>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
