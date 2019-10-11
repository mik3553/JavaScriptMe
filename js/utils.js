// Ce fichier contient des fonction réutilisable -->

function readFile(file, done) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var value;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                value = JSON.parse(allText);
                done(value);
            }
        }
    }
    rawFile.send(null);
}


// function getInputValue(inputLogIn){           
//     for (let i = 0 ; i < inputLogIn.length ;i++) {
//         let inputValue = inputLogIn[i].value;
//         console.log(inputValue);
//         }
// }

function checkUserName(username){

    if (username.length < 5)
        return false;
    else
        return true;
}

function checkPass(password){

    let passRegex = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
    if (!passRegex.test(password))
        return false;
    else
        return true;
}

function showAlert(message){
    alert(message);
}
