$(document).ready(() => {
  $('.time').append(findDate())
})

function findDate() {
  const time = new Date();
  
  const days= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  return (`${days[time.getDay()]} ${months[time.getMonth()]} ${time.getDate()} ${time.getFullYear()}`)
}