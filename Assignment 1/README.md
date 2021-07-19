# This week we would be simply implementing the SHA256 cryptographic hashing function on some string.

### EXPLANATION OF ASSIGNMENT 1
In this assignment we will try to understand the SHA256 cryptographic hash function by implementing it and trying to find the smallest number which appended on the given string will give the hash which is less than the target value chosen.
The main code file for this week is sha.js , it would require the user to enter a string and it would give the smallest number that is to be appended on the string so that the cryptographic hash comes out to be smaller then the hex target chosen. Also gives the corresponding SHA256 Hash. 


### APPLICATION SETUP
The sha.js file has the cryptographic function written in itself so the file is self-sufficient . To run on a local PC all the packages within package-lock.json and package.json are first to be installed using npm install .
Run the following commands on your remote device to run the code -
```
git clone https://github.com/dkjha20/Blocks-and-Chains
cd 'Assignment 1'
npm install
```


### VARIOUS FILES CONTAINED
So here is a set of simple programs which are to be run in order to get the work done.

##### backend files not for user -
1) - *package.json* - contains information of all Dependencies.
2) - *package-lock.json* - used for installation of all Dependencies on remote device using npm install command .

##### source code files -
3) - *sha.js* - This is the file containing inbuilt SHA256 function implementation. It takes the string input gives the smallest output number to be appended and also the hash corresponding to the appended string.


### EXAMPLE

run sha.js -  input : 

```
hackeryg
```

output:
   
```
0000380514127e83559de020c07945d266632b5bef7673c7c924d189b81db4ef
299248
```


###  EXTRAS
Though the work is complete in **sha.js** file but I have made a **sha_library.js** file which implements the same code using the *Crypto library* which is a bit better implementation as the NODE JS Crypto library has lot better standard optimizations in the code for implementing SHA-256 function.
The file sha_library.js takes the same input and gives the same output as sha.js file.
