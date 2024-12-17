import { Navigate, Route, Routes } from "react-router-dom"
import { App } from "../App.tsx"
import { Dashboard } from "../pages/Dashboard.tsx"
import { ROUTE_ABSOLUTE_PATH_DASHBOARD } from "./routingPaths.tsx"

const AppRouting = () => {
     return (
          <Routes>
               <Route element={<App />}>
                    <Route path={"dashboard"} element={<Dashboard />} />
                    <Route path={"*"} element={<Navigate to={ROUTE_ABSOLUTE_PATH_DASHBOARD} />} />
               </Route>
          </Routes>
     )
}



export default AppRouting
