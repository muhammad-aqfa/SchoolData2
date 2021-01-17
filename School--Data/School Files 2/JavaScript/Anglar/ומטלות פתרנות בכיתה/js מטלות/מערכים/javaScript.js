//שאלה 1 א
//   var array1=new Array(1,42,3,44)
// for(var i=0;i<array1.length;i++){
//      if(array1[i]>10){
//         document.write(` ${array1[i]} `)
//      }
//  }
//שאלה 1 ב
// var Numbers = array1.filter((num) => {return num > 10});//arow function
//  document.write(Numbers.join());

//שאלה 2

//  var array2=new Array(`muhammad`,`mhmod`,`amer`,`omar`)
//  array2.sort()
//  document.write(array2.join())
//  document.write('<br>')
//  array2.reverse()
//  document.write(array2.join())
//שאלה 3
// var array3=new Array(`muhammad`,`mhmod`,`amer`,`omar`,`ali`)
// document.write(array3.join())
// document.write('<br>')
// var array3=new Array(`muhammad`,`mhmod`,`amer`,`omar`,`ali`)
// document.write(array3.join(`.`))
// document.write('<br>')
// var array3=new Array(`muhammad`,`mhmod`,`amer`,`omar`,`ali`)
// document.write(array3.join(`+`))
// document.write('<br>')
//  var array3=new Array(`muhammad`,`mhmod`,`amer`,`omar`,`ali`)
// document.write(array3.join(` שם פרטי  `))

//שאלה 4
//  var array1=new Array(1,42,3,44,14,18)
//  var n=2
//  var x1=n
//  var newNumbers = array1.map((x,n) =>
//   {
//       if(n<=x1){
//          return x
//       }
//  })
// document.write(`${newNumbers}`)

//שאלה 5
//  var array=new Array('a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3)
//  var count=1,maxNumberCount=0,tav
// for(var i=0;i<array.length;i++){
//      for(var j=i+1;j<array.length;j++){
//        if(array[i]===array[j]){
//             count++
//          }
//      }
//     if(count>maxNumberCount){
//         maxNumberCount=count 
//         tav=array[i]
//     }
//      count=1
//  }
//  document.write(`the tav is ${tav},${maxNumberCount} times `)

//שאלה 6
//    array5=new Array(`a`,`f`,`g`,`w`,`b`)
//       newtavs = array5.map((x) =>
//   {
//      //document.write(` ${x+1} `)
//      if(!(x>='a' && x<='z' ) &&!( x>='A' && x<='Z' )){
//         document.write(` Error `)
//         return 
//      }
//    else
//      if(x>='A' && x<='Z'  ){
//     return x+32
//    }
//    else 
//      if(x>='a' && x<='z'  ){
//         return x-32
//    }
//  })
//  document.write('<br>')
//  document.write(` ${newtavs} `)
