module.exports = function(rgNum1){
  var rgNum = rgNum1.split(", ");
  //console.log(rgNum);
  var temp = 0;
  var reg = rgNum;

 for(var i = 0;i < reg.length;i++){
  //var reg = rgNum[i].trim();
   if(reg[i].startsWith("CJ")){
   temp++;
   }
 }
  
  console.log(temp)
  
  return temp;
}
