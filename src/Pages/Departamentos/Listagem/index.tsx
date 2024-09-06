import { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import listaDepartamentos from '../../../Services/Departamentos/listaDepartamentos';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!departamentos) {
      listaDepartamentos({ setDepartamentos, setLoading })
    }
  }, [departamentos])


  const bodyAcao = () => {
    return (
      <>
        <Button icon="pi pi-pencil" rounded severity='warning' className='mr-2'/>
        <Button icon="pi pi-trash" rounded severity='danger'/>
      </>
    )
  }

  return (
    <>
      <div className="col-span-12">
        <h1>Listagem de Departamentos</h1>
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
