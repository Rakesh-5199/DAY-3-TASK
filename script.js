var request = new 
//Question:2
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);
//Question:3
 for(var i =0;i<res.length;i++)
 if(res[i].capital){
  console.log(res[i].capital[0]+" "+res[i].area)
 }
 else{
 console.log("Invalid capital"+res[i].area);
    }
   }