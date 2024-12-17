import React from "react"
import useWindowDimensions from "./WindowDimensions.ts"

const Breakpoints = () => {
     const { height, width } = useWindowDimensions()

     return (
          <div
               className={"float-start"}
               style={{
                    zIndex: 9999999999,
                    position: "fixed",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    fontSize: "0.8rem",
               }}
          >
               {width} x {height} {width < 640 && "( XS )"}
               {width >= 640 && width < 768 && "( SM )"}
               {width >= 768 && width < 1024 && "( MD )"}
               {width >= 1024 && width < 1280 && "( LG )"}
               {width >= 1280 && width < 1536 && "( XL )"}
               {width >= 1536 && "( XXL )"}
          </div>
     )
}

export default Breakpoints
