module.exports = (body) => {
  const { TransactionBuilder, Networks, BASE_FEE, Operation, Asset, Account, Memo } = StellarBase
  const { amount, key, memoText } = body
 
  var source = "GB4LGXV5SP6BIAYCFUIDCTPVNGSCN5EX56FJ3FYYXQ57MV4F7QNN7XPJ"
  var destination = "GDPHYJ7QSLTJPAF2NVWVZPMMY5ZZAO5OGMOAABIDJNNVSKNPYYXKKPRD"
  var encryptKey = "2bda25e9cbbfa8adc5a4171611e8d25d82872cfc9ea533d765ba85bf32057db1" //TREEismykey
  var TREE = new Asset("TREE", source)

  if (key !== encryptKey) {
    throw {message: `Signing key is invalid`}
  }

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