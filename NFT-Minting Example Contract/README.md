# Minting Assets txFunction

The goal of this example is to take in three user inputs and then process these inputs to then result in a transaction that will mint the number of assets requested.

1. Amount of the asset to be minted
2. The authorisation key that is needed to approve the minting process
3. A memo, which is a text value to be added to the trnsaction

Overall, this txFunction is extremely basic and does not have the most robust security implemented, currently the main piece of security involved is through a hard coded authorisation key. However, what this does show is the flexibility that txFunctions have and their ability to provide a third party security/processing service.

Planned improvements for the txFunction is going to be making the function have more saftey checks in place that only allow for whole amounts and not decimals as well as other safety checks that will fall in line with the needs of the particular asset that is to be minted. 
