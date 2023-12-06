import {Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const options = [
    'Orders',
    'Workers',
    'Reviews',
    'Devices',
]

const Aside = () => {
    const navigate = useNavigate();
    return (
       <Drawer variant={'permanent'} sx={{'& .MuiDrawer-paper': {marginTop: '40px',}}}>
           {
               <List sx={{minWidth: '250px'}}>
                   {options.map((text, index) => (
                       <ListItem key={text} disablePadding>
                           <ListItemButton onClick={() => navigate(text)}>
                               <Typography>
                                   {text}
                               </Typography>
                           </ListItemButton>
                       </ListItem>
                   ))}
               </List>
           }
       </Drawer>
    )
}

export default Aside;
