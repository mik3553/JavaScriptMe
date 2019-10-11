window.addEventListener("DOMContentLoaded", (event) =>  {



    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->
        const buttons = document.getElementsByClassName("square-button-empty");
        const connexionForms      = document.querySelector("#connexion-form");
        const inscriptionForms    = document.querySelector("#register-form");


        for (let i = 0; i < buttons.length; i++) {
        
            buttons[i].addEventListener("click", function(e){
            e.preventDefault();

                if (e.target.getAttribute("data-button")=="0"){
                connexionForms.style.display = "none";
                inscriptionForms.style.display = "flex";
                }
                else if(e.target.getAttribute("data-button")=="1"){
                inscriptionForms.style.display = "none";
                connexionForms.style.display = "flex";
                }
            })
        }
            
        const logInButton  = document.querySelector("#logIn");
        const signUpButton = document.querySelector("#signUp");
        
        logInButton.addEventListener("click", function(e){
        e.preventDefault();
        
            let connexionForm = document.getElementById("connexion-form");
            let email = connexionForm[0].value;
            let password  = connexionForm[1].value;
        
            let user = localStorage.getItem("user");
            if (user != null) {
                user = JSON.parse(user);
                if(email == user.email && password == user.password){
                    document.location.href="home.html";
                }

            }else{
                showAlert("Account do not exist, please register.")
            }


        })

        signUpButton.addEventListener("click", function(e){
            e.preventDefault();

            let registerForm = document.getElementById("register-form");
            let username = registerForm[0].value;
            let email    = registerForm[1].value;
            let password = registerForm[3].value;
            let passC    = registerForm[3].value;

            let error    = false;

            let usernameStatus = checkUserName(username);
            if(!usernameStatus){
                showAlert("l'username doit comporter au moin 5 caracteres");
                error = true;
            }

            let passStatus = checkPass(password);
            if(!passStatus){
                showAlert("une maj une min integer 8cara");
                 error = true;
            }
            if (password !== passC){
                showAlert("mdp different");
                 error = true;
            }

            // step 3

            // if(error == false)
            // {

            // }
            
            var user = new User(username, email , password);
            console.log(user);

            localStorage.setItem("user", JSON.stringify(user));  // linverse de stringify c'est JSON.parse(user)
             // function afficheUser (){
            
            //     const storeUser = document.getElementById("userStore");
            //     storeUser.innerHTML= "<h1>"+ localStorage.getItem("myUsers").username +"</h1>";
            // }

        })

});
