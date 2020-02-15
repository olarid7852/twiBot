import genericList from "../common/GenericList";
import genericListItem from "../common/GenericListItem";
import AddHandleModal from "./Modal";
import React from "react";
// import MyListItem from "../Component/group/MyListItem";

let MyListItem = genericListItem({
  collectionName: "handles",
  mainFieldName: "handle",
  linkName: "/show/",
  scheduledFieldName: "scraped"
});
let HomePageList = genericList(
  MyListItem,
  AddHandleModal,
  { collectionName: "handles" },
  "",
  { pageName: "handlesPage", modalName : 'Add Twitter Handle' }
);
function HomePage() {
  return (
    <div>
      <HomePageList />
    </div>
  );
}

export default HomePage;
