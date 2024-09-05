import { Button } from "primereact/button"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { useNavigate } from "react-router-dom"

const FormDepartamento = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="col-span-12">

        <div className="flex justify-between items-center my-6">
          <h2 className="text-2xl font-bold">Cadastro de Departamento</h2>
          <Button
            icon="pi pi-chevron-left"
            label="voltar"
            severity="info"
            rounded
            onClick={() => {
              navigate('/departamentos')
            }}
          />
        </div>

      </div>
      {/*  SEGUNDA LINHA */}
      <div className="col-span-6">
        <FloatLabel>
          <InputText
            id="nome"
            className="w-full"
          />
          <label htmlFor="nome">Nome</label>
        </FloatLabel>
      </div>

      <div className="col-span-6">
       <FloatLabel>
          <InputText
            id="sigla"
          />
          <label htmlFor="sigla">Sigla</label>
        </FloatLabel>
      </div>

      {/* TERCEIRA LINHA */}
      <div className="col-span-12">
        <Button
          label="salvar"
          severity="success"
          icon="pi pi-save"
          className="w-full"
        />
      </div>
      


    </>
  )
}

export default FormDepartamento
