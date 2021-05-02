import {Container, Box } from '@material-ui/core';
import { NavLink, Switch, Route } from 'react-router-dom';
import MembersPage from './MembersPage';
import AddMemberPage from './AddMemberPage';
import EditMemberPage from './EditMemberPage';

const SubscriptionsMainPage = () => {
    const activeStyle = {color: "#F15B2A"};

    return (
        <Container fixed>
            <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper">
                <Box p={1}><NavLink exact to="/members" activeStyle={activeStyle}>All Members</NavLink></Box>
                <Box p={1}><NavLink to="/members/add-member" activeStyle={activeStyle}>Add Member</NavLink></Box>
            </Box>

            <Switch>
                <Route exact path="/members" component={MembersPage} />
                <Route path="/members/add-member" component={AddMemberPage} />
                <Route path='/members/edit/:id' component={EditMemberPage}/>
            </Switch>
            
        </Container>

    );
}

export default SubscriptionsMainPage;