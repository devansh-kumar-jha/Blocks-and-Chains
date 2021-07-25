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
5)  - *input.js* - This contains the class for storing data of input which is one of the object in our transaction. This file is just used as a module and no direct implementation required by the user .
6)  - *output.js* - This contains the class for storing data of output which is one of the object in our transaction. This file is just used as a module and no direct implementation required by the user .
7)  - *transaction.js* - This contains the class for storing the whole transaction. This file is just used as a module and no direct implementation required by the user .
8)  - *hash.dat* - This is the binary file which is created and used to store the hash of all the transaction data for the latest transaction details enterred by the user. The things in this file become invalid when *generate.js* file is run and are again valid only when all the data is re-enterred using *create.js* .
9)  - *date_check.js* - This is just to check the nano-time working. Though not required but it could be run to see whether the timestamp creation functionality works or not.

##### source codes to be run -
10)  - *generate.js* - It is for the creation of RSA public key-private key pair which comes on handy with the work to be done later. This is a feature given to change the keys for the user however it's use should be avoided in this assignment.
11) - *create.js* - This is the main source code file which will take all the input and store everything accordingly in the correct files.


### EXAMPLES



// https://medium.com/@taylorhxu/markdown-for-dummies-a24e982b8e85