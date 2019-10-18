window.onload = function() {

        readFile('data/articles.json', function(articles) {
            // Methode Class URL avec searchParams
            const params = new URL(document.location).searchParams;
            const id = parseInt(params.get("id"));

            for (let i = 0; i < articles.length ; i++) {

                const article = new Article(articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].content, articles[i].resumes, articles[i].tags);
    
                if (id == article.id) {
                    displayArticle(article);
                }
            }
        })
        // METHODE AJAX LOCAL STORAGE
    
        // let myArticle = localStorage.getItem("article");
        // myArticle = JSON.parse(myArticle);

        // const article = new Article(myArticle.id, myArticle.title, myArticle.author, myArticle.publishedDate, myArticle.img, myArticle.content, myArticle.resumes, myArticle.tags )
        // console.log(article);

        // displayArticle(article);
}
