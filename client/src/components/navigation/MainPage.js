import { Route, Switch, Link, Redirect } from "react-router-dom";
import { AppBar, Toolbar, List, ListItem, ListItemText, makeStyles, Container, Typography, Button, Box } from "@material-ui/core";
import MoviesMainPage from "../movies/MoviesMainPage";
import SubscriptionsMainPage from "../subscriptions/SubscriptionsMainPage";
import AuthService from '../../services/auth.service';

const useStyles = makeStyles({
  navDisplayFlex: {display: `flex`},
  linkText: {textDecoration: `none`,textTransform: `uppercase`,color: `white`},
  navbarDisplayFlex: {display: `flex`,justifyContent: `space-between`},
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    height: 48
  }
});

const navLinks = [
  { title: `movies`, path: `/movies` },
  { title: `subscriptions`, path: `/members` },
  { title: `logout`, path: `/` },
];

const MainPage = () => {
  const classes = useStyles();

  const handleLogout = () => {
    AuthService.logout();
  }

  return (
    <>
      <AppBar position="static"style={{marginBottom: '15px'}}>
        <Toolbar>
          <Container className={classes.navbarDisplayFlex}>
              <Typography variant='h5' style={{padding: '1%'}}>Movies - Subscriptions</Typography>
            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  {title == 'logout' ? 
                    <ListItem button className={classes.btn} onClick={handleLogout}><ListItemText primary={title} /></ListItem>
                    : <ListItem button><ListItemText primary={title} /></ListItem>}
                </Link>
              ))}
            </List>
                <Typography variant='h6' style={{padding: '1%'}}>Hi, {sessionStorage["fullName"]}</Typography>
          </Container>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/movies" component={MoviesMainPage} />
        <Route path="/members" component={SubscriptionsMainPage} />
      </Switch>
      <Redirect exact to='/movies' />
    </>
  );
};
export default MainPage;