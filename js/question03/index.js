function click(){
   document.getElementById('submit').onclick = function(e){
        age()

   }
}

function age(){
  var date=(document.getElementById('bd').value.split('-'))
  var year=date[0]
  var month=date[1]
  var day=date[2]

  var today= new Date()
  var todayYear=today.getFullYear()
  var todayMonth=today.getMonth()
  var todayDay=today.getDate()

  var ageYear=todayYear-year

  if(todayMonth>=month){
    var ageMonth=todayMonth-month
  }else{
    ageYear=ageYear-1
    var ageMonth=12+todayMonth-month
  }

  if(todayDay>=day){
    var dayAge=todayDay-day
  }else{
    ageMonth=ageMonth-1
    var dayAge=31+todayDay-day
  }

  if(ageMonth<0){
    ageMonth=11
    ageYear=ageYear-1
  }

  alert("Age :"+ageYear+" years, "+ageMonth+" months, "+dayAge +" days")
}

click()
