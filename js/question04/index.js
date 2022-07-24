function click(){
   document.getElementById('submit').onclick = function(e){
        findArea()
   }
}

function findArea(){
    var width=document.getElementById("w").value
    var height=document.getElementById("h").value

    area=width*height

    document.write("Area of the rectangle is "+area+" cm^2")
}

click()
