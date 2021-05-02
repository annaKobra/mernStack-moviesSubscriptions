import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MoviesService from '../../services/movies.service';
import {TextField, Button, Card, makeStyles, Box  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      }
    },
  }));

const EditMoviePage = (props) => {
    const [movie, setMovie] = useState({name:'', premiered: '', genres: [], image: ''});
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            const movieById = await MoviesService.getMovie(props.match.params.id);
            setMovie(movieById);
        }
        fetchData();
    }, [movie._id])

    const updateMovie = async () => {
        await MoviesService.updateMovie(movie);
    }
    return (
        <Box p={1}>
        <Card>
            <h3>Edit Movie</h3>
            <form className={classes.root}>
                <TextField label='name' variant="outlined" value={movie.name} onChange={e => setMovie({...movie, name: e.target.value})}/><br/>
                <TextField label='permiered' variant="outlined" value={movie.premiered} onChange={e => setMovie({...movie, premiered: e.target.value})}/><br/>
                <TextField label='genres' variant="outlined" value={movie.genres.join(' ')} onChange={e => setMovie({...movie, genres: e.target.value.split(' ')})}/><br/>
                <TextField label='image' variant="outlined" value={movie.image} onChange={e =>setMovie({...movie, image: e.target.value})}/><br/>
                <Link to='/movies'><Button size="small" onClick={updateMovie}>update</Button></Link>
                <Link to='/movies'><Button size="small">cancel</Button></Link>
            </form>
        </Card>
        </Box>
    );
}

export default EditMoviePage;