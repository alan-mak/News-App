$(document).ready(() => {
  loadArticle();

  $(window).scroll(() => {
    if (($(document).height() - $(this).height()) <= ($(this).scrollTop())) {
      counter++;
      loadArticle()
    }
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
    <a href=${news.url}><img src=${news.urlToImage} alt=${news.title}></img></a>
    <p>${news.author}</p>
    <p>${news.description}</p>
    </article>`
  )
  return $news;
}