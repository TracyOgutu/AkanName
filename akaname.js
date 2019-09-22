function userInfo()
{
    var cc=parseInt(document.getElementById("cc").value);
    var yy=parseInt(document.getElementById("yy").value);
    var mm=parseInt(document.getElementById("mm").value);
    var dd=parseInt(document.getElementById("dd").value);

 
    if (mm = "" || mm<1 || mm>12) 
    { 
       alert("Please enter a Valid month ");
       return false;
    }
 
    if (dd = "" || dd<1 || dd>31) 
    { 
       alert("Please enter a Valid day ");
       return false;
    }
 
    
    var day = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7;

    
    var gender=document.querySelector('input[name="gender"]:checked').value;
   
    
    if (gender==1)           
    {

        alert("You are female");

        if (day===0)
        {
            alert("You were born on a Sunday")
            alert("Your Akan name is Akosua");
        }
        else if (day===1)
        {
            alert("You were born on a Monday")
            alert("Your Akan name is Adwoa");
        }
        else if (day===2)
        {
            alert("You were born on a Tuesday")
            alert("Your Akan name is Abenaa");
        }
        else if (day===3)
        {
            alert("You were born on a Wednesday")
            alert("Your Akan name is Akua");
        }
        else if (day===4)
        {
            alert("You were born on a Thursday")
            alert("Your Akan name is Yaa");
        }
        else if (day===5)
        {
            alert("You were born on a Friday")
            alert("Your Akan name is Afua");
        }
        else if(day===6)
        {
            alert("You were born on a Saturday")
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
            alert("You were born on a Sunday")
            alert("Your Akan name is Kwasi");
        }
        else if (day===1)
        {
            alert("You were born on a Monday")
            alert("Your Akan name is Kwadwo");
        }
        else if (day===2)
        {
            alert("You were born on a Tuesday")
            alert("Your Akan name is Kwabena");
        }
        else if (day===3)
        {
            alert("You were born on a Wednesday")
            alert("Your Akan name is Kwaku");
        }
        else if (day===4)
        {
            alert("You were born on a Thursday")
            alert("Your Akan name is Yaw");
        }
        else if (day===5)
        {
            alert("You were born on a Friday")
            alert("Your Akan name is Kofi");
        }
        else if (day===6)
         {
            alert("You were born on a Saturday")
            alert("Your Akan name is Kwame");
        }
        else 
        {
            alert("Please try again. Input valid data");
        }
    }

 }
   
 