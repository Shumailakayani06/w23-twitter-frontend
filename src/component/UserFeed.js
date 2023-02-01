import { formatDistance} from 'date-fns';
import { getTweetsByUsername } from '../services/tweets';
import { Link } from 'react-router-dom';
import { FcPortraitMode } from "react-icons/fc";

const { Component } = require("react");

class UserFeed extends Component {
  constructor(props){
    super(props);

    this.state = {
        tweets: [],
        error: null,
    }
  }

  async componentDidMount(){
    await this.Tweets();
  }

  async Tweets(){
    const {username} = this.props.match.params;

    try{
        const tweets = await getTweetsByUsername(username);
        this.setState({
            tweets: tweets,
        })
    }catch(error){
     this.setState({error});
    }
  }
  render() {
    const { username } = this.props.match.params;
    
    const {tweets, error} = this.state;
    
    const elements = tweets.map(({
        id,
        message,
        name,
        username,
        created_at,
       
    }) =>{
      
      const dateToRender = formatDistance
      (new Date(created_at), new Date(), { addSuffix: true })

        const stylesForName = {
          fontSize: "20px",
          fontWeight: "bold",
          textDecoration:"none",
          color: "grey"
        }
        return (
          <div key={id}  className="feed-card">
          <div><FcPortraitMode className="profile-icon"/></div>
          <div>
          <p><Link style={stylesForName} to={"/user/${username}"}>{name} </Link><Link to={"/user/${username}"}> @{username} </Link> - {dateToRender}</p>
          <p>Message : {message}</p>
          </div>
        </div>
          );
    })


    return(
        <div>
        <div>User Feed for @{username}</div>
        <div>{elements}</div>
        </div>
    )
    
  }
}

export default UserFeed;