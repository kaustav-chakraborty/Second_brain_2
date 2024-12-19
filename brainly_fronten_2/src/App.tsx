
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Dashboard} from './Pages/Dashboard'
import { Signup } from './Pages/Signup'
import { Signin } from './Pages/Signin'

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/signin" element={<Signin></Signin>}></Route>
    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

  </Routes>
  </BrowserRouter>
}
export default App
