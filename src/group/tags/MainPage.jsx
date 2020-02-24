import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      tag: this.props.match.params.tagName,
      followers: []
    };
    console.log("hahPropsMainPage");
    console.log(this.state);
    console.log(this.props);
  }

  render() {
    const { followers } = this.state;
    return (
      <React.Fragment>
        <div className="main-box">
          <div className="container">
            <div className="list-group">
              {this.state.followers.length
                ? this.state.followers.map((user, index) => (
                    <div key={user}>
                      <input
                        type="checkbox"
                        name="CheckBoxInputName"
                        value={user}
                        id={user}
                        onChange={ev => this.selectionChanged(ev, index)}
                      />
                      <label className="list-group-item" htmlFor={user}>
                        {user}
                      </label>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    let fs = window.firebase.firestore();
    let tag = this.state.tag;
    let handlesList = [];
    let handles = await fs
      .collection("handles")
      .where("tag", "==", tag)
      .get()
      .then(qs => {
        qs.forEach(doc => {
          handlesList.push(doc.data().handle);
        });
      });
    let followersPromise = await fs
      .collection("followers")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = doc.data();
          if (handlesList.includes(data.handle)) {
            this.setState({ followers: data.followers.slice(0, 100) });
          }
        });
      });
  }
}

export default Home;
