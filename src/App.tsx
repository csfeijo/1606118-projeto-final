import { Button } from 'primereact/button'
import './App.css'

function App() {

  return (
    <>
      <h1 className='lg:bg-[#0096D6] md:bg-orange-400 sm:bg-green-400 bg-slate-400 px-4 py-8 border-4 border-solid rounded border-black text-white'>Projeto Final 2024</h1>

      <Button 
        label="Like"
        icon="pi pi-heart-fill"
        severity='danger'
      />
    </>
  )
}

export default App
