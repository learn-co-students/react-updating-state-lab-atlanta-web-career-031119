import React from 'react';

class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0,
        }
    }

    handleClick = () => {
        let newNum = this.state.timesClicked 
        this.setState({
            timesClicked: newNum += 1
        })
    }

    render() {
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker