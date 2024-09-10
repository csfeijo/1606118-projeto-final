import api from "../api"

const excluiDepartamento = async (id_departamento: any) => {
  const result = await api.delete(`/departamentos?id=${id_departamento}`)
  return result
}

export default excluiDepartamento
