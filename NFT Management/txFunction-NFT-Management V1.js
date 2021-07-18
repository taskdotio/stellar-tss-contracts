module.exports = (body) => {
  const { TransactionBuilder, Networks, BASE_FEE, Operation, Asset, Account, Memo } = StellarSdk
  const { walletAddr, nftCode, nftIssuer, price, quantity  } = body
 
  // Oder book check if an asset is available on the exchange
  let server = new StellarSdk.Server(HORIZON_URL);
  var buyingAsset = new Asset(nftCode, nftIssuer);
  var sellingAsset = Asset.native();
  let orderbook = await server.orderbook(sellingAsset, buyingAsset).call();

  if (orderbook == '' || orderbook == undefined) {
    throw {message: "Nothing exists for the requested NFT"};
  }

  // Checks the parametres to ensure they are suitable for the contract
  if (key !== encryptKey) {
    throw {message: `Signing key is invalid`};
  }

  // Checking the interger value of the quantity
  var remainder = quantity % 1
  if (remainder !== 0 ) {
    throw {message: 'Amount must be an integer value i.e. 1 or 3 etc.'};
  } else if (quantity < 1) {
    throw {message: 'Please enter a number that is greater than one'};
  }

  // Pulling in royalty values from the account . 
  fetch(`https://horizon-testnet.stellar.org/accounts/${nftIssuer}`)
  .then((res) => {
  if (res.ok)
    return res.json()
  throw res
  })
  .then((weatherData) => {
      var weather = weatherData.weather[0].main 
      if (weather !== 'Clear') {
        throw {message: 'The weather is not clear, therefore we cannot process your request'}
      }
  })

  return fetch(`https://horizon-testnet.stellar.org/accounts/${source}`)
  .then((res) => {
    if (res.ok)
      return res.json()
    throw res
  })
  
  .then((account) => {

    var transaction = new TransactionBuilder(
      new Account(account.id, account.sequence), 
      { 
        fee: BASE_FEE, 
        networkPassphrase: Networks.TESTNET,
      }
    )

    // Only adds the payments of the royalties based 
    // on the payment information stored in the issuing account
    if (orderExists) {
      transaction.addOperation(Operation.payment({
        destination: walletAddr,
        asset: buyingAsset,
        amount: quantity
      }))
    }

    transaction.addOperation(Operation.payment({
      destination: destination,
      asset: Asset.native(),
      amount: quantity
    }))
    .setTimeout(0)
    .build()
    .toXDR()
  }
    
  )
}