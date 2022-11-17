import UserContext from "./UserContext"

const UserProvider = ({children}) => {
    return ( 
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider