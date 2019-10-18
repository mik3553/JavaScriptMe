

class Article {



	id;
	title;
	author;
	publishedDate;
	img;
	content;
	resumes;
	tags;

	constructor (id, title, author, publishedDate, img, content, resumes, tags){
		this.id = id;
		this.title = title;
		this.author = author;
		this.publishedDate = publishedDate;
		this.img = img;
		this.content = content;
		this.resumes = resumes;
		this.tags = tags;
	}

	// ici la methode getters la meilleur selon 3wschool
	get id(){
		return this.id;
	}
	get title(){
 	   	return this.title;
 	}
 	get author(){
 		return this.author;
 	}
 	get publishedDate(){
 		return this.publishedDate;
 	}
 	get img(){
 	   	return this.img;
 	}
 	get content(){
 		return this.content;
 	}
 	get resumes(){
 		return this.resumes;
 	}

 	get tags(){
 		return this.tags;
 	}

 	// les setters 
 	set id(id){
 		return this.id;
 	}
 	set title(title){
 	   	return this.title;
 	}
 	set author(author){
 		return this.author;
 	}
 	set publishedDate(publishedDate){
 		return this.publishedDate;
 	}
 	set img(img){
 	   	return this.img;
 	}
 	set content(content){
 		return this.content;
 	}
 	set resumes(resumes){
 		return this.resumes;
 	}


}