function userInfo()
{
    var cc=parseInt(document.getElementById("cc").value);
    var yy=parseInt(document.getElementById("yy").value);
    var mm=parseInt(document.getElementById("mm").value);
    var dd=parseInt(document.getElementById("dd").value);

    //alert("Your birthday is" +" "+ dd +" " + mm +" " + cc + yy);

    var day = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7;

   
    alert("The day of the week you were born is:" + " "+ day);
    
    
    var gender=document.querySelector('input[name="gender"]:checked').value;
   
    
    if (gender==1)           
    {
        alert("You are female");

        if (day===0)
        {
            alert("Your Akan name is Akosua");
        }
        else if (day===1)
        {
            alert("Your Akan name is Adwoa");
        }
        else if (day===2)
        {
            alert("Your Akan name is Abenaa");
        }
        else if (day===3)
        {
            alert("Your Akan name is Akua");
        }
        else if (day===4)
        {
            alert("Your Akan name is Yaa");
        }
        else if (day===5)
        {
            alert("Your Akan name is Afua");
        }
        else if(day===6)
        {
            alert("Your Akan name is Ama");
        }
        else
        {
            alert("Please try again. Input valid data");
        }
    }

    else 
    {
        alert("You are male");

        if (day===0)
        {
            alert("Your Akan name is Kwasi");
        }
        else if (day===1)
        {
            alert("Your Akan name is Kwadwo");
        }
        else if (day===2)
        {
            alert("Your Akan name is Kwabena");
        }
        else if (day===3)
        {
            alert("Your Akan name is Kwaku");
        }
        else if (day===4)
        {
            alert("Your Akan name is Yaw");
        }
        else if (day===5)
        {
            alert("Your Akan name is Kofi");
        }
        else if (day===6)
         {
            alert("Your Akan name is Kwame");
        }
        else 
        {
            alert("Please try again. Input valid data");
        }
    }
   
}



