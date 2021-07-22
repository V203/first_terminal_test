module.exports =  function(regNum){
  console.log(regNum);
 switch(regNum){
   case ("CY"):
     return "Bellville";
     break;
   case ("CJ"):
     return "Paarl";
     break;
   case ("CA"):
     return "Cape Town";
     break;
   default:
     return "Some other place!";
     
              }
}