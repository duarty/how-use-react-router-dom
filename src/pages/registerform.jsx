import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useParams, useNavigate} from 'react-router-dom'
import './registerform.css'

const Register = () => {

 //const [user, setUser] = useState([])

 const navigate = useNavigate()

 const formSchema = yup.object().shape({
   name: yup.string().required("Nome obrigatório").matches(/^[ a-zA-Z á]*$/, "Nome deve conter apenas letras"),
   email: yup.string().required("Email obrigatório").email("email inválido"),
   password: yup.string().required("informe uma senha").matches(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()__+.]){1,}).{8,}$/, "A senha deve ter 8 dígitos"),
   password_confirm: yup.string().required("confirme sua senha").matches(/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()__+.]){1,}).{8,}$/, "A senha deve ter 8 dígitos")
   .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
   
 })

 const {register, handleSubmit, formState:{ errors }} = useForm({
   resolver: yupResolver(formSchema)
 })

 const onSubmit = (data) => {
   if (data){
      return navigate(`/home${data.name}`) 
   }
 }

 
  return (
    <form className='form__container' onSubmit={handleSubmit(onSubmit)}>
    <h1>Cadastro</h1>
    

    <input placeholder='Nome completo'{...register("name")}></input>
    <p className="errors__message">{errors.name?.message}</p>

    <input placeholder='Email' {...register("email")}></input>
    <p className="errors__message">{errors.email?.message}</p>

    
      <input type="password" placeholder='Senha' {...register("password")}></input>
      <p className="errors__message">{errors.password?.message}</p>

      <input type="password" placeholder='Confirme sua senha' {...register("password_confirm")}></input>
      <p className="errors__message">{errors.password_confirm?.message}</p>

      <button type="submit">Enviar</button>
      
   
    
  </form>
  )
}

export default Register