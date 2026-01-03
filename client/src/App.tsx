import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext'
import MainLayout from "./layouts/MainLayout"
import NotFound from "./layouts/NotFound"

export default function App() {

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}
