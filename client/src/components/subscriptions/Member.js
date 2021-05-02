import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MembersService from '../../services/members.service';
import MoviesWatched from './MoviesWatched';
import SubscriptionsService from '../../services/subscriptions.service';

const Member = ({member}) => {

    const removeMember = async () => {
        await SubscriptionsService.deleteMemberFromSub(member._id);
        await MembersService.deleteMember(member._id);
        window.location.reload('/members');
    }

    return (
        <Box m={1}>
        <Box display="flex">
            <Box display="flex" flexDirection="column" style={{width: '350px'}}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">{member.name}</Typography>
                        <Typography color="textSecondary" gutterBottom>Email: {member.email}</Typography>
                        <Typography color="textSecondary" gutterBottom>City: {member.city}</Typography>
                    </CardContent>
                <CardActions>
                    <Link to={`/members/edit/${member._id}`}><Button size="small">edit</Button></Link>
                    <Link to="/members"><Button size="small" onClick={removeMember}>delete</Button></Link>
                </CardActions>
                </Card>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" style={{margin: 'auto'}}>
                <MoviesWatched memberId={member._id} />
            </Box>
            </Box>
        </Box>
    )
}
export default Member;