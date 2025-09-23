import { Component } from 'react'

export class ClassCount extends Component {

  componentDidMount() {
    console.log('Je suis dans le CDM')
    document.title = `ClassCount cliqué ${this.state.count} fois`;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Je suis dans le CDU')
    if (this.state.count !== prevState.count) {
      console.log('Mise à jour du titre')
      document.title = `ClassCount cliqué ${this.state.count} fois`;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count} ClassCount</h1>
        <button className='btn btn-primary me-2' onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
        <input type='text' value={this.state.name} placeholder='input' onChange={e => {
          this.setState({
            name: e.target.value
          })
        }} />
      </div>
    )
  }
}

export default ClassCount
