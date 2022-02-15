const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="/images/valentines-day.jpg" alt="Heart" />
                </div>
                <div>
                  Photo by <a href="AUTHOR_LINK"> Pixabay License</a> on <a href="Pixabay_LINK">Pixabay</a>
                </div>
          </main>
      </Def>
    )
  }

module.exports = error404