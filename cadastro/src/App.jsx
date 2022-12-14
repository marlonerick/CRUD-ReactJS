import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Rotas Paginas
import Home from './Paginas/Home/index.jsx'
import Cadastrar from './Paginas/CadastrarPessoa/Index.jsx'
import Cadastrados from './Paginas/Cadastrados/Index.jsx'

import './Estilo/App/Index.css'

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/cadastrar" element={< Cadastrar />} />
                    <Route path="/cadastrados" element={< Cadastrados />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;