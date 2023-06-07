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

        setUserInfo({name: '', email: '',  status: false, role: 'user'});
    };

    const getSelectOption = () => {
        return Object.keys(EType).map((key) => (
            <option key={key} value={EType[key as keyof typeof EType]}>{key}</option>
        ))
    }

    return (
        <form className="row border border-primary rounded border-2 pb-3 me-2" onSubmit={onFormSubmit}>
            <h4 className="bg-primary text-light rounded-top p-1">User Form</h4>

            <div className="form-group">
                <label htmlFor="name" className="mt-2 mb-2 fw-bold">Name:</label>
                <input className="form-control"
                    required
                    type="text"
                    name="name"
                    id="name"
                    value={userInfo.name}
                    onChange={infoChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="mt-2 mb-2 fw-bold">E-mail:</label>
                <input className="form-control"
                    required
                    type="text"
                    name="email"
                    id="email"
                    value={userInfo.email}
                    onChange={infoChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="role" className="mt-2 mb-2 fw-bold">Select role:</label>
                    <select value={userInfo.role}
                            required
                            onChange={infoChange}
                            name="role"
                            id="role"
                            className="form-control">
                        <option value="" disabled defaultValue="">Select role</option>
                        {getSelectOption()}
                    </select>
            </div>

            <div className="row justify-content-between align-items-center mt-4">
                <div className="form-group col-auto">
                    <label htmlFor="status" className="me-2 fw-bold">Active:</label>
                    <input
                        type="checkbox"
                        checked={userInfo.status}
                        name="status"
                        id="status"
                        className="status"
                        onChange={(e) => setUserInfo((prevState) =>
                            ({...prevState, status: e.target.checked}))}
                    />
                    <label htmlFor="status" className="ms-2 fw-bold">Yes</label>
                </div>

                <button type="submit" className="btn btn-primary col-auto">Create</button>
            </div>

        </form>
    );
};

export default UserForm;