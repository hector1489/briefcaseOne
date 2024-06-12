import { Login, NavBar, Signup } from "../../components"


const LoginPage = () => {

  return (
    <>
      <NavBar />
      <div className="LoginPage d-flex flex-row justify-content-center">
        <Login />
        <Signup />
      </div>
    </>
  )
}


export default LoginPage
