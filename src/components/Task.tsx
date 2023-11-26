"use client"
import { FC, useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Divider,
    Stack,
    Chip,
    Grid,
    Paper,
    IconButton
} from '@mui/material';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ModalAdd from './Modal';


interface TaskProps {
    data: any;
}

const Task: FC<TaskProps> = ({ data }) => {


    const [open, setOpen] = useState(false)

    return (
        <>

            <Grid container sx={{ display: "flex" }} gap={2.3} paddingTop={4} paddingLeft={4} >
                <Grid item md={3.9} xs={'auto'} xl={4.9} >
                    <Paper elevation={0} sx={theme => ({ padding: theme.spacing(4), boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)' })}>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row" alignItems="center" spacing={3}>
                                <Stack direction={"column"}>
                                    <Typography>
                                        <b>Title</b>
                                    </Typography>
                                    <Typography fontSize={15}>
                                        Description
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Divider sx={{ marginY: 4 }} />
                        <Stack direction="row" alignItems={'center'} justifyContent={"space-between"} spacing={2}>
                            <Stack direction="column" spacing={1} alignItems="center">
                                <Typography sx={{ fontWeight: 200 }}>1/12/2023</Typography>
                                <Chip size='small' color='error' label={'Incompleted'} />
                            </Stack>
                            <Stack direction="row" spacing={0} alignItems="center">
                                <IconButton  onClick={()=> setOpen(true)}>
                                    <AddIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>

            <ModalAdd open={open} setOpen={setOpen} />
        </>
    );
};

export default Task;
