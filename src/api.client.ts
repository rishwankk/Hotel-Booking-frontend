
import { RegisterFormData } from "./pages/Register"
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;


export const Register=async (formData:RegisterFormData)=>{
const response=await fetch(`${API_BASE_URL}/api/users/register`,{
    method:"POST",
    credentials:"include",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(formData)

});

if(!response.ok){
    throw new Error(`Register failed with status ${response.status}`);
}
const result= await response.json()
console.log(result);


}
   
export const validateToken=async()=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
        method:"GET",
        credentials:"include"
    })
    if(!response.ok){
        throw new Error(`Token validation failed with status ${response.status}`);
    }
    return  response.json()
}

