export default function User ({user}){
    return (
        <div className="box">
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
        </div>
    )
}