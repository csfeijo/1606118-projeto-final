import { BrowserRouter, Link } from 'react-router-dom'
import AppRoutes from './Routes'
import { Button } from 'primereact/button'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1 className='lg:bg-[#0096D6] md:bg-orange-400 sm:bg-green-400 bg-slate-400 px-4 py-8 border-4 border-solid rounded border-black text-white'>
          <Link className="p-2 hover:underline" to="/">Home</Link>
          <Link className="p-2 hover:underline" to="/departamentos">Departamentos</Link>
        </h1>

        <div className="w-full max-w-[calc(100vw-16px)] md:max-w-[1280px] mx-auto mt-6">
          <div className="grid grid-cols-12 gap-1">
            <AppRoutes/>
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
