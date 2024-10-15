// import random from 'lodash/random'

// import { CHAIN_INFO } from 'config/chains'

// // // Array of available nodes to connect to
// export const nodes = [process.env.REACT_APP_NODE_1]
// // const getNodeUrl = () => {
// //   const randomIndex = random(0, nodes.length - 1)
// //   return nodes[randomIndex]
// // }
// // export default getNodeUrl

// const getNodeUrl = () => {
//   const nodeOverride = process.env.REACT_APP_NODE_OVERRIDE
//   if (nodeOverride) return nodeOverride

//   const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
//   const chain = CHAIN_INFO[chainId]
//   try{
//     if (chain) {
//       const randomIndex = random(0, chain.rpc.length - 1)
//       return chain.rpc[randomIndex]
//     }else{
//       const randomIndex = random(0, nodes.length - 1)
//       return nodes[randomIndex]
//     }
//   }catch(err){
//     throw new Error('Chain not found')
//   }
// }

// export default getNodeUrl
let d;
export default d;
