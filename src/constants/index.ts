// Configs
import { ToastOptions } from "react-toastify"
import { QueryClientConfig } from "@tanstack/react-query"
import { CreateConfigParameters, http } from "wagmi"
import { sepolia } from "viem/chains"

export const DEFAULT_TOAST_CONFIG: ToastOptions = {
     position: "bottom-left",
     autoClose: 4000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "dark",
}

export const DEFAULT_QUERY_CLIENT_CONFIG: QueryClientConfig = {
     defaultOptions: {
          queries: {
               retry: false,
               refetchOnWindowFocus: false,
          },
     },
}

export const DEFAULT_WAGMI_CONFIG: CreateConfigParameters = {
     chains: [sepolia],
     transports: {
          [sepolia.id]: http(),
     },
     ssr: false, // true if your dApp uses server side rendering (SSR)
}
