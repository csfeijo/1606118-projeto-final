import { useState } from "react"
import { Button } from "primereact/button"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { useNavigate } from "react-router-dom"

const FormDepartamento = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [sigla, setSigla] = useState('')
  const [temErroNome, setTemErroNome] = useState(false)
  const [temErroSigla, setTemErroSigla] = useState(false)

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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="nome">Nome</label>
        </FloatLabel>
        <small 
          className="text-red-600"
          hidden={!temErroNome}
        >
          Nome inválido
        </small>
      </div>

      <div className="col-span-6">
       <FloatLabel>
          <InputText
            id="sigla"
            value={sigla}
            onChange={(e) => setSigla(e.target.value)}
          />
          <label htmlFor="sigla">Sigla</label>
        </FloatLabel>
        <small 
          className="text-red-600"
          hidden={!temErroSigla}
        >
          Sigla inválida
        </small>
      </div>

      {/* TERCEIRA LINHA */}
      <div className="col-span-12">
        <Button
          label="salvar"
          severity="success"
          icon="pi pi-save"
          className="w-full"
          onClick={() => {

            if (nome === '') {
              setTemErroNome(true)
              return
            }

            if (sigla === '') {
              setTemErroSigla(true)
              return
            }



          }}
        />
      </div>
      


    </>
  )
}

export default FormDepartamento
