module.exports = (body) => {
  const { TransactionBuilder, Networks, BASE_FEE, Operation, Asset, Account, Memo } = StellarBase
  const { amount, key, memoText } = body
 
  var source = "GB4LGXV5SP6BIAYCFUIDCTPVNGSCN5EX56FJ3FYYXQ57MV4F7QNN7XPJ"
  var destination = "GDPHYJ7QSLTJPAF2NVWVZPMMY5ZZAO5OGMOAABIDJNNVSKNPYYXKKPRD"
  var encryptKey = "2bda25e9cbbfa8adc5a4171611e8d25d82872cfc9ea533d765ba85bf32057db1" //TREEismykey
  var TREE = new Asset("TREE", source)

  // Checks the parametres to ensure they are suitable for the contract
  if (key !== encryptKey) {
    throw {message: `Signing key is invalid`}
  }

  if (!amount.isInteger()) {
    throw {message: 'Amount must be an integer value'}
  }

  // Pulling in an external value to satisfy a true or false condition. 
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=buderim&APPID=22d4c7b6cfc3ca7b1d73692432b07478`)
  
  .then((res) => {
  if (res.ok)
    return res.json()
  throw res
  })

  .then((account) => {
      var weather = account.weather[0].main 
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
  
  .then((account) =>
    new TransactionBuilder(
      new Account(account.id, account.sequence), 
      { 
        fee: BASE_FEE, 
        networkPassphrase: Networks.TESTNET,
      }
    )
    .addMemo(Memo.text(memoText))
    .addOperation(Operation.payment({
      destination: destination,
      asset: TREE,
      amount: amount
    }))
    .setTimeout(0)
    .build()
    .toXDR()
  )
}