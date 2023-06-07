import React from 'react';
import User from "./User";
import {IUserInfo} from "../../types";

interface Props {
    items: IUserInfo[];
}

const Users: React.FC<Props> = ({items}) => {

    return (
        <>
            <h4>Users</h4>
            {items.map((item) => (
                <User key={item.id} user={item}/>
            ))}
        </>
    );
};

export default Users;