import api from "../api"

const listaDepartamentos = async ({ setDepartamentos, setLoading }: any) => {
  setLoading(true)
  const result = await api.get('/departamentos')
  setDepartamentos(result.data)
  setLoading(false)
}

export default listaDepartamentos
