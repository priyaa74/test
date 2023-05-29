// const eventEmitter= require("events")
// const event= new eventEmitter();
// event.on("second",()=>{
//     console.log("SEcond event");
// })
// event.on("first",()=>{
//     console.log("Welcome!");
// })
// event.emit("first");

// event.on("first",()=>{
//     event.emit("second");
//     console.log("First Event")
// })

// event.emit("first");

// var str = "bfekguyttew";
// var k = 4;

// function insertChar(str, k) {
//   var newStr = "";
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] !== 'a' && count < k) {
//       newStr += 'a';
//       count++;
//     } else {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// console.log(insertChar(str, k)); // Output: "aaaaguyttew"

// var x=10;
// function foo(){
//   console.log(x);
// }
// function bar(){
//   var x= 5;
//   foo();
// }
// bar();

// function outer(){
//   var x=10;
//   return function(){
//     console.log(x);
//   }
// }
// var foo= outer()
// var x=5
// foo();

// console.log('1');
// setTimeout(function(){
//   console.log('2');
//   Promise.resolve().then(function(){
//     console.log('3');
//   });
//   console.log('4');
// },0);


//   console.log('5');

// function foo(){
//     console.log(this.a);
// }
// var a=10;
// var obj={a:20, foo:foo};

// obj.foo()

// function foo(){
//     console.log(this.a);
// }
// var obj1= {a:10};
// var obj2={a:20};

// foo.call(obj1);
// foo.call(obj2);

var obj = {
    prop: 42,
    func: function(){
        console.log(this.prop);
    }
};

var foo= obj.func;
var prop= 10;
foo();