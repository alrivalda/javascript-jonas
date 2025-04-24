/* const getJSON = function (lat, lng, message) {
  return fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  ).then(response => {
    if (!response.ok) throw new Error('Eror');
    console.log(response);
    return response.json();
  });
};

const dataAnalyst = function (data) {
  console.log(data); 
};

const whereAmI = function (lat, lng) {
  getJSON(lat, lng, 'hi')
    .then(data => dataAnalyst(data))
    .catch(err => alert(err.message));
};

whereAmI(52.508, 13.381);
*/

const createImage = function (imgpath) {
  return new Promise(function (resolve) {
    const img = document.createElement('img');
    img.src = imgpath;
  });
};

const inputValue = document.getElementById('myInput').value;

createImage(inputValue);
