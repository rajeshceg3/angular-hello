# Local cart and simulated submit
## Sub-features
Inmemorybag/add/view/clearonlocalsubmit.
## How to get to it (user POV)
DetailsBuy,headerCheckout,Purchasebutton. No name/addressinputs currentlyshown, no payment/orderbackend.
## Driving it with verify.mjs
ActualaddXL,cartshowsname,Purchaseclickmustremoveallcartrows. No actual spending or external API. Networkguardrecordsandfailsunexpectedrequests.
## Gotchas
FormwasmissingngSubmit, actualclickkeptitem. Hooknowcalls existingonSubmit, clearsbag/resetform. Consolewarnonly. Nodurablecart/reload/multipleproduct/emptycartUXclaim.
