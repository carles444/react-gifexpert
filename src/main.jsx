import React from 'react'
import ReactDOM from 'react-dom/client'
import {GifExpertApp} from './GifExpertApp'

import './styles.css';

// stric mode ajuda en quant a warnings i ajudes en preproduccio
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
