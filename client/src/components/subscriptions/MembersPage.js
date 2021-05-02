import {Box} from '@material-ui/core';
import { useState, useEffect } from 'react';
import MembersService from '../../services/members.service';
import Member from './Member';

const MembersPage = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await MembersService.getAllMembers();
            setMembers(data);
        }
        fetchData();
    }, [])
    return (
        <>

        <Box display="flex">
            <Box display="flex" flexDirection="column" flexWrap="wrap" p={1} m={1} bgcolor="background.paper">
            { members.map(member => <Member key={member._id} member={member} />) }
            </Box>
        </Box>

       </>
    );
}
export default MembersPage;