window.addEventListener("DOMContentLoaded", (event) =>  {

    function getInputValue(inputLogIn){           
            for (let i = 0 ; i < inputLogIn.length ;i++) {
            let inputValue = inputLogIn[i].value;
            console.log(inputValue);

            }

        }

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->
        const buttons = document.getElementsByClassName("square-button-empty");
        const contactForms = document.querySelectorAll(".contact-form");

        // const parentNode = document.querySelector("section");
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
            
        
    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

        

        const logInButton = document.querySelector("#logIn");
        const signUpButton = document.querySelector("#signUp");

        const inputLogIn   = document.querySelectorAll(".formLog-control");
        const inputSignIn  = document.querySelectorAll(".formSignIn-control");

        // ma  fonction qui recupere les input.value
        
        logInButton.addEventListener("click", function(e){
            e.preventDefault();
            getInputValue(inputLogIn);

        })
        signUpButton.addEventListener("click", function(e){
            e.preventDefault();
            getInputValue(inputSignIn);

            let userName = document.querySelector("#userName").value;
            if (userName.length < 5) {
                alert("Veuillez saisir 5 charactére au minimum pour votre username");
            }

            let passWord = document.querySelector("#passWord").value;
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{10,12}$/;
            // if (passWord.length < 8 ){
            // alert("Veuillez saisir 8 charactére au minimum pour votre password");
            // }
            if (passWord =! regex.test(passWord)) {
            alert("Veuillez saisir au moin une lettre majuscule et un chiffre et huit caractére au minimum");
            }

        })

                
    

    
    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'





    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'


});
