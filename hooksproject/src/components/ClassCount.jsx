import { Component } from "react";

class ClassCount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0, 
            name: ''
        }
    }

    componentDidMount() {
        console.log("Je suis dans CMD")
        document.title = `Vous avez cliqué ${this.state.count} fois`
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            console.log("Mise à jour du titre");
            document.title = `Vous avez cliqué ${this.state.count} fois`;
        }
    }


    render() {
        return (
            <div> <br />
            <input type='text' value={this.state.name} onChange={e => {
                this.setState({
                    name: e.target.value
                })
            }} />
            </div>
        )
    }

}

export default ClassCount