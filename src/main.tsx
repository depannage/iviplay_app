import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Providers} from "./settings/redux_config/providers/providers.tsx";
import {ContextProvider} from "./context/contextProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <Providers>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </Providers>
  </React.StrictMode>,
)
