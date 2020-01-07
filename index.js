function loaded() {

  const filter1 = {
    address: "0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958",
    fromBlock: 8485000,
    toBlock: "latest",
    topics: [null]
  }
  
  window.ethereum.enable().then(function (currentProvider) {
    let provider = new ethers.providers.Web3Provider(currentProvider || window.ethereum.currentProvider)
  
    let requestCount = 0
    let lastRequestTime = new Date()
    
    provider.on(filter1, (log) => {
      requestCount++
      const now = new Date()
      const elapsed = now.getTime() - lastRequestTime.getTime()
      lastRequestTime = new Date()
    
      const msg = `Request count: ${requestCount}, elapsed time: ${elapsed / 1000}`
    
      console.log(msg)
      document.getElementById('request-count').innerHTML = msg
    })
  })
}