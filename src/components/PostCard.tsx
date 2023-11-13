import { Card, CardContent, Typography } from "@mui/material";
import { PostCard as PostCardType} from "../interfaces/post.interface";


const PostCard: React.FC<PostCardType> = ({ title, body }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
