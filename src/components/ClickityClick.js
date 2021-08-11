import React, {Component} from "react"

export default class ClickityClick extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hasBeenClicked: false}}
/*         count: 0,
        addressInfo: {
            street: null,
            number: null,
            city: 'New York City',
            country: null}
      } 
    }
    
    handleClick = () => {
        let newCount = this.state.count + 1
        this.setState(
          {count: newCount},
          {...this.state.addressInfo, city: 'New York City'}
          //This would result in the state updating to this shape:
/*           {
            theme: 'blue',
            addressInfo: {
              street: null,
              number: null,
              city: 'New York City',
              country: null
            }, */
/*       )}
    
    //Or, we can also do it this way, knowing React's inbuilt function...
    handleClick = () => {
        this.setState(previousState => {
          return {
            count: previousState.count + 1
          } })
      } */ 
      handleClick = () => {
        this.setState(previousState => {
          return {
            hasBeenClicked: !previousState.hasBeenClicked
          }
        })
      }
  
    render() {
      return(
        <div>
          <p>I have {this.state.hasBeenClicked ? null: "not"} been clicked</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      )
    }
    }
    