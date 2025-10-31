import type { JSX } from "react";
import useUserForm from "../../hooks/useUserForm/useUserForm";
import Form from 'react-bootstrap/Form';
import { Button, Container } from "react-bootstrap";

function UserForm(): JSX.Element{
    const  {formData,errors,handleChange,submitChange} = useUserForm({
        username: '',
        email: ''
    });
    
    return(
        <>
        <Container className="my-4">
        <fieldset>
            <legend>User Information</legend>
            <Form onSubmit={submitChange}>
                <Form.Group><Form.Label htmlFor="username">Username:</Form.Label>
                    <Form.Control
                    type="text"
                    name="username" 
                    id="username" 
                    value={formData.username} 
                    onChange={handleChange}
                    placeholder="Enter username"/>{errors.username}
                    </Form.Group>

                <Form.Group><Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                    type="text" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Enter valid email"/>{errors.email}
                </Form.Group>
                <Form.Group>  
                    <Button type="submit">Submittear!</Button>
                </Form.Group>
            </Form>

            <p>{JSON.stringify(formData)}</p>
        </fieldset>
        </Container>
        </>
    );
}


export default UserForm;