function click(){
    document.getElementById('submit').onclick = function(e){
     remainingtime()
  }
}

function remainingtime(){
  var v=document.getElementById("time").value
  var time=((24*60-Math.ceil(v)*60))/60
  if(document.getElementById("time").value<12){
    document.write("Now the time is "+ document.getElementById("time").value + " am")
    document.write("<br>")
    document.write("Remains "+time+" hours more...")

  }else if(v<13){
    document.write("Now the time is ",v +" pm")
    document.write("<br>")
    document.write("Remains "+time+" hours more...")

  }else if(v<24 && v>=13){
    document.write("Now the time is ",parseFloat(v-12).toFixed(2)+" pm")
    document.write("<br>")
    document.write("Remains "+time+" hours more...")
  }
 
}

click()

