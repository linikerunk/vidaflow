import { useEffect } from 'react'
import Home from './pages/Home'
import { initSmoothScroll } from './utils/smoothScroll'

function App() {
  useEffect(() => {
    // Inicializa smooth scroll
    initSmoothScroll()

    // Adiciona classes para animações globais
    document.body.classList.add('overflow-x-hidden')
  }, [])

  return <Home />
}

export default App
