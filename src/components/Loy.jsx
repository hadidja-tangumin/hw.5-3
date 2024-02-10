import { Outlet } from 'react-router-dom'
import "../App.css"


const Loy = () => {
  return (
    <div>
        <Outlet/>
        <footer className="footer">
            <p>09.02.2024</p>
        </footer>
    </div>
  )
}

export default Loy