import { AppBar, Toolbar,  makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  navDisplayFlex: {display: `flex`, justifyContent: `space-between`}
});

const Header = () => {
  const classes = useStyles();

  return (
  <AppBar position="static" style={{marginBottom: '15px'}}>
    <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
            <Typography variant='h5' style={{padding: '1%'}}>Movies - Subscriptions</Typography>
        </Container>
    </Toolbar>
  </AppBar>
  );
}
export default Header;
