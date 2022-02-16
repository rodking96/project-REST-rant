const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Coffee Beans Cafe',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Croissant, French cuisine',
        pic: '/images/coffee-beans.jpg'
      }, {
          name: 'Coding Cat Cafe',
          city: 'Phoenix',
          state: 'AZ',
          cuisines: 'Coffee, Bakery',
          pic: '/images/coffee-cat.jpg'
      }]
      res.render('places/index', { places })
  })
module.exports = router

