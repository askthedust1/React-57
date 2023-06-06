import React, {useState} from "react";
import { nanoid } from 'nanoid';
import {IUserInfo, IUserMutation} from "../../types";

interface Props {
    onSubmit: (newUserInfo: IUserInfo) => void;
}


const UserForm: React.FC<Props> = ({onSubmit}) => {

    const [userInfo, setUserInfo] = useState<IUserMutation>({
        name: '',
        email: '',
        status: false,
        role: "user"
    });

    const infoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setUserInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: nanoid(),
            ...userInfo,
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>User Form</h4>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={userInfo.name}
                    onChange={infoChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                    name="email"
                    id="email"
                    className="email"
                    value={userInfo.email}
                    onChange={infoChange}
                />
            </div>


            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default UserForm;