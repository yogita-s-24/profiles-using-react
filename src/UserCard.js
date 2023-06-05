import "./UserCard.css"

function UserCard({name, email, imageURL}){
    return(
        <div className="usercard-card">
            <img className="img-heading" src={imageURL} alt="image" />     
            <h2 className="name-header">{name}</h2>
            <p className="email-header">{email}</p>  
        </div>
    )
}
export default UserCard;