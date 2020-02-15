import genericList from "../common/GenericList"
import genericListItem from "../common/GenericListItem"
import AddAccountModal from "./Modal"
import Scheduler from "../Component/Scheduler";
import React from 'react';
// import MyListItem from "../Component/group/MyListItem";


let MyListItem = genericListItem({collectionName: "accounts", mainFieldName: "username", linkName: "/account/",  scheduledFieldName: "scraped"})
let HomePageList = genericList(MyListItem, AddAccountModal, {collectionName: "accounts"},'',{modalName : 'Add Twitter account'})
function HomePage() {
    return (
        <div>
            <HomePageList/>
        </div>
    )
}

export default HomePage;
