export const updateUIWithForecast = (data) => {
  const { start, end, length, weatherData } = data;
  document.getElementById('forecast-info').removeAttribute('hidden');

  console.log(start, end, length, weatherData);
  const startDateForApi = `${start.split('/')[2]}-${start.split('/')[1]}-${start.split('/')[0]}`;
  const today = new Date();
  const todayForConverter = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  document.getElementById('start-date').innerHTML = start;
  document.getElementById('end-date').innerHTML = end;
  document.getElementById('destination').innerHTML = weatherData['city_name'];
  document.getElementById('trip-length').innerHTML = length;

  if (Client.differenceBetweenDates(todayForConverter, start) <= 16) {
    for (let i = 0; i < weatherData.data.length; i++) {
      if (weatherData.data[i].datetime === startDateForApi) {
        document.getElementById('forecast').innerHTML = `${weatherData.data[i].temp}°C`;
        break;
      }
    }
  } else {
    document.getElementById('forecast').innerHTML = 'Sorry, no forecast for this far in the future.';
  }
};
