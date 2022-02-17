import React from 'react';
import './App.css';
import { useContactQuery, useContactsQuery, useDeleteContactMutation, useUpdateContactMutation,useAddContactMutation } from './servers/contactsApi';

function App() {
  const {data,error,isLoading,isFetching,isSuccess}  = useContactsQuery();

  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {
        isSuccess &&
        (
          <div>
            {
               data?.map(contact=>{
                return <div className='data' key={contact.id}>
                  <span>{contact.name}</span>
                  <ContactDetail id={contact.id} />
                </div>
              })
            }
          </div>
        )
       
      }
      <AddContact />
    </div>
  );
}

export const ContactDetail = ({id}:{id:string})=> {
  const {data} = useContactQuery(id);
  return (
    <pre>{JSON.stringify(data,undefined,2)}</pre>
  )
};

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const contact = {
    "id":'4',
    "name":'Maximum',
    "email":'max@gmail.com'
  }  
  const contactUpdate = {
    "id":'4',
    "name":'Maximum Update',
    "email":'max@gmail.com'
  }

  const addHanddle = async ()=> {
    await addContact(contact);
  } 
   const updateHanddle = async ()=> {
    await updateContact(contactUpdate);
  }  
  const deleteHanddle = async ()=> {
    await deleteContact(contact.id);
  }
  return (
    <>
    <button onClick={addHanddle}>Add</button>
    <button onClick={updateHanddle}>Update</button>
    <button onClick={deleteHanddle}>Delete</button>
    </>
  )

}

export default App;
