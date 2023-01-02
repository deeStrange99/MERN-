import React from 'react';

//this is a stateful component that will be able to fetch data 

import UsersList from '../components/UsersList';


const Users = () => {
  //this is where we can edit our data 
  const USERS  = [
    {
    id: "ul",
    name: "Dumisani",
    image: "https://www.gstatic.com/webp/gallery/4.sm.jpg",
    places: 3,
    // surname: "Muzungu"

  }
]

  return <UsersList items={USERS}/>; //then we are rendering the UserList component to pages which will display on the browser.
};  //items is just a name used for the redering of data that is being returned from the UserList

export default Users;
