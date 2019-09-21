function userInfo()
{
    var cc=parseInt(document.getElementById("cc").value);
    var yy=parseInt(document.getElementById("yy").value);
    var mm=parseInt(document.getElementById("mm").value);
    var dd=parseInt(document.getElementById("dd").value);

    //alert("Your birthday is" +" "+ dd +" " + mm +" " + cc + yy);

    var day = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7;

    //CC/4)-2*CC -1}+(YY*5/4)+{(MM+1)*26/10

    alert("The day of the week you were born is:" + day);
    
    // function getGender(){
      // var gender = document.getElementsByName["gender"];
    //     for(i = 0; i < gender.length; i++) {
    //     if (gender[i].checked){
    //             return gender[i].value;
    //         }
    //     }
    // }
    // var gen = getGender();
    
    var gender=document.querySelector('input[name="gender"]:checked').value;
   
    switch(gender){
                        case 1:
                                
                                    alert("You are female");

                                    switch(day) {
                                        case 0:
                                        alert("Your Akan name is Akosua");
                                        break;

                                        case 1:
                                        alert("Your Akan name is Adwoa");
                                        break;

                                        case 2:
                                        alert("Your Akan name is Abenaa");
                                        break;

                                        case 3:
                                        alert("Your Akan name is Akua");
                                        break;

                                        case 4:
                                        alert("Your Akan name is Yaa");
                                        break;

                                        case 5:
                                        alert("Your Akan name is Afua");
                                        break;

                                        case 6:
                                        alert("Your Akan name is Ama");
                                        break;

                                        default:
                                        alert("Please try again. Input valid data");
                                        break;
                                    }
                                

                        case 2:
                        
                                    alert("You are male");
                                    switch(day){
                                        case 0:
                                        alert("Your Akan name is Kwasi");
                                        break;

                                        case 1:
                                        alert("Your Akan name is Kwadwo");
                                        break;

                                        case 2:
                                        alert("Your Akan name is Kwabena");
                                        break;

                                        case 3:
                                        alert("Your Akan name is Kwaku");
                                        break;

                                        case 4:
                                        alert("Your Akan name is Yaw");
                                        break;

                                        case 5:
                                        alert("Your Akan name is Kofi");
                                        break;

                                        case 6:
                                        alert("Your Akan name is Kwame");
                                        break;

                                        default:
                                        alert("Please try again. Input valid data");
                                        break;

                                    }
                                

                        default:
                        alert("Error");
                        break;
                  }
   
}



