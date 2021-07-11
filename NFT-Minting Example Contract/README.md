# Minting Assets txFunction

The goal of this example is to take in three user inputs and then process these inputs to then result in a transaction that will mint the number of assets requested.

1. Amount of the asset to be minted
2. The authorisation key that is needed to approve the minting process
3. A memo, which is a text value to be added to the trnsaction

Overall, this txFunction is extremely basic and does not have the most robust security implemented, currently the main piece of security involved is through a hard coded authorisation key. However, what this does show is the flexibility that txFunctions have and their ability to provide a third party security/processing service.

Planned improvements for the txFunction is going to be making the function have more saftey checks in place that only allow for whole amounts and not decimals as well as other safety checks that will fall in line with the needs of the particular asset that is to be minted. 

## Security Concerns

Prior to the creation of the txFunction, it was coined with the idea of returning some specific key however, due to the fact that the Turing Signing Servers are stateless this will not be able to be implemented in a manner that can be controlled successfully across other Turrets which hold the contract. Furthermore, the current use of a hard coded encrypted key is something that can be done relatively easily upon creation of the txFunction. The major concern that I have with this process is that if the key is compromised there is nothing that can be done to prevent endless amount of Assets/tokens being minted. While in this format there is nothing harmful that can come from an exploit like this, there is still concern to the issue of trackign asset amounts. 
