import { Card, CardContent, Typography } from "@mui/material";
import { UserInterface } from "../interfaces/user.interface";

const UserCard: React.FC<UserInterface> = ({ name, email, phone, address, company }) => {
  return (
    <Card className="card-container" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Email: ${email}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Phone: ${phone}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Address: ${address?.street} ${address?.suite} ${address?.city} ${address?.zipcode}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Company: ${company?.name} ,catchPhrase: ${company?.catchPhrase}, bs: ${company?.bs}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
