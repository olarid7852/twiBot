import { resolve } from "q";

let fs = window.firebase.firestore();

async function getDocumentList(collectionName){
    let documents = []
    let querySnapshot = await fs.collection(collectionName).get()
    querySnapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
        console.log(documents)
    });
    return documents
}
async function getDocumentListWithQuery(collectionName, queryFunction){
    try{
        let documents = []
        console.log("start")
        let docRef = fs.collection(collectionName)
        console.log({docRef})
        console.log({queryFunction})
        let temp = queryFunction(docRef)
        console.log({temp})
        let querySnapshot = await temp.get()
        console.log({querySnapshot})
        querySnapshot.forEach((doc) => {
            documents.push({...doc.data(), id: doc.id})
            console.log(documents)
        });
        console.log({a:"end", documents})
        return documents
    }
    catch(err){
        console.error(err)
        return []
    }
}
async function updateDocument(collectionName, docId, update){}
async function appendDocumentListField(collectionName, docId, fieldName, values){}
async function deleteDocument(collectionName, docId){
    console.log('deleted')
    return await fs.collection(collectionName).doc(docId).delete()
}
async function addDocument(collection, newDoc){
    return await fs.collection(collection).add(newDoc)    
}
async function getDocument(collectionName, docId){

}

export {
    getDocumentList,
    getDocumentListWithQuery,
    updateDocument,
    appendDocumentListField,
    deleteDocument,
    addDocument,
    fs
}