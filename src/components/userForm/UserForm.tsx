import type { JSX } from "react";
import useUserForm from "../../hooks/useUserForm/useUserForm";

function UserForm(): JSX.Element{
    const  {formData,errors,handleChange,submitChange} = useUserForm({
        username: '',
        email: ''
    });

    return(
        <fieldset>
            <legend>User Information</legend>
            <form onSubmit={submitChange}>
                <p><label htmlFor="username">Username:</label>
                    <input 
                    name="username" 
                    id="username" 
                    value={formData.username} 
                    onChange={handleChange}
                    placeholder="Enter username"
                ></input>{errors.username}</p>
                <p><label htmlFor="email">Email:</label>
                    <input 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Enter valid email"
                ></input>{errors.email}</p>
                <button type="submit">Submittear!</button>
            </form>

            <p>{JSON.stringify(formData)}</p>
        </fieldset>
    );
}


export default UserForm;