import AuthForm from "./AuthForm";

export default function AuthDialog({ handleAuthenticate, authError, isAuthenticating, setIsAuthDialogOpen }) {
    // console.log(isAuthenticating);
    return (
        <AuthForm
            handleAuthenticate={handleAuthenticate}
            authError={authError}
            setIsAuthDialogOpen={setIsAuthDialogOpen}
        />
    );
}