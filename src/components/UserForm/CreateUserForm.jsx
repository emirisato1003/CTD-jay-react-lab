import { useState } from "react";

export default function CreateUserForm() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: ''
    });

    // function handleSubmit(event){
    //     return pass
    // }
    function updateFirstName(event) {
        const { value } = event.currentTarget;
        setUserInfo(prevName => ({ ...prevName, firstName: value }));
    }

    function updateLastName(event) {
        const { value } = event.currentTarget;
        setUserInfo(prevName => ({ ...prevName, lastName: value }));
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" onChange={updateFirstName} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={updateLastName} />
            </form>
            <p>First Name: {userInfo.firstName}</p>
            <p>Last Name: {userInfo.lastName}</p>
        </>
    );
}