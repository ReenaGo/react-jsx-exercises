let ProfilePic = ({ image1 }) => {
    return (
        <div>
            <img src={image1}/>
        </div>
    )
}

let CommentBody = ({user , bod}) => {
    return (
        <div>
            {user}
            <br/>
            {bod}
        </div>
    )
}

let Comment = ({username , body , image}) => {

    return (
        <div>
            <ProfilePic image1 = {image}/>
            <CommentBody user = {username} bod = {body}/>
        </div>
    )
}


let Comments = () => {
    return (
        <div>
            <Comment  username = "Reena" body = "Hello" image = "https://placedog.net/150?random"/>
        </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))











































// let ProfilePic = ({ image }) => {
//     console.log(image);
//     return (
//       <div>
//         <img src={image} alt="" />
//       </div>
//     );
//   };
  
//   let CommentBody = props => {
//     return (
//       <div>
//         <b>{props.username}</b>
//       </div>
//     );
//   };
  
//   let Comment = props => {
//     return (
//       <div>
//         <ProfilePic image={props.image} />
//         <CommentBody {...props} />
//         <h4>{props.body}</h4>
//       </div>
//     );
//   };
  
//   let Comments = () => {
//     return (
//       <div>
//         <Comment image="https://placedog.net/150?random" username="Alan" body="This is my comment" />
//         <Comment image="https://placedog.net/155?random" username="Reena" body="This is her comment" />
//         <Comment image="https://placedog.net/160?random" username="Samhita" body="This is Samhita's comment" />
//       </div>
//     );
//   };
  
//   ReactDOM.render(<Comments />, document.getElementById("root"));
  