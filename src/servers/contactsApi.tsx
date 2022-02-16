import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath:'contactsApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3006/'}),
    endpoints:(builder)=>({
        contacts:builder.query<Contact[],void>({
            query:()=> '/contacts'
        }),
        contact:builder.query<Contact,string|number>({
            query:(id)=> `/contacts/${id}`
        })
    })
});

export const {useContactsQuery,useContactQuery} = contactsApi;