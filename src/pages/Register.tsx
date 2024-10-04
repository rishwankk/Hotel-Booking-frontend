import { useForm } from "react-hook-form"
import { useMutation } from "react-query";
import * as apiClient from "../api.client"

export type RegisterFormData={
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  confirmPassword:string
}
const Register = () => {
  const{register,watch,handleSubmit,formState:{errors} }=useForm<RegisterFormData>();
  const mutation=useMutation(apiClient.Register,{
    onSuccess:()=>{
      console.log("success")
      
    },
    onError:(error:Error)=>{
      console.error(error.message)
      
    }
  })
  const onSubmit=handleSubmit((data)=>{
    mutation.mutate(data)
  })
  return (
   <form  className="flex flex-col gap-5" onSubmit={onSubmit}>
    <h2 className="text-3xl font-bold">Create an Account</h2>
    <div className="flex flex-col md:flex-row gap-5">
      <label className="text-gray-700 text-sm font-bold flex-1">
        First Name
        <input className=" border-gray-300 py-2 px-2 w-full font-normal border rounded-md" {...register("firstName",{required:"This field is required"})} />
        {errors.firstName &&(
          <span className="text-red-500">{errors.firstName.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold">
        Last Name
        <input className=" border-gray-300 py-2 px-2 w-full font-normal border rounded-md" {...register("lastName",{required:"This field is required"})} />
        {errors.lastName &&(
          <span className="text-red-500">{errors.lastName.message}</span>
        )}
      </label>
     
    </div>
    <label className="text-gray-700 text-sm font-bold">
        Email
        <input className="  border-gray-300 py-2 px-2 w-full font-normal border rounded-md " {...register("email",{required:"This field is required",pattern:/^\S+@\S+\.\S+$/})} />
        {errors.email &&(
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold">
        Password
        <input className=" border-gray-300 py-2 px-2 w-full font-normal border rounded-md" type="password" {...register("password",{required:"This field is required",minLength:{
          value:8,
          message:"Password must be at least 8 letter"
        }})} />
        {errors.password &&(
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold">
        Confirm Password
        <input className=" border-gray-300 py-2 px-2 w-full font-normal border rounded-md" type="password" {...register("confirmPassword",{
          validate:(val)=>{if(!val){return "This field is required"}
        else if(watch("password") !==val ){
          return "Password not match"
        }
        }
        })} />
        {errors.confirmPassword &&(
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span>
        <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl rounded-md">Create Account</button>
      </span>
   </form>
  )
}

export default Register