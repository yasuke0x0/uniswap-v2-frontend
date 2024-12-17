import { useContext } from "react"
import { CollectionsContext } from "./index.tsx"

const Header = () => {
     const { selectedCategoryTab, setSelectedCategoryTab } = useContext(CollectionsContext)

     return (
          <>
               {/* TABS */}
               <div className="flex gap-8 justify-center md:justify-start font-medium mb-4">
                    <div
                         className={`hover:text-white cursor-pointer ${selectedCategoryTab === "all" && "text-white underline decoration-green-500 decoration-2 underline-offset-8"}`}
                         onClick={() => setSelectedCategoryTab("all")}
                    >
                         All
                    </div>
                    <div
                         className={`hover:text-white cursor-pointer ${selectedCategoryTab === "rwa" && "text-white underline decoration-green-500 decoration-2 underline-offset-8"}`}
                         onClick={() => setSelectedCategoryTab("rwa")}
                    >
                         RWA
                    </div>
                    <div
                         className={`hover:text-white cursor-pointer ${selectedCategoryTab === "depin" && "text-white underline decoration-green-500 decoration-2 underline-offset-8"}`}
                         onClick={() => setSelectedCategoryTab("depin")}
                    >
                         Depin
                    </div>
                    <div
                         className={`hover:text-white cursor-pointer ${selectedCategoryTab === "ai" && "text-white underline decoration-green-500 decoration-2 underline-offset-8"}`}
                         onClick={() => setSelectedCategoryTab("ai")}
                    >
                         AI
                    </div>
                    <div
                         className={`hover:text-white cursor-pointer ${selectedCategoryTab === "music" && "text-white underline decoration-green-500 decoration-2 underline-offset-8"}`}
                         onClick={() => setSelectedCategoryTab("music")}
                    >
                         Music
                    </div>
                    <div
                         className={`hover:text-white cursor-pointer ${selectedCategoryTab === "pfp" && "text-white underline decoration-green-500 decoration-2 underline-offset-8"}`}
                         onClick={() => setSelectedCategoryTab("pfp")}
                    >
                         PFP's
                    </div>
               </div>

               <div className="border-b-2 border-[#25232E] mb-5" />

               <div className="text-xl md:text-3xl font-medium text-white">Explore collections</div>
          </>
     )
}

export default Header
