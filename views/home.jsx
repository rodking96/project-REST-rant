const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/balloons.jpg" alt="Balloons" width="500" height="500"/>
                </div>
                <div>
                  Photo by <a href="AUTHOR_LINK">Peggy und Marco Lachmann-Anke </a> on <a href="Pixabay_LINK">Pixabay</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home