import { useEffect, useState } from "react";
import MembersService from '../../services/members.service';
import {TextField, Button, Card, makeStyles, Box  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      }
    },
  }));

const EditMemberPage = (props) => {
    const [member, setMember] = useState({name:'', city: '', email: ''});
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            const memberById = await MembersService.getMember(props.match.params.id);
            setMember(memberById);
        }
        fetchData();
    }, [member._id])

    const updateMember = async () => {
        await MembersService.updateMember(member);
        props.history.push('/members');
    }

    return (
        <Box p={1}>
        <Card>
            <h3>Edit Member</h3>
            <form className={classes.root}>
                <TextField label='name' variant="outlined" value={member.name} onChange={e => setMember({...member, name: e.target.value})}/><br/>
                <TextField label='city' variant="outlined" value={member.city} onChange={e => setMember({...member, city: e.target.value})}/><br/>
                <TextField label='email' variant="outlined" value={member.email} onChange={e => setMember({...member, email: e.target.value.split(' ')})}/><br/>
                <Button size="small" onClick={updateMember}>update</Button>
                <Button onClick={() => window.location.replace('/members')} size="small">cancel</Button>
            </form>
        </Card>
        </Box>
    );
}

export default EditMemberPage;