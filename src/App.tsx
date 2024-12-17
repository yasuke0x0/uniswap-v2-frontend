import { ToastContainer } from "react-toastify"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createConfig, WagmiProvider } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import React, { createContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Breakpoints from "./components/BreakPoints.tsx"
import { DEFAULT_QUERY_CLIENT_CONFIG, DEFAULT_TOAST_CONFIG, DEFAULT_WAGMI_CONFIG } from "./constants"
import { DEFAULT_RAINBOWKIT_THEME_CONF } from "./utils"
import Menu from "./components/Menu.tsx"

function App() {
     // States
     const [theme, setTheme] = useState<"light" | "dark">(() => {
          if (localStorage.getItem("theme")) {
               return localStorage.getItem("theme") === "dark" ? "dark" : "light"
          } else {
               return import.meta.env.VITE_APP_DEFAULT_THEME
          }
     })

     // Constants & vars
     const queryClient = new QueryClient(DEFAULT_QUERY_CLIENT_CONFIG)
     const wagmi = createConfig(DEFAULT_WAGMI_CONFIG)
     const isDevEnvironment = import.meta.env.VITE_APP_ENV === "dev"
     const isStagingEnvironment = import.meta.env.VITE_APP_ENV === "staging"

     function handleSetTheme(mode: "dark" | "light") {
          setTheme(mode)

          const rootElement = window.document.documentElement
          if (mode === "dark") {
               rootElement.classList.add("dark")
               localStorage.setItem("theme", "dark")
          } else {
               rootElement.classList.remove("dark")
               localStorage.setItem("theme", "light")
          }
     }

     useEffect(() => {
          handleSetTheme(theme)
     }, [theme])


     return (
          <AppContext.Provider value={{ theme, handleSetTheme, isDevEnvironment, isStagingEnvironment }}>
               <WagmiProvider config={wagmi}>
                    <QueryClientProvider client={queryClient}>
                         <RainbowKitProvider modalSize={"compact"} theme={DEFAULT_RAINBOWKIT_THEME_CONF(theme)}>
                              {/* Screen dimensions & breakpoints ( will be displayed only in dev mode )*/}
                              {import.meta.env.DEV && <Breakpoints />}

                              {/* Menu */}
                              <Menu />

                              {/* Body */}
                              <div className={`min-h-screen h-full flex flex-col pt-[10px] lg:ml-64 bg-white`}>
                                   <div className="mt-14 flex-grow">
                                        <Outlet />
                                   </div>
                              </div>

                              <ToastContainer {...DEFAULT_TOAST_CONFIG} />
                         </RainbowKitProvider>
                    </QueryClientProvider>
               </WagmiProvider>
          </AppContext.Provider>
     )
}

const AppContext = createContext({} as IAppContextPropsModel)

interface IAppContextPropsModel {
     theme: "light" | "dark"
     handleSetTheme: (mode: "dark" | "light") => void
     isDevEnvironment: boolean
     isStagingEnvironment: boolean
}

export { App, AppContext }
