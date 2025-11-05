import { useState } from "react";
import type {UserFormData} from "../../types/user";
import type { UseUserFormReturn } from "./type";
import { validate_email, validate_username } from "../../utils/formValidation/formValidation";


function useUserForm(initialState: Omit<UserFormData,'id'>): UseUserFormReturn {
    const [formData,setFormData] = useState<Omit<UserFormData,'id'>>(initialState);
    const [errors,setErrors] = useState<Record<string,string>>({});


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormData(prev => ({...prev,[name]: value}));
    };

    const validateForm = () => {
        const newErrors: Record<string,string> = {};
        const nameError = validate_username(formData.username);
        const emailError = validate_email(formData.email);
        
        if(nameError){
            newErrors.username = nameError;
        }
        if(emailError){
            newErrors.email = emailError;
        }
        
        return newErrors;
    };

    const submitChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();//prevents "update/refresh current web page"
        const validationErrors = validateForm();
        
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }
        
        setErrors({});

        console.log(JSON.stringify(formData));
    };

    return {formData,errors, handleChange,submitChange}
}

export default useUserForm;
