import api from "../api"

// Vai buscar os dados do respectivo departamento
export const getDepartamento = async (id: any) => {
  const result = await api.get(`/departamentos/${id}`)
  return result
}

// Vai mandar a atualização do departamento para a API
export const atualizaDepartamento = async (payload: any) => {
  const result = await api.put(`/departamentos/${payload.id}`, payload)
  return result
}
