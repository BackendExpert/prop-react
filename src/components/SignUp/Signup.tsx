import SignupIn from "../../templates/signupIn"
import img from "../../assets/react.svg"

const Signup = () => {
  return (
    <div className="container mx-auto px-32 py-20">
        <SignupIn src={img}>
            <h1 className="">Welcome to site</h1>
        </SignupIn>
    </div>
  )
}

export default Signup