import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"

const SubHeader = ({ title, icon, label, severity, route }: any) => {
  const navigate = useNavigate()

  return (
    <div className="col-span-12">

      <div className="flex justify-between items-center my-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button
          icon={`pi ${icon}`}
          label={label}
          severity={severity}
          rounded
          onClick={() => {
            navigate(route)
          }}
        />
      </div>

    </div>
  )
}

export default SubHeader
