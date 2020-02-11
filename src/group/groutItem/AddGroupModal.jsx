import React, { Component } from 'react'
class Modal extends Component {
    constructor(props) {
      super(props)

      this.state = {
handle : '',
        tag : ''
      }
      console.log('propsGroupAdd')
      console.log(this.props)
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

  onChange(ev){
      ev.persist()
      console.log(ev)
    let name  = ev.target.name
    console.log(name)
    this.setState({[name] : ev.target.value})
    console.log(this.state)
  }
  onSubmit(ev) {
      console.log('submitted')
    console.log(this.state)
    }



  render () {
    return (
      <React.Fragment>
        <div className='container'>
              <div className="modalHeader modal-header">
                <label htmlFor='modal-select'>Enter Handle</label>
                <input type='textarea' name='handle' id='modal-select' value={this.state.handle} onChange={this.onChange}></input>
                                <label htmlFor='modal-select'>Enter group</label>

                <input onChange={this.onChange} type='textarea' name='tag' value={this.state.tag} id='modal-select'></input>

                <div className="text-right">
                  <button className="btn btn-primary" type="submit" onClick={this.onSubmit}>
                    ADD
                  </button>
                </div>
              </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Modal
