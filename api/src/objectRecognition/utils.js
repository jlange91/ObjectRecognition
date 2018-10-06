import cv from '/usr/lib/node_modules/opencv4nodejs';
import path from 'path';
import classNames from './dnnCocoClassNames';

const ssdcocoModelPath = '/api/src/objectRecognition/SSD_300x300';

const prototxt = path.resolve(ssdcocoModelPath, 'deploy.prototxt');
const modelFile = path.resolve(
  ssdcocoModelPath,
  'VGG_coco_SSD_300x300_iter_400000.caffemodel',
);
// initialize ssdcoco model from prototxt and modelFile
const net = cv.readNetFromCaffe(prototxt, modelFile);

function extractResults(cv, outputBlob, imgDimensions) {
  return Array(outputBlob.rows)
    .fill(0)
    .map((res, i) => {
      const classLabel = outputBlob.at(i, 1);
      const confidence = outputBlob.at(i, 2);
      const bottomLeft = new cv.Point(
        outputBlob.at(i, 3) * imgDimensions.cols,
        outputBlob.at(i, 6) * imgDimensions.rows,
      );
      const topRight = new cv.Point(
        outputBlob.at(i, 5) * imgDimensions.cols,
        outputBlob.at(i, 4) * imgDimensions.rows,
      );
      const rect = new cv.Rect(
        bottomLeft.x,
        topRight.y,
        topRight.x - bottomLeft.x,
        bottomLeft.y - topRight.y,
      );

      return {
        classLabel,
        confidence,
        rect,
      };
    });
}

function classifyImg(img) {
  // ssdcoco model works with 300 x 300 images
  const imgResized = img.resize(300, 300);

  // network accepts blobs as input
  const inputBlob = cv.blobFromImage(imgResized);
  net.setInput(inputBlob);

  // forward pass input through entire network, will return
  // classification result as 1x1xNxM Mat
  let outputBlob = net.forward();
  // extract NxM Mat
  outputBlob = outputBlob.flattenFloat(
    outputBlob.sizes[2],
    outputBlob.sizes[3],
  );

  return extractResults(cv, outputBlob, img).map(r =>
    Object.assign({}, r, { className: classNames[r.classLabel] }),
  );
}

export { classifyImg };
