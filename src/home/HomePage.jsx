import genericList from "../common/GenericList"
import genericListItem from "../common/GenericListItem"
import AddHandleModal from "./Modal"
import React from 'react';
// import MyListItem from "../Component/group/MyListItem";


let MyListItem = genericListItem({collectionName: "handles", mainFieldName: "handle", linkName: "/handle/", "scheduledFieldName": "scraped"})
let HomePageList = genericList(MyListItem, AddHandleModal, {collectionName: "handles"})
function HomePage() {
    return (
        <div>
            <HomePageList/>
        </div>
    )
}

export default HomePage;
