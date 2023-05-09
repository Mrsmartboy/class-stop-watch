import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {minutes: 0, seconds: 0}

  getIncrement = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onStartBtn = () => {
    this.timerId = setInterval(this.getIncrement, 1000)
  }

  onStopBtn = () => {
    clearInterval(this.timerId)
  }

  onResetBtn = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  getRenderedTime = () => {
    const {minutes, seconds} = this.state
    const totalSeconds = minutes * 60 + seconds
    const minutesValue = Math.floor(totalSeconds / 60)
    const secondsValue = Math.floor(totalSeconds % 60)
    const minutesFormat = minutesValue > 9 ? minutesValue : `0${minutesValue}`
    const secondsFormat = secondsValue > 9 ? secondsValue : `0${secondsValue}`

    return `${minutesFormat}:${secondsFormat}`
  }

  render() {
    const stopWatchText = this.getRenderedTime()
    return (
      <div className="bg-container">
        <h1 className="header">Stopwatch</h1>

        <div className="card-container">
          <div className="timer-header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-img"
            />
            <p className="timer">Timer</p>
          </div>
          <h1>{stopWatchText}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="start-btn"
              onClick={this.onStartBtn}
            >
              Start
            </button>
            <button type="button" className="stop-btn" onClick={this.onStopBtn}>
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.onResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
