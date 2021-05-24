const crypto = require("crypto")
const fs = require('fs');


var { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
	// The standard secure default length for RSA keys is 2048 bits
	modulusLength: 2048,
})

const data = 'my secret data'

const encryptedData = crypto.publicEncrypt(
	{
		key: publicKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	},
	// We convert the data string to a buffer using `Buffer.from`
	Buffer.from(data)
)


console.log("encypted data: ", encryptedData.toString('hex'))

const decryptedData = crypto.privateDecrypt(
	{
		key: privateKey,
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	},
	encryptedData
)

console.log("decrypted data: ", decryptedData.toString())

fs.openSync("./Keys/public.pem","r");
publicKey = fs.readFileSync("./Keys/public.pem",'utf8');

fs.openSync("./Keys/private.pem","r");
privateKey = fs.readFileSync("./Keys/private.pem",'utf8');

fs.openSync("./Data/un-encrypted.txt","r");
var verifiableData = fs.readFileSync("./Data/un-encrypted.txt",'utf8');

console.log(verifiableData.toString())

const signature = crypto.sign("sha256", Buffer.from(verifiableData), {
	key: privateKey,
	padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
})

console.log(signature.toString('hex'))

fs.openSync("./Data/encrypted.txt","w");
fs.writeFileSync("./Data/encrypted.txt",signature.toString('hex'),"utf8");

const isVerified = crypto.verify(
	"sha256",
	Buffer.from(verifiableData),
	{
		key: publicKey,
		padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
	},
	signature
)

console.log("signature verified: ", isVerified)


