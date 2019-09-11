import genericList from "../common/GenericList"
import genericListItem from "../common/GenericListItem"
import AddHandleModal from "./Modal"
import React from 'react';
// import MyListItem from "../Component/group/MyListItem";


let MyListItem = genericListItem({collectionName: "groups", mainFieldName: "name", linkName: "/group/"})
let HomePageList = genericList(MyListItem, AddHandleModal, {collectionName: "groups"})
function HomePage() {
    return (
        <div>
            <HomePageList/>
        </div>
    )
}

export default HomePage;
