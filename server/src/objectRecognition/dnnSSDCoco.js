import cv from '/usr/lib/node_modules/opencv4nodejs';
import fs from 'fs';
import path from 'path';
import classNames from './dnnCocoClassNames';
import { classifyImg } from './utils';

if (!cv.xmodules.dnn) {
  throw new Error('exiting: opencv4nodejs compiled without dnn module');
}

// replace with path where you unzipped inception model
const ssdcocoModelPath = '/server/src/objectRecognition/SSD_300x300';

const prototxt = path.resolve(ssdcocoModelPath, 'deploy.prototxt');
const modelFile = path.resolve(
  ssdcocoModelPath,
  'VGG_coco_SSD_300x300_iter_400000.caffemodel',
);

if (!fs.existsSync(prototxt) || !fs.existsSync(modelFile)) {
  console.log('could not find ssdcoco model');
  console.log(
    'download the model from: https://drive.google.com/file/d/0BzKzrI_SkD1_dUY1Ml9GRTFpUWc/view',
  );
  throw new Error('exiting: could not find ssdcoco model');
}

const ObjectDetection = img => {
  const minConfidence = 0.3;

  const predictions = classifyImg(img).filter(
    res => res.confidence > minConfidence,
  );
  return predictions;
};

export default ObjectDetection;
