import { Navigate, Route, Routes } from 'react-router-dom';
import {Navbar} from '../../ui';
import { DCPage, MarvelPage,SearchPage,HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    
    <>

        <Navbar />

        <div className='container'>
          <Routes>
                  <Route path="marvel" element={<MarvelPage />} />
                  <Route path="dc" element={<DCPage />} />

                  <Route path="search" element={<SearchPage />} />
                  <Route path="hero" element={<HeroPage />} />
                  
                  {/* Search, Hero by id */}
                  <Route path="/" element={<Navigate to="/marvel"  />} />
          </Routes>
        </div>
    </>

  )
}
