import {Box} from '@mui/material';
import React from 'react'
import Button from "@mui/material/Button"
import { blue } from '@mui/material/colors';

function ViewJob() {
    return (
        <>
        <Box
        backgroundColor= {blue}
        height={200}
        width={200}
        display="flex"
        alignItems="left"
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
        >
            This box is placed here.

            <Button variant="contained">Test</Button>

        </Box>
        

        </>


    )

}

export default ViewJob;