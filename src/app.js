const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/autoshow');

app.use(express.static('public'));

const carSchema = new mongoose.Schema({
  mitsu: {
    mitsu1: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    mitsu2: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    mitsu3: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    mitsu4: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
  },
  honda: {
    honda1: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    honda2: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    honda3: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    honda4: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
  },
  merc: {
    merc1: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    merc2: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    merc3: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    merc4: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
  },
  nissan: {
    nissan1: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    nissan2: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    nissan3: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    nissan4: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
  },
  porsche: {
    porsche1: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    porsche2: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    porsche3: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    porsche4: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
  },
  toyota: {
    toyota1: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    toyota2: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    toyota3: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    toyota4: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
  },
  mazda: {
    mazda1: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    mazda2: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    mazda3: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
    mazda4: {
      images: String,
      speed: Number,
      handling: Number,
      acceleration: Number,
      launch: Number,
      braking: Number,
    },
  },
});
const Car = mongoose.model('cars', carSchema);

const logoSchema = new mongoose.Schema({
  mitsu: String,
  honda: String,
  merc: String,
  nissan: String,
  porsche: String,
  toyota: String,
  mazda: String,
});
const Logo = mongoose.model('logos', logoSchema);

app.get('/', (req, res) => {
  res.render('autoshow');
});

app.get('/getCarImages', async (req, res) => {
  try {
    const cars = await Car.findOne(); // Assuming all car data is stored in a single document

    // Extracting image paths from the fetched data
    const imagePaths = {};
    Object.keys(cars._doc).forEach(make => {
      imagePaths[make] = Object.values(cars._doc[make]).map(car => car.images);
    });

    res.json(imagePaths);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/getLogos', async (req, res) => {
  try {
    const logos = await Logo.findOne();
    res.json(logos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/getCarStats/:make/:model', async (req, res) => {
  try {
    const make = req.params.make.toLowerCase();
    const model = req.params.model.toLowerCase();
    const cars = await Car.findOne(); // Assuming all car data is stored in a single document

    // Check if the make and model exist in the data
    if (cars._doc[make] && cars._doc[make][model]) {
      const stats = cars._doc[make][model];
      res.json(stats);
    } else {
      res.status(404).send('Car not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/showcase/:make', async (req, res) => {
  try {
    const make = req.params.make.toLowerCase();
    const cars = await Car.findOne();
    const logos = await Logo.findOne();

    const carData = cars._doc[make];
    const imagePaths = Object.keys(carData).map(key => carData[key].images);
    const logoPath = logos ? logos[make] : '';

    res.render('showcase', { imagePaths, make, logos, logoPath, cars }); // come back
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});