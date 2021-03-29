$(document).ready(() => {
  loadArticle();

  $(window).scroll(() => {
    if (($(document).height() - $(this).height()) <= ($(this).scrollTop() +1 )) {
      counter++;
      loadArticle()
    }
  })
});

let counter = 1;
const loadArticle = () => {
  $.ajax({
    method: `GET`,
    url: `https://newsapi.org/v2/everything?q=keyword&apiKey=f2713e1bf02e43b3b48a32aa5be53685&pageSize=5&page=${counter}`
  })
    .then((data) => {
      renderNews(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const renderNews = (newsData) => {
  console.log(newsData)
  newsData.articles.map((data) => {
    const toAdd = addNews(data)
    $('.newsContainer').append(toAdd)
  })
}

const addNews = (news) => {
  const $news = (
    `<article>
      <h1>${news.title}</h1>
      <a href=${news.url}><img src=${news.urlToImage} alt=${news.title}></img></a>
      <p>By: ${news.author}</p>
      <p>${news.description} <a href=${news.url}>Read More...</a></p>
    </article>`
  )
  return $news;
}