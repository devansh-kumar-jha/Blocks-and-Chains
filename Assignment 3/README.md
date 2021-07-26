# This week we will be taking a few large input's from the user's to add them to our ledger in block-chains.
# Actually we are trying to make a actual Block Structure from now.

### EXPLANATION OF ASSIGNMENT 3
The code requires the user to give number of inputs and number of outputs along with data for each input and output as and when prompted accordingly. The code internally adjusts the data into the format of object of classes and the data is stored in .dat files just as a implementational feature. The transaction data is not verified as such however the code requires a lot of input from the user.


### APPLICATION SETUP
Run the following commands on your remote device to run the code -
```
git clone https://github.com/dkjha20/Blocks-and-Chains
cd 'Assignment 3'
npm install
```

### VARIOUS FILES CONTAINED

##### backend files not for user -
1)  - *package.json* - contains information of all Dependencies.
2)  - *package-lock.json* - used for installation of all Dependencies on remote device using npm install command .
3)  - *private.pem* - Binary file for RSA private keys .
4)  - *public.pem* - Binary file for RSA public keys .
5)  - *hash.dat* - This is the binary file which is created and used to store the hash of all the transaction data for the latest transaction details enterred by the user. The things in this file become invalid when *generate.js* file is run and are again valid only when all the data is re-enterred using *create.js* .
**REMEMBER THAT EACH TIME A NEW FILE IS CREATED WHEN THE ASSIGNMENT PROGRAM IS RUN**
6)  - *date_check.js* - This is just to check the nano-time working. Though not required but it could be run to see whether the timestamp creation functionality works or not.
7)  - *sample.dat* - A sample file created by using *create.js* which is of the same format as the files *hash.dat*.
It has a hash of - **6f1f0d399cad17fc8df7bb5c01cd93f175f8b11c56392279dfb1592115466e68**

##### source codes to be run -
8)  - *generate.js* - It is for the creation of RSA public key-private key pair which comes on handy with the work to be done later. This is a feature given to change the keys for the user however it's use should be avoided in this assignment.
9) - *create.js* - This is the main source code file which will take all the input and store everything accordingly in the correct files.


### EXAMPLES

run generate.js - no input or output

run date_check.js - output :

```
Timestamp with nano-second precision -  1627232276991052800
Length of string generated           -  19
Timestamp as a Big Integer number    -  1627232276991052800n
```
**The result here will change according to the time, also this is just a environment check file**

run check.js - input :

```
Number of inputs: 1

   Input 1:
       Transaction ID: cbbee9817ab2585079ce0490369ea016808df2349a736a2ae19db4247cc9b96e
       Index: 5
       Length of Signature: 60
       Signature: b6d95526a41a9504680b4e7c8b763a1b1d49d4955c8486216325253fec738dd7a9e28bf921119c160f0702448615bbda08313f6a8eb668d20bf50598

Number of outputs: 1

   Output 1:
       Number of coins: 999999999
       Length of public Key: 451
       Public Key: -----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt9aR/chfSX6H/VjSTh97
LyrafCSrZTQe72pHkzZG9gInSNTRAufyCqR4f+qVPo7pBGOWFH7nFznYL6+7aL2w
kd5v1AJ1S759x4t2FIbUum3cGh8tsLic7tCGouRa/4+bJCfgaWmwg7d98oK1O3nY
Yrt5212KBg2fj51G4GnjiQQSWRtMi2AympYxL7vESHm9z4Uq6fFgtJOdq/S/T4WZ
jkEzL9VXwyX1OVSoU7M3yKIPNrllFizst3k0jI1FUPNSNMOQkifUQnKLgvPXYCRF
tlnLydWSQMt0t5NfAY8VABTkCiNot6Do7+abiyZngEFdz2JK8e0TyXe7td4X43SM
mwIDAQAB
-----END PUBLIC KEY-----
```       

check.js  - output :

```
6f1f0d399cad17fc8df7bb5c01cd93f175f8b11c56392279dfb1592115466e68.dat
```
