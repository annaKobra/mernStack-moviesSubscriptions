import {useState, useEffect} from 'react';
import SubscriptionsService from '../../services/subscriptions.service';
import MoviesService from '../../services/movies.service';
import { Card, Typography, Button } from '@material-ui/core';
import SubscribeToMovie from './SubscribeToMovie';


const MoviesWatched = ({memberId}) => {
    const [movies, setMovies] = useState([]);
    const [subscribe, setSubscribe] = useState(false);

    const formatDate = (registrationDate) => {
        const date = new Date(registrationDate);
        return date.toDateString(); 
    }

    useEffect(() => {
        const fetchData = async () => {
            // list of movies that watched by member
            const subscriptions = await SubscriptionsService.getMoviesByMemberId(memberId);

            if(subscriptions.length > 0) {
                const moviesForMember = [];
                subscriptions.map(async s => {
                    const movie = await MoviesService.getMovie(s.movie_id);
                    moviesForMember.push({...s, name: movie.name})
                    if(moviesForMember.length === subscriptions.length)
                    setMovies(moviesForMember);
                })

            }
        }
        fetchData();
    }, [])

    const handleClick = () => {
        if(!subscribe)
            setSubscribe(true);
        else
        setSubscribe(false);
    }

    return (
        <Card style={{padding: '15px'}}>
            <Typography variant='h6'>Movies watched</Typography>
            <Button variant="contained" color="secondary" onClick={handleClick}>Subscribe to a new movie</Button>
            {subscribe ? <SubscribeToMovie memberId={memberId} /> : ''}
            <ul>
                {movies.map(movie => 
                    <li key={movie._id}>{movie.name}, {formatDate(movie.date)}</li>) }
            </ul>
        </Card>
    );
}
export default MoviesWatched;