function userInfo()
{
    var cc=parseInt(prompt("Enter the first two digits of the century you were born in"));
    var yy=parseInt(prompt("Enter the last two digits of the century you were born in"));
    var mm=parseInt(prompt("Enter two digits of the month you were born in.(For example January = 01"));
    var dd=parseInt(prompt("Enter two digits of the day of the month you were born"));

    alert("Your birthday is" +" "+ dd +" " + mm +" " + cc + yy);

    var day = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7;

    //CC/4)-2*CC -1}+(YY*5/4)+{(MM+1)*26/10

    alert("The day of the week you were born is:" + day);

    var gender=prompt("Enter the number that represents your gender. 1= Female 2 = Male")

    
    if (gender===1)
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
        else 
        {
            alert("Your Akan name is Ama");
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
        else
         {
            alert("Your Akan name is Kwame");
        }
      }
     
    

}

userInfo();


