$(document).ready(function(event) {
    $("#vacform").on('submit',function(event) {
      event.preventDefault();

        var ageID = $("input[name='age']:checked").val();
        var weatherID = $("input[name='scenery']:checked").val();
        var sceneryID= $("input[name='activity']:checked").val();
        var expenditureID =$("input[name='expenditure']:checked").val();
        var activityID = $("input[name='weather']:
        checked").val();


        if (ageID="1-10"  )
      }
    )});






/*  function validate(){
var valid=false;
var ageID=document.vacform.age;
for(var i=o;i<ageID.length;i++){
  if (ageID[i].checked){
    valid=true;
    break;
  }
}
if(valid){
  alert("validation");
}
else{
  alert("please select a mode of payment");
  return false;
}
};*/
