function click(){
   document.getElementById('submit').onclick = function(e){
        name_home()

   }
}

function name_home(){
    alert("Name : "+ document.getElementById("name").value +"\nHome Town : "+document.getElementById("home").value)
}

click()
