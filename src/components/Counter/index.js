// FIX1: The import statement for Component class should be written like this
import {Component} from 'react'

import './index.css'

// FIX2: To create a class component we need to extend the our class React "Component" class
class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    // FIX3: The state value should be updated using "setState" method
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    // FIX4: The state value should be updated using "setState" method
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    // FIX5: We should use const to avoid reassigning the value of the state variable
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="count">Count {count}</h1>
        {/* FIX6: The event handler should be passed as a reference to the onClick attribute and onIncrement should be given as value for event handler */}
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        {/* FIX7: The event handler should be passed as a reference to the onClick attribute and onDecrement should be given as value for event handler */}
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
