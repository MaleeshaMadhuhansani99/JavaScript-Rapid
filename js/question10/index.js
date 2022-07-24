
function display(val){
             document.getElementById("exp").value+=val
}

function result(){
         var a = document.getElementById("exp").value
         var b = eval(a)
         document.getElementById("exp").value = b
}
function clr(){
          document.getElementById("exp").value = ""
 }
