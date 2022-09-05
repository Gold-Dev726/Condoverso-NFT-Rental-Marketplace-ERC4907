import sample from 'lodash/sample'


// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_ETH_MAINNET]
// export const nodes = [process.env.REACT_APP_TEST_BSC_NODE]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
