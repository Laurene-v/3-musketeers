# Currency 

Prints : 

1 USD = 0.00011495204200807422 BTC

The file prints the equivalent of 1 us dollar in Bitcoin

C:\Users\Laurene\Documents\ESILV\WAA\3-musketeers\currency>node cli 3

Prints : 
3 USD = 0.0003449830268350797 BTC
 Prints the equivalent of x us dollars in Bitcoin (x being the number that we put after "node cli")

If x is not a number, then is deletes the command line and writes " x USD = NaN BTC"

Cli : requires ./ and ora

spinner = ora('Fetching exchange data..') to print "fetching ..." while the values haven't been found yet (with spinner.start and spinner.stop)


C:\Users\Laurene\Documents\ESILV\WAA\3-musketeers\currency>node cli.js --help

  Example
    ❯ currency 1650 dkk eur
    1650 DKK = 220.79486154 EUR

  See README.md for detailed usage.


amount: input number written by the user in the command line
from: first currency written by the user, that is linked to the amount
result: number corresponding to the equivalent of the input amount (in the first currency) in the second currency
to: second currency written by the user, which is the one for which the user wants to know the equivalent


ex : 
C:\Users\Laurene\Documents\ESILV\WAA\3-musketeers\currency>node cli 5 gbp eur
5 GBP = 5.746465923500001 EUR



## Libraries used: ------------------------------

### money.js :  
Simple and tiny JavaScript library for realtime currency conversion and exchange rate calculation, from any currency, to any currency. 
is lightweight, has no dependencies, and works great client-side or server-side. Use standalone or as a nodeJS/npm and AMD/requireJS module.

### Nock :
Can be used to test modules that perform HTTP requests in isolation.

### Axios : 
Promise based HTTP client for the browser and node.js
Features

    Make XMLHttpRequests from the browser
    Make http requests from node.js
    Supports the Promise API
    Intercept request and response
    Transform request and response data
    Cancel requests
    Automatic transforms for JSON data
    Client side support for protecting against XSRF

### Ora : 
Elegant terminal spinner
















































