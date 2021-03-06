import React, { Component, useEffect } from "react";
import Modal from "./Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";
import "./User.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handles: []
    };
    console.log("hahahahah");
    this.updateHandles = this.updateHandles.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="main-box">
          <div className="header-text">
            <h3>TWITTER BOT</h3>
          </div>

          <div className="container">
            <div className={"list-group"}>
              {this.state.handles.map((handle, index) => (
                <li
                  key={index}
                  className={
                    "list-group-item  list-group-item-action  d-flex handle"
                  }
                >
                  <Link
                    to={"/handle/" + handle.handle}
                    class="my-flex-auto d-flex flex-row"
                    disabled
                  >
                    {handle.editing ? (
                      <input type="text" />
                    ) : (
                      <span className="my-flex-auto"> {handle.handle} </span>
                    )}
                    <span className="badge">
                      <i
                        className={`material-icons ${
                          handle.scraped ? "text-success" : "text-warning"
                        }`}
                      >
                        {handle.scraped ? "check_circle" : "schedule"}
                      </i>
                    </span>
                  </Link>
                  <button className="btn">
                    <i
                      className="material-icons"
                      onClick={() => this.handleDelete(handle)}
                    >
                      {" "}
                      delete{" "}
                    </i>
                  </button>
                </li>
              ))}
            </div>
            <div className="button">
              <Modal onComplete={this.updateHandles} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  updateHandles() {
    let fs = window.firebase.firestore();
    let handles = [];
    let $this = this;
    fs.collection("handles")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          handles.push({ id: doc.id, ...doc.data() });
          console.log(doc.data());
          $this.setState({ handles: handles });
        });
      });
  }

  handleDelete(handles) {
    let $this = this;
    let fs = window.firebase.firestore();
    fs.collection("handles")
      .doc(handles.id)
      .delete()
      .then(function() {
        $this.updateHandles();
        console.log("deleted and updated");
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  handleUpdate(handle) {
    this.setState({
      handles: this.state.handles.map(member => {
        if (member.id === handle.id) {
          member.editing = true;
        }
        return member;
      })
    });
    handle.editing = true;
  }
  componentWillMount() {
    this.updateHandles();
  }
}

export default Home;
