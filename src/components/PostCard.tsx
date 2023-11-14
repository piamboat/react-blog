import { Card, CardContent, Typography } from "@mui/material";
import { PostCardInterface } from "../interfaces/post.interface";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const PostCard: React.FC<PostCardInterface> = ({ postObj, handleDeletePost }) => {
  return (
    <Card className="card-container" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postObj.title}
          <DeleteOutlinedIcon className="delete-button" onClick={() => handleDeletePost(postObj.id)}/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postObj.body}
        </Typography>
      </CardContent>
      <CardContent>
      <Typography sx={{ fontSize: 10 }} color="text.primary" gutterBottom>
          {`Post by: ${postObj.user.username}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
