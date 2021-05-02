import {Box, TextField, Button} from '@material-ui/core';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MembersService from '../../services/members.service';

const AddMembersPage = (props) => {
    const [memberData, setMemberData] = useState({name: '', city: '', email: ''});

    const addNewMember = async () => {
        await MembersService.createMember(memberData);
        props.history.push('/members');
    }

    return (
        <Box display="flex" flexDirection="column" flexWrap="wrap" p={1} m={1} bgcolor="background.paper">
        <h3>Add Member</h3>
       <TextField label='name' variant="outlined" onChange={e=>setMemberData({...memberData, name: e.target.value})} /><br/>
       <TextField label='city' variant="outlined"  onChange={e=>setMemberData({...memberData, city: e.target.value})} /><br/>
       <TextField label='email' variant="outlined"  onChange={e=>setMemberData({...memberData, email: e.target.value})} /><br/>
       <Box>
           <Button size="small" onClick={addNewMember}>add</Button>
           <Button size="small" onClick={() => window.location.assign('/members')}>cancel</Button>
       </Box>
   </Box>
    );
}
export default AddMembersPage;