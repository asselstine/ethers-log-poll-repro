function loaded() {

  const filter1 = {
    address: "0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958",
    fromBlock: 8485000,
    toBlock: "latest",
    topics: [null]
  }

  const filter2 = {
    address: "0xb7896fce748396EcFC240F5a0d3Cc92ca42D7d84",
    fromBlock: 8485000,
    toBlock: "latest",
    topics: [null]
  }
  
  window.ethereum.enable().then(function () {
    let provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/1aa9e694ded444ae8056a6f040a2b648', 'homestead')
  
    document.getElementById('request-count').innerHTML = 'Ready...'
    
    provider.on('block', (blockNumber) => {
      document.getElementById('request-count').innerHTML = `Block number ${blockNumber}`
    })

    provider.on(filter1, (log) => {})
    provider.on(filter1, (log) => {})
    provider.on(filter2, (log) => {})
    provider.on(filter2, (log) => {})
  })
}