import React, {useState} from "react";
import { nanoid } from 'nanoid';
import {IUserInfo, IUserMutation} from "../../types";

interface Props {
    onSubmit: (newUserInfo: IUserInfo) => void;
}

enum EType {
    User = 'user',
    Editor = 'editor',
    Administrator = 'administrator'
}

const UserForm: React.FC<Props> = ({onSubmit}) => {

    const [userInfo, setUserInfo] = useState<IUserMutation>({
        name: '',
        email: '',
        status: false,
        role: 'user'
    });

    const infoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    const getSelectOption = () => {
        return Object.keys(EType).map((key) => (
            <option key={key} value={EType[key as keyof typeof EType]}>{key}</option>
        ))
    }

    return (
        <form className="row gy-2 gx-3" onSubmit={onFormSubmit}>
            <h4>User Form</h4>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    value={userInfo.name}
                    onChange={infoChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    value={userInfo.email}
                    onChange={infoChange}
                />
            </div>

            <div className="form-group col-auto">
                <label htmlFor="status">Active user:</label>
                <input
                    type="checkbox"
                    checked={userInfo.status}
                    name="status"
                    id="status"
                    className="status"
                    onChange={(e) => setUserInfo((prevState) =>
                        ({...prevState, status: e.target.checked}))}
                />
                <label htmlFor="status">Yes</label>
            </div>

            <div className="form-group col-auto">
                    <select value={userInfo.role}
                            onChange={infoChange}
                            name="role"
                            id="role"
                            className="role">
                        <option value="" disabled defaultValue="">Select role:</option>
                        {getSelectOption()}
                    </select>
            </div>


            <button type="submit" className="btn btn-primary col-auto">Create</button>
        </form>
    );
};

export default UserForm;