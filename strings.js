function strings() {
    // allows the primary button to work
    var initString = document.getElementById("initString").value;
    // this normalizes the input as to case, spaces and punctuation so the program can run cleanly
    var result = initString.toLowerCase().replace(/[^a-z0-9]/g, "");
    // this allows to check if the input is a palindrome
    var revStr = result.split("").reverse().join("");
//this is the output, not a palindrome vs palindrome
    if (revStr !== result) {
        document.getElementById("resultString").innerHTML =
            "This is not a Palindrome, reset and try again";
    } else {
        document.getElementById("resultString").innerHTML =
            "This is a Palindrome!";
    }
}
