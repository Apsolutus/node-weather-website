const request = require('request')

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/6f0dc00c8ba51d5ee8a3fe48a76735dd/${lat},${long}?units=si`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback(body.error, undefined)
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${
        body.currently.temperature
        } degrees out. There is a ${
        body.currently.precipProbability
        }% chance of ${body.daily.data[0].precipType}. The high today is ${body.daily.data[0].temperatureHigh} and the low is ${body.daily.data[0].temperatureLow}.`
      )
      // console.log(body.daily.data[0])
    }
    // console.log(url)

  })
}

module.exports = forecast
