import React, { Component } from 'react'
import './User.css'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidGroupName: false,
      groupExist: true,
      existingGroupName: '',
      newGroupName: '',
      existingGroupId: '',
      groups: [],
      filteredGroups: [],
      selectedGroupName: ""
    }
    this.addNewGroup = this.addNewGroup.bind(this);
    this.addToGroup = this.addToGroup.bind(this)
    this.handleNewGroupNameChange = this.handleNewGroupNameChange.bind(this)
    this.handleExistingGroupNameChange = this.handleExistingGroupNameChange.bind(this)
    this.handleSelectGroup = this.handleSelectGroup.bind(this)
    // this.handleUpdate = this.handleUpdate.bind(this)
  }

  executeAddToGroup(groupName){
    this.props.addToGroup(groupName)
    .then(() => {
      console.log(1)
      window.$('#exampleModal').modal('hide')
    })
    .catch((err) => {console.log(err)})
  }
  addNewGroup(){
    let fs = window.firebase.firestore();
    let $this = this
    fs.collection("groups").add({
      name: this.state.newGroupName,
      members: []
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      $this.executeAddToGroup(docRef.id)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
  addToGroup(){
    let selectedGroupName = this.state.selectedGroupName
    let group = this.state.groups.find(member => {
      return member.name === selectedGroupName
    })
    this.executeAddToGroup(group.id)
  }
  handleExistingGroupNameChange(ev){
    let inputValue = ev.target.value
    console.log(inputValue)
    this.setState({
      filteredGroups: this.state.groups.filter(member => {
        return member.name.indexOf(inputValue) !== -1
      })
    })
  }
  handleSelectGroup(ev){
    this.setState({selectedGroupName: ev.target.value})
  }
  handleNewGroupNameChange(ev){
    this.setState({
      newGroupName: ev.target.value
    })
  }
  componentDidMount(){
    let fs = window.firebase.firestore();
    let groups = []
    let $this = this
    fs.collection("groups").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          groups.push({...doc.data(), id: doc.id})
          console.log(doc.data())
          $this.setState({groups: groups})
          $this.setState({filteredGroups: groups})
      });
    });
  }
  render () {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='userSection'>
            <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Add
            </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modalHeader modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Join Group</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">
                    
                  </span>
                </button>
              </div>
              <div className="modal-body">

              <div class="container-fluid">
                        <div class="md-form pb-3">
                        <div class="form-group">
                                <label for="usr">Add to existing group:</label>
                                <input type="text" class="form-control" onChange={this.handleExistingGroupNameChange}/>
                              </div>
                          <div class="form-group">
                            <select class="form-control" onChange={this.handleSelectGroup}>
                              {this.state.filteredGroups.map((group, index) => 
                                <option key={group.id}>{group.name}</option>
                              )}
                            </select>
                          </div>
                              <br/>
                              { this.state.invalidGroupName?(
                                <div class="alert alert-danger alert alert-dismissable">
                                <strong>Name not found!</strong>The username cannot be found.
                                </div>
                              ):('')
                              }
                                <div class="text-right">
                                    <button class="btn btn-primary" type="button" onClick={this.addToGroup}>
                                        ADD
                                       </button>
                                </div>
                              <br/>
                                  
                        <p class="text-center">OR</p>
                      
                      <div class="form-group">
                          <label for="usr">Enter New Group Name:</label>
                          <input type="text" class="form-control" onChange={this.handleNewGroupNameChange}/>>
                        </div>
                        <br/>
                        {this.state.groupExist ? (
                        <div class="alert alert-danger">
                            <strong>Incorrect Name!</strong>Try another name.
                          </div>
                        ):('')
                        }
                          <div class="text-right">
                              <button class="btn btn-primary" type="button" onClick={this.addNewGroup}>
                                  SAVE
                                 </button>
                          </div>
                      </div>
                      </div>

              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Modal
