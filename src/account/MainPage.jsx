import genericList from "../common/GenericList"
import genericListItem from "../common/GenericListItem"
import AddAccountModal from "./Modal"
import React from 'react';
// import MyListItem from "../Component/group/MyListItem";


let MyListItem = genericListItem({collectionName: "accounts", mainFieldName: "username", linkName: "/account/"})
let HomePageList = genericList(MyListItem, AddAccountModal, {collectionName: "accounts"})
function HomePage() {
    return (
        <div>
            <HomePageList/>
        </div>
    )
}

export default HomePage;
