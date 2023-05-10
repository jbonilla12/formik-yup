import { Formik } from "formik";
import * as Yup from "yup"
const Login = () => { 
    const onSubmit =async({email,password})=>{
        console.log(email, password)
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("email no valido").required("Email requerido"),
        password: Yup.string().trim().min(6, "Minimo 6 caracteres").required("Password requerido")

    })
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{email:"", password:""}}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                {
                    ({values, handleSubmit, handleChange, errors, touched, handleBlur})=>(
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                placeholder="Ingrese el email"
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                onBlur={handleBlur}
                            />
                            { errors.email && touched.email && errors.email }
                            <input 
                                type="text"
                                placeholder="Ingrese el email"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password && errors.password}
                            <button type="submit">Enviar</button>
                        </form>
                    )


                    
                }

            </Formik>
        </div>
    )
 }
 export default Login;