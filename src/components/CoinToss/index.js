import {Component} from 'react'
import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imgUrl: headsImgUrl, head: 0, tail: 0}

  makeToss = () => {
    const {imgUrl, head, tail} = this.state
    const result = Math.floor(Math.random() * 2)
    let tossImg = ''
    let headsCount = head
    let tailsCount = tail
    if (result === 0) {
      tossImg = headsImgUrl
      headsCount = head + 1
    } else {
      tossImg = tailsImgUrl
      tailsCount = tail + 1
    }
    this.setState({
      imgUrl: tossImg,
      head: headsCount,
      tail: tailsCount,
    })
  }

  render() {
    const {imgUrl, head, tail} = this.state
    const total = head + tail

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="coin-image" src={imgUrl} alt="toss result" />
          <button type="button" className="button" onClick={this.makeToss}>
            Toss Coin
          </button>
          <div className="results">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {head}</p>
            <p className="count">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
