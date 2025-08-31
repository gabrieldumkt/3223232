import { BrowserRouter } from 'react-router-dom'

export function Root() {
  return (
    <BrowserRouter basename="/lovable">   {/* 👈 importante! */}
      {/* suas rotas */}
    </BrowserRouter>
  )
}
