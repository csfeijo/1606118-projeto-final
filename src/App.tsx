import { BrowserRouter } from 'react-router-dom'
import { Card } from 'primereact/card'
import Menu from './Components/Menu'
import AppRoutes from './Routes'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu/>
        <div className="w-full max-w-[calc(100vw-16px)] md:max-w-[1280px] mx-auto mt-6">
          <Card>
            <div className="grid grid-cols-12 gap-1">
              <AppRoutes/>
            </div>
          </Card>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
