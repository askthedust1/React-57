import React from 'react';
import User from "./User";
import {IUserInfo} from "../../types";

interface Props {
    items: IUserInfo[];
}

const Users: React.FC<Props> = ({items}) => {

    return (
        <div className="row text-center">
            <h4 className="bg-primary text-light rounded-top p-1">Users</h4>
            {items.map((item) => (
                <User key={item.id} user={item}/>
            ))}
        </div>
    );
};

export default Users;