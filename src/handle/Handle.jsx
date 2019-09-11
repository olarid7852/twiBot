import React, { Component } from 'react'
import HandleModal from './HandleModal'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: []
    };
    this.selectionChanged = this.selectionChanged.bind(this);
    this.addToGroup = this.addToGroup.bind(this)
  }
  addToGroup(docId){
    return new Promise((resolve, reject) => {
      let users = this.state.users
      let selectedMembers = this.state.selectedUser.map(member => {return users[member]})
      let fs = window.firebase.firestore();
      fs.collection("groups").doc(docId).update({
        members: selectedMembers 
      })
      .then(()=> {
        console.log("members added")
        resolve()
      })
      .catch(err => {
        console.log(err)
      })
    })
  }
  selectionChanged(ev, index){
    console.log(ev)
    console.log(index)
    if(ev.target.checked){
      this.state.selectedUser.push(index)
    }
    else{
      let mIndex = this.state.selectedUser.find(member=>{
        return (member === index)
      })
      this.state.selectedUser.pop(mIndex)
    }
  }
  render () {
    return (
      <React.Fragment>
        <div className='main-box'>

          <div className='header-text'>
            <h3>TWITTER BOT</h3>
          </div>
        
          <div className="container">

          <div className="list-group">
            {this.state.users.map((user, index) =>
              <div key={user}>
            <input type="checkbox" name="CheckBoxInputName" value={user} id={user} onChange={(ev) => this.selectionChanged(ev, index)}/>
                <label className="list-group-item" htmlFor={user}>{user}</label>
              </div>
            )}
          </div>
          <div className='button'>
          <HandleModal addToGroup={this.addToGroup}/>
          </div>
          
          </div>
        </div>
      </React.Fragment>
    )
  }

  componentDidMount(){
    let fs = window.firebase.firestore();
    // let followers = []
    let handle = this.props.match.params.handle
    console.log({handle})
    fs.collection("followers")
      .where("handle", "==", handle)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let followers = doc.data()['followers']
            console.log(doc.data())
            this.setState({users: followers.filter(member => {
              return typeof(member) == 'string'
            })})
        });
      });
  }
}

export default Home
