import React, {useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UpdateProvisionsModal from '../components/Modal/UpdateProvisions';
import { getAllProvisions } from "../Utils/databaseAccessor";

const Delivery = ({ data }) => {
    
    const [checked, setChecked] = React.useState([1]);
    const [provisions, setProvisions] = React.useState([])

    useEffect(() => {
        const getProvisions = async () => {
          let _provs = await getAllProvisions();
          setProvisions(_provs);
        }
        getProvisions();    
      }, [])

    return (
        <>
            <List dense sx={{ width: '100%', bgcolor: 'background.paper', marginTop:5}}>
                {data.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem sx={{ my: 1}}
                            key={value.entityId}
                            secondaryAction={
                               <UpdateProvisionsModal data={provisions} userId={value.familyId}/>
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText id={labelId} primary={`${value.familyName} family`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    )
}

export default Delivery