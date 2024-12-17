import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import AppRouting from "./routing/AppRouting.tsx"

import "react-toastify/dist/ReactToastify.css"
import "@rainbow-me/rainbowkit/styles.css"
import './main.scss'

const container = document.getElementById("root")

if (container) {
     createRoot(container).render(
          <BrowserRouter
               future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true,
               }}
          >
               <AppRouting />
          </BrowserRouter>,
     )
}
