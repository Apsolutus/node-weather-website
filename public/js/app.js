const getWeather = (location) => {
  const messageOne = document.getElementById('msg-1')
  const messageTwo = document.getElementById('msg-2')
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then(({ error, location, forecast }) => {
      if (error) {
        messageOne.textContent = error
      } else {
        messageOne.textContent = location
        messageTwo.textContent = forecast
      }
    })
  })
}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  getWeather(location)
})
