$(document).ready(() => {
  loadArticle();
  const $add = $('.add');
  $add.click(() => {
    counter++;
    loadArticle()
  })
});

let counter = 1;
const loadArticle = () => {
  $.ajax({
    method: `GET`,
    url: `https://newsapi.org/v2/everything?q=keyword&apiKey=${apikey}&pageSize=5&page=${counter}`
  })
    .then((data) => {
      renderNews(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const renderNews = (tweets) => {
  tweets.articles.map((data) => {
    const toAdd = addNews(data)
    $('.newsContainer').append(toAdd)
  })
}

const addNews = (news) => {
  const $news = (
    `<article>
    <h1>${news.title}</h1>
    <img src=${news.urlToImage} alt=${news.title} href=${news.url}></img> 
    <p>${news.author}</p>
    <p>${news.description}</p>
    </article>`
  )
  return $news;
}