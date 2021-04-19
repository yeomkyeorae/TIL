console.log("haha");
const a = Buffer.alloc(100);
a.write("asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf");
console.log(a.toString());

var buf1 = Buffer.from("a");
var buf2 = Buffer.from("b");
var buf3 = Buffer.from("c");
var arr = [buf1, buf2, buf3];

var buf = Buffer.concat(arr);
console.log(buf);
console.log(buf.toString());
