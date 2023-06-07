import React from "react";
import {IUserInfo} from "../../types";

interface Props {
    user: IUserInfo;
}

const User: React.FC<Props> = ({user}) => {

    let status = 'inactive user'

    if (user.status) {
        status = 'active user'
    }

    return (
            <div className="card mb-3 border border-primary border-2">
                <div className="card-body">
                    <p>Name: {user.name}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Status: {status}</p>
                    <p>Role: {user.role}</p>
                </div>
            </div>
    );
};

export default User;