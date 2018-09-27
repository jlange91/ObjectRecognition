import express from 'express';
import decodeFromBase64 from './imgcodecs';
import ObjectDetection from './objectRecognition';

const app = express();

app.use(require('body-parser').json({ limit: '10mb' }));

const requiresImgBase64 = (req, res, next) => {
  const { imgBase64 } = req.body;
  if (typeof imgBase64 !== 'string') {
    return res
      .status(404)
      .send('imgData must be the base64 string of the image');
  }
  req.params.img = decodeFromBase64(imgBase64);
  return next();
};

app.post('/objectRecognition', requiresImgBase64, (req, res) => {
  res.status(202).send(ObjectDetection(req.params.img));
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
