window.onload = function() {

        readFile('data/articles.json', function(articles) {
       // console.log(articles);

            for (let i = 0; i < articles.length ; i++) {

                const article = new Article(articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].content, articles[i].resumes, articles[i].tags);
                
                displayArticle(article);
            }
        });   
}
