console.log("hello node.js");

function add(a,b){
    return a+b;
}

console.log(add);
console.log(add());
console.log(add(4,5));
console.log(process.argv);
 
 var args = process.argv.slice(2);

 console.log(add(parseInt(args[1]),parseInt(args[0])));
// "url": "git+https://github.com/Priyankajadoun/FirstHTTPServer.git"