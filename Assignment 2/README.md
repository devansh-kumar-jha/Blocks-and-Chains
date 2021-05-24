# This week we look upon implementing RSA Algorithm to verify our public-key private-key pair.

So here is a set of simple programs which are to be run in order to get the work done.

1) - public.pem - File containing public key. Not to be used directly , it works in the background .
2) - private.pem - File containing private key. Not to be used directly , it works in the background .
3) - un-encrypted.txt - It would contain the currect original text enterred by the user. Again it works in the backend only .
4) - encrypted.txt - It would contain the currect RSA encrypted using private key in the private.pem file at the time of encryption. Again it works in the backend only .
5) - package.json - contains information of all Dependencies.
6) - package-lock.json - used for installation of all Dependencies on remote device using npm install command .
7) - exercise.js - Just for fun :)  it could be run to get the encryption-decryption check on the public key - private key pair created .


#### source codes to be run -

8) - generate.js - It is the RSA assymmetric key pair generator source file. A key pair is already generated and ready for use as stored in the respective .pem files. The file could be used if the user wants to create a new key pair randomly . A 2048 bit key pair is generated and is automatically stored in correct places on the .pem files. This source code does not give any output so it is just to be run and exits without any print on console.

9) - sign.js - This is the encrypting source code. It demands a text message from the user which is to be encrypted. The code automatically takes the private key from the .pem file and encrypts the message using RSA algorithm and displays the encrypted message in hexa-decimal bit format. The message entered by the user and the encrypted code are automatically placed on the text files.

10) - decrypt.js - This is the decryption cum verification source code. It would automatically take the public key,encrypted message and un-encrypted message from the respective files and decrypt the hexa-decimal string using public key. If the verification is ok then the decrypted message is shown otherwise not .

11) - get.js - This file is for user defined key pairs to be made. The code when run demands for the complete location of the .pem files containing the public and private key. These keys would be stored accordingly in the .pem files above.

##### examples - 
1) 
 run sign.js    --  input : 
                            
                            Hello world !!!
                    
   output :
                    
                    769a89bd6322a298daaf419ff7c49ef2398103e666f820c1bd308fdb6b5728cd7989073ab4e63f46e6ee1d60ac7843eb98541e0db84fde9217a4433283f77e65d16c5c1865e817fa845b07ed5d8b036bec68975506e975334a46d187b175e88b0348b0293d5e06ae39ae870c1b8e6a00bb66547c22ff38bdc318e2f688c77e0c88548c9bb833eeae37fdca495a97e929e1b36572894c2e4b0412d9c20f7f049f7adf1a4995a72a6dfa0458493169fa7f439891ba32bfb0ec19b5b5b0f1b3fb1e154f3b7876562661edf37ad1d4cae545f66bad1e25490676f4b73b61d52b59684cf57e0b51091a26ad257fef04219288e4ac68628cc3a08d9cf29994b5ff39a6
 
 run decrypt.js -- output : 
                            
                            Decrypted String : Hello World !!!
                            Signature Verified !!!                  
                            
                            
2)                            
  run sign.js    --  input : 
  
                             Hello world !!!
                     
   output : 
             
              769a89bd6322a298daaf419ff7c49ef2398103e666f820c1bd308fdb6b5728cd7989073ab4e63f46e6ee1d60ac7843eb98541e0db84fde9217a4433283f77e65d16c5c1865e817fa845b07ed5d8b036bec68975506e975334a46d187b175e88b0348b0293d5e06ae39ae870c1b8e6a00bb66547c22ff38bdc318e2f688c77e0c88548c9bb833eeae37fdca495a97e929e1b36572894c2e4b0412d9c20f7f049f7adf1a4995a72a6dfa0458493169fa7f439891ba32bfb0ec19b5b5b0f1b3fb1e154f3b7876562661edf37ad1d4cae545f66bad1e25490676f4b73b61d52b59684cf57e0b51091a26ad257fef04219288e4ac68628cc3a08d9cf29994b5ff39a6
 
 run generate.js   -- (no input or output)
 
 run decrypt.js -- output : 
 
                            Verification Failed !!!  
 
