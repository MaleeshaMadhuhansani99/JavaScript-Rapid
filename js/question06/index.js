function click(){
   document.getElementById('submit').onclick = function(e){
        findsquareroot()
   }
}

function findsquareroot(){
    var number=document.getElementById("num").value
    var s=Math.sqrt(number)
    alert("Square Root :"+ s )


}

click()
