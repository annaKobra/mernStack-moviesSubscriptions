import {Box, TextField, Button} from '@material-ui/core';
import {useState} from 'react';
import MoviesService from '../../services/movies.service';

const AddMoviePage = () => {
    const [movie, setMovie] = useState({name:'', premiered: '', genres: [], image: ''});

    const addNewMovie = async () => {
       await MoviesService.addMovie(movie);
       window.location.reload();
    }

    return (
        <Box display="flex" flexDirection="column" flexWrap="wrap" p={1} m={1} bgcolor="background.paper">
             <h3>Add Movie</h3>
            <TextField label='name' variant="outlined" onChange={e => setMovie({...movie, name: e.target.value})}/><br/>
            <TextField label='permiered' variant="outlined" onChange={e => setMovie({...movie, premiered: e.target.value})}/><br/>
            <TextField label='genres' variant="outlined" onChange={e=> setMovie({...movie, genres: e.target.value.split(' ')})}/><br/>
            <TextField label='image' variant="outlined" onChange={e => setMovie({...movie, image: e.target.value})}/><br/>
            <Box>
                <Button size="small" type="submit" onClick={addNewMovie}>add</Button>
                <Button size="small" onClick={() => window.location.assign('/movies')}>cancel</Button>
            </Box>
        </Box>
    );
}

export default AddMoviePage;