import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Message } from 'primereact/message'
import listaDepartamentos from '../../../Services/Departamentos/listaDepartamentos'
import excluiDepartamento from '../../../Services/Departamentos/excluiDepartamento'

const Departamentos = () => {
  const navigate = useNavigate()
  const [departamentos, setDepartamentos] = useState()
  const [loading, setLoading] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [erro, setErro] = useState('')

  useEffect(() => {
    if(!departamentos) {
      listaDepartamentos({ setDepartamentos, setLoading })
    }
  }, [departamentos])


  const containerErro = () => {
    return (
      <div className='text-left w-full flex justify-between items-center'>
        {erro}
        <Button
          icon="pi pi-times"
          severity='danger'
          rounded
          size='small'
          onClick={() => {
            setErro('')
          }}
        />
      </div>
    )
  }

  const bodyAcao = (departamento: any) => {
    return (
      <>
        <Button icon="pi pi-pencil" rounded severity='warning' className='mr-2'/>
        <Button 
          icon="pi pi-trash"
          rounded 
          loading={loadingDelete}
          severity='danger'
          onClick={async () => {
            setLoadingDelete(true)
            try {
              await excluiDepartamento(departamento.id_departamento)
              
              // Duas alternativas:
              // com navigate(0) é forçada uma nova rederizacao da rota
              navigate(0)
              // com setDepartamentos(undefined) o useEffect é disparado e o dado é recarregado
              //setDepartamentos(undefined)
            } catch(e: any) {
              // Mostrar a mensagem do erro
              if (e.response?.data?.message) {
                const mensagem = `[ ${departamento.nome} ] ${e.response?.data?.message}`
                setErro(mensagem)
              }
              setLoadingDelete(false)
            }
          }}
        />
      </>
    )
  }

  return (
    <>
      <div className="col-span-12">

        <div className="flex justify-between items-center my-6">
          <h2 className="text-2xl font-bold">Listagem de Departamentos</h2>
          <Button
            icon="pi pi-plus"
            label="novo"
            severity="info"
            rounded
            onClick={() => {
              navigate('/departamentos/new')
            }}
          />
        </div>

      </div>

      <div className='col-span-12' hidden={erro === ''}>
        <Message 
          content={containerErro}
          className='w-full' 
          severity='error'
        />
      </div>

      <div className="col-span-12">
        <DataTable value={departamentos} loading={loading}>
          <Column field="sigla" header="Sigla"/>
          <Column field="nome" header="Nome"/>
          <Column header="Ação" body={bodyAcao} />
        </DataTable>
      </div>
    </>
  )
};

export default Departamentos;
