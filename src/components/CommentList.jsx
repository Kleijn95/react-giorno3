import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.comments.map((commento) => (
        <SingleComment key={commento._id} commento={commento} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
