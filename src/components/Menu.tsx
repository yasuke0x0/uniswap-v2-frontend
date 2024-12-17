import { ROUTE_ABSOLUTE_PATH_DASHBOARD } from "../routing/routingPaths.tsx"
import { NavLink } from "react-router-dom"

const Menu = () => {
     return <>
          <div className="bg-black text-white h-10 flex justify-center items-center gap-5">
               <NavLink
                    to={ROUTE_ABSOLUTE_PATH_DASHBOARD}
                    className={({ isActive }) =>
                         isActive
                              ? "text-red-500"
                              : "hover:text-red-500 cursor-pointer"
                    }
               >
                    Dashboard
               </NavLink>
               <div className={"hover:text-red-500 cursor-pointer"}>Stats</div>
          </div>
     </>
}

export default Menu
