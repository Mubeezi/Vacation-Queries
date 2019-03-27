$(document).ready(function(event) {
    $("#vacform").on('submit',function(event) {
      event.preventDefault();

        var ageID = $("input[name='age']:checked").val();
        var weatherID = $("input[name='weather']:checked").val();
        var sceneryID= $("input[name='scenery']:checked").val();
        var expenditureID =$("input[name='expenditure']:checked").val();
        var activityID = $("input[name='activity']:checked").val();


        // Check if the condition is true and then redirect.
  if ( ageID==="1-10"||activityID==="Exciting" ) {
   window.location.href = "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/43a69f1b544e4844b4cbfd529ce7d352";
  }

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
