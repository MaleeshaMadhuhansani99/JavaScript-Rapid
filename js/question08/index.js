function hover(){
  document.getElementById('num').onmouseout = function(e){
       showValue()
  }
}

function showValue(){
  var perc=document.getElementById('num').value*0.2
  var n=Number(document.getElementById('num').value)
  var value=n + perc
  document.write("20% of value : "+ perc+"<br>" + "Total : "+ document.getElementById('num').value +" + "+ perc +" = "+value)
}

hover()
