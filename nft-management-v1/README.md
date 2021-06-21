# NFT Management v1
This smart contract manages NFTs on Stellar by:

1. Allowing the use of 1 token to be used as the non-fungible unit instead of stroops
2. Providing ongoing royalty payments to different stakeholders (such as the author, original marketplace publisher)
3. Facilitating the price paid by the buyer

Techniques to achieve this:

From video call with Tyler, Steve noted:

```
- An asset can only be sold by a Turret and to use asset flags to make an atomic swap via a sandwich transaction

- Flow would be - auth opened > sale made > auth closed using https://developers.stellar.org/docs/issuing-assets/control-asset-access/

So I guess that the SDEX payment discussion I have with Fred, this needs to be managed by the Turret who takes the payment, does the “high value” distribution (100 USDC purchase, give 20 USDC to creator and 80 USDC to seller), and moves the asset using a Stroop from seller to buyer account, then locks it all down again?
```

Tyler replied to this:
```
That’s exactly right. You essentially use TSS to perform a sort of regulated asset swap. https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0008.md

The nice thing too is that via this flow the asset can be denoted as 1 vs 0.0000001 since holders cannot transact in the asset in any divisible way and can only move it through the Turret txFunction which can always ensure a movement of the entire balance.

Also here’s the Twitch VOD link on YouTube
https://youtu.be/F1I3YaEe1Dg
```