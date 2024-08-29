import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/departamentos" element={<h1>Departamentos</h1>} />
      <Route path="/departamentos/new" element={<h1>Cadastro de Departamento</h1>} />
      <Route path="/departamentos/edit/:id" element={<h1>Edição de Departamento</h1>} />
      <Route path="*" element={<h1>404 - Não Encontrado</h1>} />
    </Routes>
  )
}

export default AppRoutes
