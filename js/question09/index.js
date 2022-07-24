function click(){
   document.getElementById('btn').onclick = function(e){
        findResult()
   }
}

function findResult(){
  var marks=document.getElementById('mark').value
  if(marks>=50){
    document.write("Good job. You are pass")
  }else{
    document.write("Sorry..You have to work hard for "+document.getElementById('sub').value +" subject...")
  }
}

click()
