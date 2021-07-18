# This week we would be simply implementing the SHA256 cryptographic hashing function on some string.

The main code file for this week is sha.js , it would require the user to enter a string and it would give the smallest number that is to be appended on the string so that the cryptographic hash comes out to be smaller then the hex target chosen.
Also gives the corresponding SHA256 Hash .

The sha.js file has the cryptographic function written in itself so the file is self-sufficient . To run on a local PC all the packages within package-lock.json and package.json are first to be installed using npm install . 

##### example -

run sha.js -  input : 

                       hackeryg
                       
   output:
   
    0000380514127e83559de020c07945d266632b5bef7673c7c924d189b81db4ef

    299248


### - Bit Extra Work
Though the work is complete in sha.js file but I have made a sha_library.js file which implements the same code using the Crypto library which is a bit better implementation as the NODE JS Crypto library has a lot better optimizations in the code for implementing SHA-256 function.
The file sha_library.js takes the same input and gives the same output as sha.js file.