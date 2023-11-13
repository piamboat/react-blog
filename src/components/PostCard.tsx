import { Card, CardContent, Typography } from "@mui/material";
import { PostInterface } from "../interfaces/post.interface";


const PostCard: React.FC<PostInterface> = ({ title, body, user }) => {
  return (
    <Card className="card-container" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardContent>
      <Typography sx={{ fontSize: 10 }} color="text.primary" gutterBottom>
          {`Post by: ${user.username}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
