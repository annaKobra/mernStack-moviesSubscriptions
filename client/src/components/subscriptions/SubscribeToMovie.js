import { useEffect, useState } from "react";
import { Box, Card, Select, CardContent, Button, Typography, MenuItem } from '@material-ui/core';
import MembersService from '../../services/members.service';
import MoviesService from '../../services/movies.service';
import SubscriptionsService from '../../services/subscriptions.service';

const SubscribeToMovie = ({memberId}) => {
    const [movies, setMovies] = useState([]);
    const [memberWatchedMovie, setMemberWatchedMovie] = useState([]);
    const [newSubscribe, setNewSubscribe] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
          const allMovies = await MoviesService.getMovies();
          setMovies(allMovies);

          // movies that member already watched
          const moviesWatched = await SubscriptionsService.getMoviesByMemberId(memberId);
          if (moviesWatched.length > 0) {
            let memberAndMovie = []; 
            moviesWatched.map(async m => {
                memberAndMovie.push(m.movie_id)
                if(memberAndMovie.length===moviesWatched.length)
                {
                    setMemberWatchedMovie(memberAndMovie);
                }
            })
          }
        }
        fetchData();
        setNewSubscribe({...newSubscribe, member_id: memberId});
    }, [])

    let selectMoviesOption = movies.filter(movie=> !memberWatchedMovie.includes(movie._id)).map(m => {
        return <MenuItem key={m._id} value={m._id}>{m.name}</MenuItem>
    })

    const addMovieToSubscribe = (movieId) => {
        setNewSubscribe({...newSubscribe, movie_id: movieId});
        console.log(newSubscribe)
    }
    const addDateToSubscribe = (newDate) => {
        setNewSubscribe({...newSubscribe, date: newDate});
    }

    const subscribeTomovie = async () => {
        await SubscriptionsService.create(newSubscribe);
        window.location.assign('/members');
    }

    return (
         <Box m={1}>
              <Box m={1}>
                  <Box display="flex" flexDirection="column" style={{width: '350px'}}>
                      <Card>
                          <CardContent>
                              <Typography variant="h5" component="h2">Add a new movie</Typography>
                              <Select style={{width: '150px', borderBottom: '1px solid black'}}
                                     onChange={e => addMovieToSubscribe(e.target.value)} >
                                    {selectMoviesOption}      
                             </Select><br /><br/>
                              <input type='date' onChange={e => addDateToSubscribe(e.target.value)} /><br />
                              <Button onClick={subscribeTomovie}>subscribe</Button>
                          </CardContent>
                      </Card>
                  </Box>
              </Box>
        </Box>
    );
}

export default SubscribeToMovie;