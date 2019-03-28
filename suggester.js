$(document).ready(function(event) {
    $("#vacform").on('submit',function(event) {
      event.preventDefault();

        var ageID = $("input[name='age']:checked").val();
        var weatherID = $("input[name='weather']:checked").val();
        var sceneryID= $("input[name='scenery']:checked").val();
        var expenditureID =$("input[name='expenditure']:checked").val();
        var activityID = $("input[name='activity']:checked").val();


        // Check if the condition is true and then redirect.
  if ( ageID==="1-10" ||ageID==="10-20"||activityID==="Exciting" ||activityID==="Very Exciting"|| expenditureID==="100-500" ||expenditureID==="500-1000" ||weatherID==="SUNNY"||weatherID==="CHILLED"||sceneryID==="ROCKY"||sceneryID==="AQUATIC" ) {
   window.location.href = "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/43a69f1b544e4844b4cbfd529ce7d352";}

   if ( ageID==="20-40" ||ageID==="40+"||activityID==="Minimum" ||activityID==="Moderate"|| expenditureID==="1000-1500" ||expenditureID==="1500+" ||weatherID==="PRECIPITATION"||weatherID==="COOLED"||sceneryID==="LOW-LYING"||sceneryID==="VAST-SHAPED" ) {
    window.location.href = "https://www.responsibletravel.com/ImagesClient/indian-himalayas-topbox-map.gif";


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
