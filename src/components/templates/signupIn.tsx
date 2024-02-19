import { ReactNode } from "react"

interface Props{
    children: ReactNode;
    src: string;
}

const signupIn = ({children, src}: Props) => {
  return (
    <div className="container mx-auto px-32 py-20">
        <img src={src} alt="" /><br /><br />
        <div className="text-2xl"></div>
    </div>
  )
}

export default signupIn