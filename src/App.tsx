
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import PageList  from './pages/PageList.tsx'
import { PageDetail } from './pages/PageDetail.tsx'
import { PageFavorites } from './pages/PageFavorites.tsx'



function App() { 

  return (
    <BrowserRouter basename='/RickandMorty'>
      <Routes>
        <Route path='/' element={<PageList />}/>
        <Route path='/favorites' element={<PageFavorites />} />
        <Route path='/character/:id' element={<PageDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
