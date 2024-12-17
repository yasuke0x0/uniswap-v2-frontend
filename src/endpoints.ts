const useEndpoints = () => {
     const GET_COLLECTIONS = window.location.origin + "/api/collections"
     const GET_COLLECTION_NFTs = (id: number) => window.location.origin + `/api/collections/${id}/nfts`
     const GET_NFT_DETAILS = (id: number) => window.location.origin + `/api/nfts/${id}/details`

     return { GET_COLLECTIONS, GET_COLLECTION_NFTs, GET_NFT_DETAILS }
}

export default useEndpoints
