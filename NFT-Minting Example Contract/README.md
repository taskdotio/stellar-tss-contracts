# Minting Assets txFunction

The goal of this example is to take in three user inputs and then process these inputs to then result in a transaction that will mint the number of assets requested.

1. Amount of the asset to be minted
2. The authorisation key that is needed to approve the minting process
3. A memo, which is a text value to be added to the trnsaction

Overall, this txFunction is extremely basic and does not have the most robust security implemented, currently the main piece of security involved is through a hard coded authorisation key. However, what this does show is the flexibility that txFunctions have and their ability to provide a third party security/processing service.

Planned improvements for the txFunction is going to be making the function have more saftey checks in place that only allow for whole amounts and not decimals as well as other safety checks that will fall in line with the needs of the particular asset that is to be minted. 

## Security Concerns

Prior to the creation of the txFunction, it was coined with the idea of returning some specific key however, due to the fact that the Turing Signing Servers are stateless this will not be able to be implemented in a manner that can be controlled successfully across other Turrets which hold the contract. Furthermore, the current use of a hard coded encrypted key is something that can be done relatively easily upon creation of the txFunction. The major concern that I have with this process is that if the key is compromised there is nothing that can be done to prevent endless amount of Assets/tokens being minted. While in this format there is nothing harmful that can come from an exploit like this, there is still concern to the issue of trackign asset amounts. 

## Moving Forward

There is more potential lined up with the txFunction, one feature that has been added in is the use of the 


[{"name":"source","type":"string","description":"Source account for the funds","rule":"must be a propper key"},{"name":"destination","type":"string","description":"Source account for the funds","rule":"must be a propper key"}]

[
    {
        "name": "walletAddr",
        "type": "string",
        "description": "The public key address of the wallet initiating the function",
        "rule": "Must be a Stellar public address"
    },
    {
        "name": "nftCode",
        "type": "string",
        "description": "The code of the nft that is to be managed by the txFunction",
        "rule": "Must be an alphanumeric value, if the provided code does not exist than an error message will be returned."
    },
    {
        "name": "nftIssuer",
        "type": "string"
        "description": "The public key for the account that issues the nft asset that relates to the code",
        "rule": "Must be a Stellar public address"
    },
    {
        "name": "price",
        "type": "string",
        "description": "An integer value of the price of which the NFT is to be traded at",
        "rule": "must be an integer value that is greater than 0 and has no more than 7 digits after the decimal"
    },
    {
        "name": "quantity",
        "type": "string",
        "description": "An integer value of the number of the particular NFT asset that is to be traded"
        "rule": "must be greater than 0 and not be a floating number only integers. i.e. 1, 4, 15 etc."
    }
]