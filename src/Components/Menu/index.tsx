import { useState } from "react"
import { Sidebar } from "primereact/sidebar"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div className="p-4 bg-slate-400 border-b-2 border-slate-950">
        <Button
          icon="pi pi-bars"
          onClick={() => setVisible(true)}
          className="bg-slate-600"
        />
      </div>

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div className="flex flex-col">
          <p className="text-xl mb-6">MENU</p>
          <Button
            icon="pi pi-home"
            label="home"
            severity="secondary"
            onClick={() => {
              navigate('/')
              setVisible(false)
            }}
            className="mb-4 text-left"
          />

          <Button
            icon="pi pi-truck"
            label="departamentos"
            severity="secondary"
            onClick={() => {
              navigate('/departamentos')
              setVisible(false)
            }}
            className="text-left"
          />
        </div>
      </Sidebar>    
    </>
  )
}

export default Menu
