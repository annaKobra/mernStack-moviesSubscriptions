import { Box, Card, CardActions, CardContent, Button, Typography, CardActionArea, CardMedia} from '@material-ui/core';
import SubscriptionList from './SubscriptionList';
import { Link } from 'react-router-dom';
import MoviesService from '../../services/movies.service';
import SubscriptionsService from '../../services/subscriptions.service';

const Movie = ({movie}) => {
    const removeMovie = async (id) => {
        await SubscriptionsService.deleteMovieFromSub(id);
        await MoviesService.deleteMovie(id);
        window.location.reload('/movies');
    }

    return(
    <Box m={1}>
        <Box display="flex">
            <Box display="flex" flexDirection="column">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">{movie.name}, {movie.premiered.slice(-4)}</Typography>
                        <Typography color="textSecondary" gutterBottom>{movie.genres.join(' • ')}</Typography>
                        <CardActionArea style={{width: 300}}><CardMedia component="img" image={movie.image} alt={movie.name}/></CardActionArea>
                        <Typography variant="body2" align="center" style={{padding: '4px', width: '300px'}}>{movie.plot}</Typography>
                    </CardContent>
                <CardActions>
                    <Link to={`/movies/edit/${movie._id}`}><Button size="small">edit</Button></Link>
                    <Link to="/movies"><Button size="small" onClick={() => removeMovie(movie._id)}>delete</Button></Link>
                </CardActions>
                </Card>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" style={{margin: 'auto'}}>
                <SubscriptionList movieId={movie._id} />
            </Box>
        </Box>
    </Box>
    );
}

export default Movie;
