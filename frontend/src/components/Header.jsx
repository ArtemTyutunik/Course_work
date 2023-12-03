import {Box, Typography} from "@mui/material";


const Header = () => {
    return (
        <header>
            <Box width={'100%'} height={'40px'}
                 sx={{background: 'green'}}
                 display={"flex"}
                 alignItems={'center'}
                 justifyContent={'flex-start'}
                 padding={'20px'}
            >
                <Typography color={"white"}>
                    Admin Panel
                </Typography>
            </Box>
        </header>
    )
}

export default Header
