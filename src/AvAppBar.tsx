import { AppBar } from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, Box } from '@mui/material';
import Logo from "./logo.png";


export const AvAppBar = () => (
    <AppBar sx={{bgcolor:"white",color:"black"}}>
        <Box
            component="img"
            sx={{
                height: 64,
                bgcolor: "white"
            }}
            alt="Aviratha Logo"
            src={Logo}
        />
        <Box component="span" flex={1} />
    </AppBar>
);