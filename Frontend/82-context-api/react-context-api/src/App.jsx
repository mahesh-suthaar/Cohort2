import GlobalData from './context/GlobalData'
import Card from './components/Card'

function App() {

  let user = 'Manoj Sharma'

  return (
    <div className="h-screen p-4 bg-gray-900">

      <GlobalData.Provider value={user}>
        <Card />
      </GlobalData.Provider>
      
    </div>
  )
}

export default App
