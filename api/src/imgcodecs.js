import cv from '/usr/lib/node_modules/opencv4nodejs';

const pngPrefix = 'data:image/jpeg;base64,';
const jpgPrefix = 'data:image/png;base64,';

const decodeFromBase64 = base64DataString => {
  const base64Data = base64DataString
    .replace(pngPrefix, '')
    .replace(jpgPrefix, '');
  const buffer = Buffer.from(base64Data, 'base64');
  const img = cv.imdecode(buffer);
  return img;
};

export default decodeFromBase64;
