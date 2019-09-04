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
async function getDocumentListWithQuery(collectionName, query){
    let querySnapshot = await fs.collection(collectionName).get(query)
    return querySnapshot
}
async function updateDocument(collectionName, docId, update){}
async function appendDocumentListField(collectionName, docId, fieldName, values){}
async function deleteDocument(collectionName, docId){
    console.log('deleted')
    return await fs.collection(collectionName).doc(docId).delete()
}
async function addDocument(collection, newDoc){}

export {
    getDocumentList,
    getDocumentListWithQuery,
    updateDocument,
    appendDocumentListField,
    deleteDocument,
    addDocument
}