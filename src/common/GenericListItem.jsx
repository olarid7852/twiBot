import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { deleteDocument } from "../utils/firestore";

function genericListItem(pageData) {
  return class MyListItem extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      console.log(this.props);
    }

    handleDelete = async () => {
      await deleteDocument(pageData.collectionName, this.props.document.id);
      this.props.updateHandles();
    };
    handleUpdate() {}

    render() {
      let handle = this.props.document;
      let mainFieldName = pageData.mainFieldName;
      let scheduledFieldName = pageData.scheduledFieldName;
      let linkName = pageData.linkName;
      let progressClass = ["warning", "success", "success", "danger"];
      let progressIcons = [
        "stopwatch_off",
        "clock_outline",
        "checkbox-marked-circle-outline",
        "close-circle"
      ];
      let renderEditButton =
        linkName !== "/show/" && linkName!== "/tag/"? (
          <button className="btn">
            <i className="material-icons" onClick={this.handleUpdate}>
              {" "}
              edit{" "}
            </i>
          </button>
        ) : (
          ""
        );
      return (
        <li
          className={"list-group-item  list-group-item-action  d-flex handle"}
          key={handle.id}
        >
          <Link
            to={linkName + handle[mainFieldName]}
            className="my-flex-auto d-flex flex-row"
          >
            <span className="my-flex-auto"> {handle[mainFieldName]} </span>
            <span className="badge">
              <i
                className={`material-icons ${
                  progressClass[handle[scheduledFieldName]]
                    ? "text-success"
                    : "text-warning"
                }`}
              >
                {progressIcons[handle[scheduledFieldName]]}
              </i>
            </span>
          </Link>
          <button className="btn">
            <i className="material-icons" onClick={this.handleDelete}>
              {" "}
              delete{" "}
            </i>
          </button>
          {renderEditButton}
        </li>
      );
    }
  };
}

export default genericListItem;
