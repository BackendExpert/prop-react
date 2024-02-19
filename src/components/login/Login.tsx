import SignupIn from "../../templates/signupIn"
import img from "../../assets/react.svg"

const Login = () => {
  return (
    <div>
        <SignupIn src={img}>
            <h1 className="text-3xl text-red-800 text-center">Login here</h1>
        </SignupIn>
    </div>
  )
}

export default Login