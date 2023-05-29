// function getsurName(){
//     var status= true
//     if(status)
//    { const age= 'masai'
// }
//     console.log(age);
// }

// getsurName();
// 'use strict'
// function alpha(){
//     var title='masai'
//     console.log(this.title)
// }
// var title= 'priya'
// alpha();

'use strict'
function surName(){
    var surName= 'masai';
    console.log(this.surName);
}
function greet(){
    console.log('hello');
}
var arr= [{surName:'Nrupul'},{surName:'Aman'},{surName:'Albert'}]

for(var i=0;i<arr.length;i++){
    setTimeout(surName.bind(arr[i]),0)
    setTimeout(greet(),0)
}
// var arr=[1,2,3,4,5]
// console.log(arr);

// var ar= new Array(5).fill(0).map(function(a,b){return b + 1})
// console.log(ar);


// arr=['a','b','c','d','e']
// const func=([f,...r])=>r.reduce((a,c)=>a+c)+f
// let res=func(arr)
// console.log(res)

// function value(b=10){
  
//    console.log(b);
// }
// value(0);

// const prod=(x)=>{
//    x= x+5
//    return inner =>(
//       console.log(x* inner)
//    )
// }
// prod (5)(10)