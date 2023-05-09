import { useState } from "react";

const Form = ({children}) => { 
    
    const [values, setValues] = useState({text: ""})
    const handleOnChange = e =>{
        const {name, value, checked, type} = e.target
        setValues((prev)=>({
            ...prev,
            [name]:type === "checkbox" ? checked:value,
        }))

    }

    return children({values, handleOnChange})
 }
 export default Form;