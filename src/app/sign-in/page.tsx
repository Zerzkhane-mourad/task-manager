import { SignIn } from "@clerk/nextjs";

const SignInPage = ({ searchParams }: any) => {

    const { redirectUrl } = searchParams

    return (

        <div className="flex items-center justify-center h-screen" >
            <SignIn  redirectUrl = {redirectUrl || "/dashboard"} />
        </div>
    )

}

export default SignInPage;