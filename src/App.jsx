import { Routes, Route } from 'react-router-dom'


import Nav from './components/Nav.jsx'
import Loy from './components/Loy.jsx'
import Home from './pages/Home'
import Pagin from './pages/Pagin.jsx'
import Sing from './pages/Sing.jsx'


const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Loy/>}>
        <Route index element={<Home/>} />
        <Route path='post_page' element={<Pagin/>} />
        <Route path='posts/:pageId' element={<Sing/>} />
        <Route path='*' element={<div><p>404</p></div>} />
      </Route>
    </Routes>
    </>
  )
}

export default App