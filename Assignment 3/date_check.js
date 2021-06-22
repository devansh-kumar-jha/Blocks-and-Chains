const unixTime = 1210981217;
const date = new Date(unixTime*1000);
console.log(date.toLocaleDateString("en-US"));

let a = console.timeStamp("Hello()");
console.log(a);

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}