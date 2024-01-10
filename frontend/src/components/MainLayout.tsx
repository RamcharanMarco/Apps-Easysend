import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="mainLayout">
        <Outlet/>
    </div>
  )
}

export default MainLayout