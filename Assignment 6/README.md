# This week we will do something new that is we will build a new web server for building the node for the Blocks and Chains mining distributed chain community.

### EXPLANATION OF ASSIGNMENT 6
Here we will be creating a simple web server to calculate the HASH of the POST given by the user to our localhost ans our server would be listening to port 8787.

### APPLICATION SETUP
Run the following commands on your remote device to run the code -
```
git clone https://github.com/dkjha20/Blocks-and-Chains
cd 'Assignment 6'
npm install
```

Also to run the web server - 
Download the postmaster desktop application [here](https://www.postman.com/downloads/)

### VARIOUS FILES INCLUDED

##### backend files not for user - 
1) - *package.json* - contains information of all Dependencies .
2) - *package-lock.json* - used for installation of all Dependencies on remote device using npm install command .

##### source code files - 
3) - *web.js* - main assignment file which creates the required web server . It uses the ExpressJS framework for the same .

### EXAMPLES

run web.js : output on console -
```
Web server is listening to http://localhost:8787/hash
```

run web.js : input on postmaster -
```C
http://localhost:8787/hash
       // It is a POST request with request as below - 
       //   {
       //     "data" = "hello create a hash for me :)"
       //   }
``` 

web.js : output on console -
```
7a4cb0b2a09ac339c2b344c0cabcff3647735eb7003f40ea12a488ead073a98c
```

### EXTRAS
There are a lot of extra implementations executed along with the main work in this folder.
*hello.js* is a hello world get server in ExpressJS.
*web_extra.js* uses the "http" library instead of ExpressJS library.
*practise.html* and *request.html* are the HTML files linked with file *web_extra.js*.