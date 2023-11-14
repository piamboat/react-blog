import { Card, CardContent, Typography } from "@mui/material";
import { UserCardInterface } from "../interfaces/user.interface";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const UserCard: React.FC<UserCardInterface> = ({ userObj }) => {
  return (
    <Card className="card-container" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${userObj.name}`}
          <DeleteOutlinedIcon className="delete-button"/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Username: ${userObj.username}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Email: ${userObj.email}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Phone: ${userObj.phone}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Website: ${userObj.website}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Address: ${userObj.address?.street} ${userObj.address?.suite} ${userObj.address?.city} ${userObj.address?.zipcode} ${userObj.address?.geo.lat} ${userObj.address?.geo.lng}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Company: ${userObj.company?.name} ,catchPhrase: ${userObj.company?.catchPhrase}, bs: ${userObj.company?.bs}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
