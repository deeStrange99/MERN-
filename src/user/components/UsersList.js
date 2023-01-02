import React from "react";


import Card from "../../shared/components/UIElements/Card";
import UsersItem from "./UserItem";

import './UsersList.css';

const UsersList = props => {
    if (props.items.length === 0) {
        return <div className="center">
            <Card>
                 <h2>No users found.</h2>
            </Card>
           
        </div>
    }

    return <ul className="users-list"> 
    {/* that props.items is being returned in the User */}
        {props.items.map(user =>//2. lets pass in the items props to the users PAGE
            <UsersItem //NOTE THAT THIS ACTS AS THE CHIEF PROPS CONTROL

            //note: starting from here tkey and id are just some that you use when dealing with maps and props
                key={user.id}
                id={user.id}
                //note: image name placeCount is the data that we can edit and being received from the user.
                image={user.image}
                name={user.name}
                // surname={user.surname}
                placeCount={user.places} /> //3. receives a bunch of data from the user item which will be an array
        )}
    </ul>
};

export default UsersList;

//4. basically in this code we have created a list of the items we are going th use in the UserItem which will be an array 