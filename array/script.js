


var  allName= document.querySelector(".name")
let  allNameArray=["sujay","soumen","dip","abhisek","rik"];

let vale=1;
allName.textContent=allNameArray[0]
allName.addEventListener("click",()=>{
  allName.textContent=allNameArray[vale];
  vale++;

  if(vale===allNameArray.length){
      vale=0;
  }
})