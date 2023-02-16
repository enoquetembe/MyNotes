import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}
