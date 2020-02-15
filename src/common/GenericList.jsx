import React, { Component } from "react";
import { getDocumentList } from "../utils/firestore";
import { getDocumentListWithQuery } from "../utils/firestore";

// let collectionName = "groups"
// let mainFieldName = "name"
// let scheduledFieldName = "scheduled"
// let title = "Groups"
function genericList(
  ListComponent,
  AddComponent,
  pageData,
  addionalAddDialogProp,
  extra = {}
) {
  return class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        documents: [],
        newDataSubmitStatus: 1
      };
    }
    render() {
      let { renderButton } = this.props.renderButton || true;
      let { pageName,modalName,renderAddButton } = extra;
      console.log(extra);
      let modalTitle = modalName ? modalName : ''
      renderAddButton = renderAddButton === undefined ? true : false
      let addButton = renderAddButton ? (pageName == "handlesPage" ? (
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Twitter Handle
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add
        </button>
      )) : '';

      return (
        <div>
          <div className={"list-group"}>
            {this.state.documents.map((document, index) => (
              <ListComponent
                document={document}
                updateHandles={this.updateHandles}
              />
            ))}
          </div>
          <div className="button">
            <div className="container">
              <div className="userSection">
                <div className="d-flex justify-content-center">
                  {addButton}

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modalHeader modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                           {modalTitle}
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <AddComponent
                            onComplete={this.onComplete}
                            additionalProps={this.props.dialogData}
                            submitted={this.state.newDataSubmitStatus}
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.handleSubmit}
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                          >
                            Cancel
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
      );
    }

    closeModal = () => {
      console.log("closed");
    };

    handleSubmit = ev => {
      ev.persist();
      console.log(this.state);
      console.log(100);
      this.setState({
        newDataSubmitStatus: this.state.newDataSubmitStatus + 1
      });
    };

    onComplete = async () => {
      console.log(1000);
      await this.updateHandles();
      this.closeModal();
    };

    updateHandles = async () => {
      let documents = [];
      if (pageData.filterFunction) {
        let computedFilterFunction = pageData.filterFunction(this.props);
        documents = await getDocumentListWithQuery(
          pageData.collectionName,
          computedFilterFunction
        );
      } else {
        documents = await getDocumentList(pageData.collectionName);
      }
      this.setState({ documents: documents });
      if (documents.length > 0) {
        this.setState({ group: documents[0] });
      }
      return true;
    };

    componentWillUpdate() {
      if (this.props.shouldUpdate) {
        this.updateHandles();
      }
    }
    componentDidMount() {
      this.updateHandles();
    }
  };
}

export default genericList;
