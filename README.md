# ObjectRecognition

## Description

Object Recognition Api with Client using opencv4node and SSD with coco models.

<details>
  <summary>
    Objects he can recognize
  </summary>
  <ul>
    <li>background</li>
    <li>person</li>
    <li>bicycle</li>
    <li>car</li>
    <li>motorcycle</li>
    <li>airplane</li>
    <li>bus</li>
    <li>train</li>
    <li>truck</li>
    <li>boat</li>
    <li>traffic light</li>
    <li>fire hydrant</li>
    <li>stop sign</li>
    <li>parking meter</li>
    <li>bench</li>
    <li>bird</li>
    <li>cat</li>
    <li>dog</li>
    <li>horse</li>
    <li>sheep</li>
    <li>cow</li>
    <li>elephant</li>
    <li>bear</li>
    <li>zebra</li>
    <li>giraffe</li>
    <li>backpack</li>
    <li>umbrella</li>
    <li>handbag</li>
    <li>tie</li>
    <li>suitcase</li>
    <li>frisbee</li>
    <li>skis</li>
    <li>snowboard</li>
    <li>sports ball</li>
    <li>kite</li>
    <li>baseball bat</li>
    <li>baseball glove</li>
    <li>skateboard</li>
    <li>surfboard</li>
    <li>tennis racket</li>
    <li>bottle</li>
    <li>wine glass</li>
    <li>cup</li>
    <li>fork</li>
    <li>knife</li>
    <li>spoon</li>
    <li>bowl</li>
    <li>banana</li>
    <li>apple</li>
    <li>sandwich</li>
    <li>orange</li>
    <li>broccoli</li>
    <li>carrot</li>
    <li>hot dog</li>
    <li>pizza</li>
    <li>donut</li>
    <li>cake</li>
    <li>chair</li>
    <li>couch</li>
    <li>potted plant</li>
    <li>bed</li>
    <li>dining table</li>
    <li>toilet</li>
    <li>tv</li>
    <li>laptop</li>
    <li>mouse</li>
    <li>remote</li>
    <li>keyboard</li>
    <li>cell phone</li>
    <li>microwave</li>
    <li>oven</li>
    <li>toaster</li>
    <li>sink</li>
    <li>refrigerator</li>
    <li>book</li>
    <li>clock</li>
    <li>vase</li>
    <li>scissors</li>
    <li>teddy bear</li>
    <li>hair drier</li>
    <li>toothbrush</li>
  </ul>
</details>

## Getting Started

### Prerequisites

- Download SSD trained model

  https://drive.google.com/file/d/1Er4yCQjQaeg1UoGrBGFNG5fh4ZmhtIVX

- Install docker on your machine.

  https://www.docker.com/

### Installation

#### Place SSD file:

Extract SSD file previously downloaded

```sh
tar xvzf SSD_300x300.tar.gz
```

Move SSD trained model file into api/src/ObjectRecognition folder it must be called SSD_300x300

```sh
api/src/objectRecognition
  ⊢ dnnCocoClassNames.js
  ⊢ dnnSSDCoco.js
  ⊢ index.js
  ⊢ utils.js
  L SSD_300x300          # <-- Place model folder here
```

#### Build the image:

```
docker-compose build
```

#### Run:

```
docker-compose up
```

### Usage

- Go to http://localhost:8080
- Upload image <br>
  `you can choose an image from /images folder`
- Select your level of confidence
- Send request

## Improvement

- [ ] Sorted data response
- [ ] Add additional coco models
- [ ] Add more custom themes for material-ui

## Built With

- [React-boilerplate](https://github.com/react-boilerplate/react-boilerplate) - Used to generate client
- [Opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs) - Used to create API

## Authors

- **Lange Julien**

## License

This project is licensed under the WTFPL License - see the [LICENSE.md](LICENSE.md) file for details

## Some Other Links

https://github.com/BVLC/caffe/wiki/Model-Zoo
