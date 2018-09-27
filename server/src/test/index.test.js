var axios = require('axios');
var fs = require('fs');

function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

test('Good request expected', () => {
  let img = base64_encode('./src/test/img.jpg');
  let myJSONObject = { imgBase64: img };

  return axios
    .post('http://localhost:3000/objectRecognition', {
      imgBase64: img,
    })
    .then(function(response) {
      console.log(response.status);
      expect(response.status).toEqual(202);
    });
});

test('Bad request expected', () => {
  let img = fs.readFileSync('./src/test/img.jpg');
  let myJSONObject = { imgBase64: img };

  return axios
    .post('http://localhost:3000/objectRecognition', {
      imgBase64: img,
    })
    .then(function(response) {
      console.log(response.status);
      expect(response.status).toEqual(404);
    })
    .catch(err => {});
});
