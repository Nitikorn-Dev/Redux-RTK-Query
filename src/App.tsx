import React from 'react';
import './App.css';
import { useContactQuery, useContactsQuery } from './servers/contactsApi';

function App() {
  const {data,error,isLoading,isFetching,isSuccess}  = useContactsQuery();
  console.log(data)
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
    </div>
  );
}

export const ContactDetail = ({id}:{id:string|number})=> {
  const {data} = useContactQuery(id);
  return (
    <pre>{JSON.stringify(data,undefined,2)}</pre>
  )
}

export default App;
