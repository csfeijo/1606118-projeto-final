import api from "../api"

const insereDepartamento = async (payload: any) => {
  const result = await api.post('/departamentos', payload)
  return result
}

export default insereDepartamento
