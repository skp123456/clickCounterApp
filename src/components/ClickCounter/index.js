import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">
            The button has been clicked <span className="count">{count}</span>{' '}
            times
          </h1>
          <p className="descreption">Click the button to increase the count</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
