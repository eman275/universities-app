import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { CONFIG } from '../config'

const NotFound = lazy(() => import("./404"));
const Courses = lazy(() => import("./Universities/Universities"));


export default function App() {
  return (
    <>
      <Routes>
        <Route path={CONFIG.urls.home} index element={<Courses />} />
  
        <Route path={CONFIG.urls.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
}
