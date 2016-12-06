import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { mediaXY } from './select'
import './App.css'

const sizeColor = {
  tiny: 'rgba(132,132,120,1)',
  skinny: 'rgba(236,064,121,1)',
  average: 'rgba(174,139,164,1)',
  babyGrand: 'rgba(183,080,081,1)',
  grand: 'rgba(195,115,099,1)',
  wide: 'rgba(197,192,101,1)',
  wider: 'rgba(140,165,115,1)',
  megaWide: 'rgba(157,178,176,1)',
}

function App({ height, isNarrow, isMedium, isWide, sizeId, url, width }) {
  const sourceThis = 'View source for this page on Github '
  return (
    <div className="App gray">
      <div className="App-header" style={{ borderColor: sizeColor[sizeId] }}>
        <div className="mlrauto outside gray bg-white b1">
          <div className="tab clearfix gray bb1">
            <span className="bg-red dot" />
            <span className="bg-yellow dot" />
            <span className="bg-green dot" />
          </div>
          <h1 className="text-center">Redux Windowsize</h1>
        </div>
      </div>

      <section className="mt2 container">
        <div className="group">
          <div className="ten columns offset-by-one fs2 bb1 pb1 text-center">
            {isNarrow && <p>Narrow only message or whatever.</p>}
            {isMedium && <p>Medium is nice.</p>}
            {isWide && <p>WOW! Your screen is so wide.</p>}
          </div>
          <div className="three columns offset-by-one">
            <h2 className="m0"><span>Height:</span> <span style={{ color: sizeColor[sizeId] }}>{height}px</span></h2>
            <h2 className="m0"><span>Width:</span>  <span style={{ color: sizeColor[sizeId] }}>{width}px</span></h2>
          </div>
          <div className="five columns">
            <p>Link to npm module code <a className="no-decoration" href={url} style={{ color: sizeColor[sizeId] }}>cape-io/redux-windowsize</a>.</p>
            <p>{sourceThis}<a className="no-decoration" href={url.concat('-website')}  style={{ color: sizeColor[sizeId] }}>cape-io/redux-windowsize-website</a>.</p>
          </div>
          <div className="two columns mono">
            <p>{`Size ID: ${sizeId}`}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
App.propTypes = {
  height: PropTypes.number.isRequired,
  isNarrow: PropTypes.bool.isRequired,
  isMedium: PropTypes.bool.isRequired,
  isWide: PropTypes.bool.isRequired,
  sizeId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}
App.defaultProps = {
  url: 'https://github.com/cape-io/redux-windowsize',
}

export default connect(mediaXY)(App)
