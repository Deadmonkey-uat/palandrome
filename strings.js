function strings()
{
    var string1 = document.getElementById("initString").value;
    var string2 = document.getElementById("2ndString").value;

    var string3 = string1.substr(1,4);

    // document.getElementById("resultString").innerHTML="substring of string1 for (2,4) = " +string3;

    // i = init case insensitive 

    var repStr1 = string1.replace(/asd/i, "qwe");
     document.getElementById("resultString").innerHTML = "replace asd with qwe case insensitive " + repStr1;
 

    var repStr2 = string1.replace(/asd/g, "qwe");
    document.getElementById("resultString").innerHTML = "replace multiples asd with qwe " + repStr2;
    //g = repeat for all occurances
    // can't use both so do this

    var repStr3 = string1.toLowerCase();
     repStr3 = repStr3.replace(/asd/g, "qwe");
     document.getElementById("resultString").innerHTML = "converted to LC then replace multiples asd with qwe " + repStr3;

    var repStr4 = string1.toUpperCase();
    //document.getElementById("resultString").innerHTML = "string 1 in upper case " + repStr4;
    //var revStr = string1.split("").reverse("").join("");

    //identify palandrome
    var revStr = string1.split("");
    document.getElementById("resultString").innerHTML = "string 1 split = " + revStr;

    revStr = revStr.reverse("");
    document.getElementById("resultString").innerHTML = "string 1 split and reversed = " +revStr;

    revStr = revStr.join("");
    document.getElementById("resultString").innerHTML = "string 1 split, reversed and joined = " +revStr
    //new variable for display
    var display = document.getElementById("resultString");
    // return for result
    if (revStr != string1)
    {
        
        document.getElementById("resultString").innerHTML = "Sorry, this is not a palandrome ";
        display.innerHTML = "Result: <span style='color: #dd1616;'>Sorry, this is not a palandrome</span>;"
    }
    else
    {
        document.getElementById("resultString").innerHTML = "Congratulations, this is a palandrome";
        display.innerHTML = "Result: <span style='color: #4CAF50'>Congratulations, this is a palandrome;"
    }

    //var newRev = "";
    //var i;

    //for (i=string1.length - 1; i>=0; i--)
    //{
    //   newRev += string1[i];
    //}
    //   document.getElementById("resultString").innerHTML = "reverse using for loop " + newRev;
   
}