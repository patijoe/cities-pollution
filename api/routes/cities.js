var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send([
    {
      id: "1",
      level: getRandomInt(0, 11),
      name: "Madrid",
      country: "Spain",
      coordinates: {
        latitude: 40.4189,
        longitude: -3.6919
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOr4agc_YBWFehp576QA4BDjqh7CcjowPSWg&usqp=CAU"
    },
    {
      id: "2",
      level: getRandomInt(0, 11),
      name: "Barcelona",
      country: "Spain",
      coordinates: {
        latitude: 41.3825,
        longitude:	2.1769
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtokd86r7xsGpK-bR5spyLGK9cZU-sRB5bA&usqp=CAU"
    },
    {
      id: "3",
      level: getRandomInt(0, 11),
      name: "Lisbon",
      country: "Portugal",
      coordinates: {
        latitude: 38.7452,
        longitude: -9.1604
      },
      image: "https://afar-production.imgix.net/uploads/syndication/holland_americas/images/drWJHdicti/original_ESY-011297320crop.jpg?w=750&h=563&fit=crop"
    },
    {
      id: "4",
      level: getRandomInt(0, 11),
      name: "Paris",
      country: "France",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522
      },
      image: "https://img.huffingtonpost.com/asset/5e1d9c4c2100003000af8d0c.jpeg?cache=5aaxY3NirQ&ops=scalefit_720_noupscale"
    },
    {
      id: "5",
      level: getRandomInt(0, 11),
      name: "Brussels",
      country: "Belgium",
      coordinates: {
        latitude: 50.8467,
        longitude: 4.3517
      },
      image: "https://static.brusselsairlines.com/_img/destinationPage2/Belgium/Brussels/Brussels_grand_place.jpg"
    },
    {
      id: "6",
      level: getRandomInt(0, 11),
      name: "Bern",
      country: "Switzerland",
      coordinates: {
        latitude: 46.9480,
        longitude: 7.4474
      },
      image: "https://cdn.alberguesjuveniles.es/city_images/Switzerland/bern.jpg"
    },
    {
      id: "7",
      level: getRandomInt(0, 11),
      name: "Amsterdam",
      country: "Netherlands",
      coordinates: {
        latitude: 52.3500,
        longitude: 4.9166
      },
      image: "https://www.holland.com/upload_mm/d/0/7/69550_fullimage_fietsen-amsterdam_1360x.jpg"
    },
    {
      id: "8",
      level: getRandomInt(0, 11),
      name: "Berlin",
      country: "Germany",
      coordinates: {
        latitude: 52.5167,
        longitude: 13.3833
      }
    },
    {
      id: "9",
      level: getRandomInt(0, 11),
      name: "Rome",
      country: "Italy",
      coordinates: {
        latitude: 41.8931,
        longitude: 12.4828
      }
    },
    {
      id: "10",
      level: getRandomInt(0, 11),
      name: "Prague",
      country: "Czechia",
      coordinates: {
        latitude: 50.0833,
        longitude:14.4167
      }
    },
    {
      id: "11",
      level: getRandomInt(0, 11),
      name: "Varsovia",
      country: "Poland",
      coordinates: {
        latitude: 52.2167,
        longitude: 21.0333
      }
    }
  ]);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;
