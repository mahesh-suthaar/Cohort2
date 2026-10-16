import Nav from './components/Nav'
import Hero from './components/Hero'
import Whatis from './components/Whatis'
import CardContainer from './components/CardContainer'
import Lower from './components/Lower'

const App = () => {
  return (
    <div className="w-full px-15 py-8">
      <Nav />
      <Hero />
      <Whatis />
      <CardContainer />
      <Lower />
    </div>
  )
}

export default App
