import { Link } from "react-router-dom";
import { getTweets } from "../services/tweets";
import { formatDistance} from 'date-fns';
import { FcPortraitMode } from "react-icons/fc";

const { Component } = require("react");

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      error: null,
      message: "",
      newTweetText: '',
    };
  }

  handleChangeNewTweetText(event) {
    this.setState({
      newTweetText: event.target.value
    })
  }

  handleSubmitNewTweet(){
 this.setState({newTweetText: ''})


  }

  async componentDidMount() {
    await this.Tweets();
  }

  async Tweets() {
    try {
      const tweets = await getTweets();
      this.setState({
        tweets: tweets,
      });
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    const { tweets, error } = this.state;
    const elements = tweets.map(({ id, message, name, username,created_at }) => {
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
          <p><Link style={stylesForName} to={"/user/:username"}>{name} </Link><Link to={"/user/:username"}> @{username} </Link> - {dateToRender}</p>
          <p>{message}</p>
          </div>
        </div>
      );
    });

    return (
     <div>
       <div>
       <label>
        write new tweet:
        <textarea rows="3"
         value={this.state.newTweetText}
          onChange={this.handleChangeNewTweetText.bind(this)}
          ></textarea>
      </label>
      <button onClick={this.handleSubmitNewTweet.bind(this)}>submit twitt</button>
      </div>
      {elements}
     </div>
    );
  }
}

export default Feed;

//return <Tweet tweetInfo={tweet}/>
