import { Component } from "react";
class Mouse extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false,
            buttontext: 'Hover me'
        };
        this.handlingMouseEnter = this.handlingMouseEnter.bind(this);
        this.handlingMouseLeave = this.handlingMouseLeave.bind(this);
    }

    handlingMouseEnter = ()=> {
        this.setState({
            isHovered: true,
            buttontext: "Hello, I am hovered"
        });
    }

    handlingMouseLeave = () =>{
        this.setState({
            isHovered: false,
            buttontext: "Hover me"
        });
    }

    render() {
        return (
            <button onMouseEnter={this.handlingMouseEnter} onMouseLeave={this.handlingMouseLeave}>
                {this.state.buttontext}
            </button>
        );
    }
}

export default Mouse;
