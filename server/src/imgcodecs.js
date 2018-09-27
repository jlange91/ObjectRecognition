import cv from '/usr/lib/node_modules/opencv4nodejs';

const decodeFromBase64 = base64Data => {
  const buffer = Buffer.from(base64Data, 'base64');
  const img = cv.imdecode(buffer);
  return img;
};

export default decodeFromBase64;
