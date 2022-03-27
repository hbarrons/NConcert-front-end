import { Link } from "react-router-dom"
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-3"> */}
            <div className="card" style={{ width: '18rem'}}>
              <img src="https://i.imgur.com/tVYJuSL.png" alt="avatar" />
              <div className="card-body">
                <h5 className="card-title">{props.profileName}</h5>
                <p className="card-text">Some kind of info about the person</p>
                  <Link to={`/profile/${props.id}`}> link to profile
                </Link>
              </div>
            </div>
          </div>
    //     </div>
    //   </div>
    // </div>
  )
}


export default UserCard