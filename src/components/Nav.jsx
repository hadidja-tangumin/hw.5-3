import { NavLink } from 'react-router-dom'
import "../App.css"


const Nav = () => {
  return (
    <nav className="nav">
        <ul className="nav_ul">
            <li>
               <NavLink to={"/"}>Home</NavLink> 
            </li>
            <li>
               <NavLink to={"/post_page"}>Posts</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav