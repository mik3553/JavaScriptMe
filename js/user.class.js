
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

class User {

	username;
	email;
	password;


	constructor (username, email, password ){
		this.username = username;
		this.email    = email;
		this.password = password;
		
	}

	// ici la methode getters la meilleur selon 3wschool
	get username(){
 	   	return this.username;
 	}
 	get email(){
 		return this.email;
 	}
 	get password(){
 		return this.password;
 	}




	// ici la methode fonction
 	// getUsername(){
 	// 	return this.username;
 	// }


 	// set username(username) {
 	// 	this.username = username;
 	// }

}