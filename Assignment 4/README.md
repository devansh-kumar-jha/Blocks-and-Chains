# This week we will be doing the reverse of the previous week where we get the location of file and give the transaction data.

### EXPLANATION OF ASSIGNMENT 4
This assignment is essentially the opposite of assignment 3 where we would read a given binary file and print the contents it contains in an orderly manner according to the block structure created within the assignment 3.We will be using classes formed in the Classes folder to store all the data as required and then output them all.
Output would be given in an orderly manner as classes as it contains them in the required format.

### APPLICATION SETUP
Run the following commands on your remote device to run the code -
```
git clone https://github.com/dkjha20/Blocks-and-Chains
cd 'Assignment 4'
npm install
```

### VARIOUS FILES CONTAINED

##### backend files not for user -
1) - *package.json* - contains information of all Dependencies.
2) - *package-lock.json* - used for installation of all Dependencies on remote device using npm install command .
3) - *default.dat* - used as a default input file in case no valid file is got from the user.

##### source codes to be run -
4) - *read.js* - This is the main file in the assignment which takes the file location to input from the user and then read the data from that file.


### EXAMPLES

(1) --

run read.js - input :
```
sample.dat
```

read.js - output :
```
***********DATA IN THE FILE***********


Transaction ID -->  63e4e2a77c14419cd6db99b7b6083f7ed74320756dc8fa029b8e484f20815fa9 

Transaction {
  timestamp: 1624102916142583230n,
  num_inputs: 4,
  inputs: [
    Input {
      txnid: 'cbbee9817ab2585079ce0490369ea016808df2349a736a2ae19db4247cc9b96e',
      index: 5,
      siglength: 60,
      sig: 'b6d95526a41a9504680b4e7c8b763a1b1d49d4955c8486216325253fec738dd7a9e28bf921119c160f0702448615bbda08313f6a8eb668d20bf50598'
    },
    Input {
      txnid: '87f3c67cf22746e995af5a25367951baa2ff6cd471c483f15fb90badb37c5821',
      index: 87332,
      siglength: 40,
      sig: '81855ad8681d0d86d1e91e00167939cb6694d2c422acd208a0072939487f6999eb9d18a44784045d'
    },
    Input {
      txnid: '5968ba216897e9a2b3e0cefffab0d58084375e8978104df614d73b4a90fba436',
      index: 0,
      siglength: 40,
      sig: '335b2e97aac2bd15fae04162adde96a511fabd9261425c3e945c3fbc1f270cdb734fd216d73d9196'
    },
    Input {
      txnid: 'acb47cb9fbd8916648dd30b45f32facdd2d10922875e26689512c010960d9fa0',
      index: 31,
      siglength: 60,
      sig: '20f05332caaf4699cdcbfff00ca530121dfe2ad49169678e88dbbc4b68c9e1c66b926bcc518e2568aa80c9c31e8faa3f00918061753771f14a34f364'
    }
  ],
  num_outputs: 2,
  outputs: [
    Output {
      coins: 999999999n,
      len: 451,
      key: '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt9aR/chfSX6H/VjSTh97\n' +
        'LyrafCSrZTQe72pHkzZG9gInSNTRAufyCqR4f+qVPo7pBGOWFH7nFznYL6+7aL2w\n' +
        'kd5v1AJ1S759x4t2FIbUum3cGh8tsLic7tCGouRa/4+bJCfgaWmwg7d98oK1O3nY\n' +
        'Yrt5212KBg2fj51G4GnjiQQSWRtMi2AympYxL7vESHm9z4Uq6fFgtJOdq/S/T4WZ\n' +
        'jkEzL9VXwyX1OVSoU7M3yKIPNrllFizst3k0jI1FUPNSNMOQkifUQnKLgvPXYCRF\n' +
        'tlnLydWSQMt0t5NfAY8VABTkCiNot6Do7+abiyZngEFdz2JK8e0TyXe7td4X43SM\n' +
        'mwIDAQAB\n' +
        '-----END PUBLIC KEY-----\n'
    },
    Output {
      coins: 1n,
      len: 451,
      key: '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt9aR/chfSX6H/VjSTh97\n' +
        'LyrafCSrZTQe72pHkzZG9gInSNTRAufyCqR4f+qVPo7pBGOWFH7nFznYL6+7aL2w\n' +
        'kd5v1AJ1S759x4t2FIbUum3cGh8tsLic7tCGouRa/4+bJCfgaWmwg7d98oK1O3nY\n' +
        'Yrt5212KBg2fj51G4GnjiQQSWRtMi2AympYxL7vESHm9z4Uq6fFgtJOdq/S/T4WZ\n' +
        'jkEzL9VXwyX1OVSoU7M3yKIPNrllFizst3k0jI1FUPNSNMOQkifUQnKLgvPXYCRF\n' +
        'tlnLydWSQMt0t5NfAY8VABTkCiNot6Do7+abiyZngEFdz2JK8e0TyXe7td4X43SM\n' +
        'mwIDAQAB\n' +
        '-----END PUBLIC KEY-----\n'
    }
  ]
}
}


 Exiting Successfully
```

(2)--

run read.js - input :
```
default.dat
```
**OR**
```
../Assignment 3/6f1f0d399cad17fc8df7bb5c01cd93f175f8b11c56392279dfb1592115466e68.dat
```

read.js - output :
```
***********DATA IN THE FILE***********


Transaction ID -->  6f1f0d399cad17fc8df7bb5c01cd93f175f8b11c56392279dfb1592115466e68 

Transaction {
  timestamp: 1627223330003360400n,
  num_inputs: 1,
  inputs: [
    Input {
      txnid: '16950fba0cd56400000000011695103c2dbe7700000000011695111914bd0700',
      index: 1,
      siglength: 3418286465,
      sig: '7ab2585079ce0490369ea016808df2349a736a2ae19db4247cc9b96e0000000500000002abcd0000000100000000000f423f000001aa2d2d2d2d2d424547494e20525341205055424c4943204b45592d2d2d2d2d0a4d49494243674b434151454179372b4c38774873634b556b7661385a46684d4c5461704c79654f514f35375a34756865326b457552496861325948454e6150320a722b417873647648744a65442b73497747306e514d594b443052704476715135754b4e6f5a6a303942363763313077747a4d5453637a3950794531684b437a370a6968726232674f4c524648533669715a477442634e7868562f722f687056746964397a76664247345278746f4f73392b30652b5562536970365248436a6a4a630a586959565a326a4376636365304a54725232595430666744584a4a6452337138716a763849415a4543693172585365317649716456474b63766355762f6d706b0a754c6c76674b62397938764e56636969444363384a3839483541676c7a777376355041616e38393046594278592b686e743476714742394b5a634d364257315a0a446b6379624472725856577975422b315837483646547a465831797a6f766c474e514944415141420a2d2d2d2d2d454e4420525341205055424c4943204b45592d2d2d2d2d0a'
    }
  ],
  num_outputs: NaN,
  outputs: []
}


 Exiting Successfully
```
**(You can confirm the hash from the .dat file in assignment 3 as it is the same file in example 2)** 