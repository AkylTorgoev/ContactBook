import { useState } from 'react';
import AddContact from './Components/AddContact/AddContact';
import ContactsList from './Components/ContactsList/ContactsList';
import EditContacts from './Components/EditContacts/EditContacts';


function App() {
  let [contacts, setContacts] = useState([])
  let [editContact, setEditContact] = useState({})
  let [isEdit, setIsEdit] = useState(false)

function handleNewContact(newContact){
  let newContactsArray = [...contacts];
  newContactsArray.push(newContact)

  setContacts(newContactsArray)
}

function handleDeleteContact(id){
  let newContactsArray = contacts.filter(item =>{
    return item.id !==id
  })
setContacts(newContactsArray)
}

function HandleEditIndex(index){
  setIsEdit(true)
  setEditContact(contacts[index])
  }

  function handleSaveEditedContact(newContact){
    let newContactsArray = contacts.map(item =>{
      if(item.id === newContact.id){
        return newContact
      }
      return item
    })

    setContacts(newContactsArray)
    setIsEdit(false)
  }

  return (
    <>
     <AddContact 
     handleNewContact={handleNewContact}
     />
    {isEdit ? <EditContacts
    editContact={editContact}
    handleSaveEditedContact={handleSaveEditedContact}
    />: null}

    <ContactsList 
    contacts={contacts}
    handleDeleteContact={handleDeleteContact}
    HandleEditIndex={HandleEditIndex}
    />

    </>
  );
}

export default App;
