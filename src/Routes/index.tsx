import { Routes, Route } from 'react-router-dom'
import Departamentos from '../Pages/Departamentos/Listagem'
import FormDepartamento from '../Pages/Departamentos/Forms'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/departamentos" element={<Departamentos/>} />


      <Route path="/departamentos/new" element={<FormDepartamento/>} />
      <Route path="/departamentos/edit/:id" element={<FormDepartamento/>} />


      <Route path="*" element={<h1>404 - Não Encontrado</h1>} />
    </Routes>
  )
}

export default AppRoutes
