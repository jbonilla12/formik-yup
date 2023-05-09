import { Formik } from "formik";

const Login = () => { 
    const onSubmit =async(values)=>{
        console.log(values)
    }
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{email:"", password:""}}
                onSubmit={onSubmit}
                >
                {
                    ({values, handleSubmit, handleChange})=>(
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                placeholder="Ingrese el email"
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                            />
                            <input 
                                type="text"
                                placeholder="Ingrese el email"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    )


                    
                }

            </Formik>
        </div>
    )
 }
 export default Login;