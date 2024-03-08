import { useEffect, useState } from "react"
import User from "./User"

export default function Users() {
    //  1.declare useState to hold the data
    const [users, setUsers] = useState([])

    // 2.useEffect with callback and dependency array
    useEffect(() => {
        // 3.use fetch() to load data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            // 4.set loaded data
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}
<div></div>
/* 
    1.declare useState to hold the data
    2.useEffect with callback and dependency array
    3.use fetch to load data
    4.set loaded data
    5.display data
*/