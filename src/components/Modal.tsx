"use client"
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Divider,
    Modal,
    Container,
    Stack,
    IconButton,
    TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import toast from "react-hot-toast";


interface ModalAddProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CenteredModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const InputStack = styled(Stack)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    alignItems: 'center',
    marginBlock: theme.spacing(2),
    '& .MuiTextField-root': {
        width: '100%',
    },
    '& .MuiAutocomplete-root': {
        width: '100%',
    },
    '& .MuiInputBase-root': {
        width: '100%',
    },
    '& .MuiBox-root': {
        width: '50%',
    },
    '& .MuiTypography-root': {
        paddingInline: theme.spacing(3),
        fontWeight: 500,
        fontSize: '14px',
    },
}))

const ModalContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    paddingBlock: theme.spacing(4),
    boxShadow: theme.shadows[24],
}));

interface FormData {
    title: string;
    description: string;
}

const ModalAdd: React.FC<ModalAddProps> = ({ open, setOpen }) => {

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            setIsSubmitting(true);
            console.log(data);

        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <CenteredModal open={Boolean(open)} onClose={() => setOpen(false)}>
            <ModalContainer maxWidth="sm">
                <Container maxWidth="sm" component="form">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Box>
                            <Typography variant="h6" component="h1">Add Task</Typography>
                        </Box>
                        <Box>
                            <IconButton onClick={() => setOpen(false)}>
                                <CancelRoundedIcon color='disabled' />
                            </IconButton>
                        </Box>
                    </Stack>

                    <Divider sx={{ my: 2 }} />
          
                    <InputStack>
                        <Box>
                            <Typography>
                                Title
                            </Typography>

                        </Box>
                        <Box>
                            <Controller
                                name="title"
                                rules={{ required: { value: true, message: 'This field is required' } }}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        error={Boolean(errors.title)}
                                        {...field}
                                        placeholder="Title of Attribute"
                                    />
                                )}
                            />
                        </Box>
                    </InputStack>
                    <InputStack>
                        <Box>
                            <Typography>
                                Description
                            </Typography>

                        </Box>
                        <Box>
                            <Controller
                                name="description"
                                rules={{ required: { value: true, message: 'This field is required' } }}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        error={Boolean(errors.description)}
                                        {...field}
                                        placeholder="Title of Attribute"
                                    />
                                )}
                            />
                        </Box>
                    </InputStack>

                    <Stack alignItems="center" justifyContent="flex-end" spacing={2} direction="row">
                        <LoadingButton onClick={handleSubmit(onSubmit)} color='info' type="submit" size='large' loading={isSubmitting}>
                            Submit
                        </LoadingButton>
                    </Stack>
                </Container>
            </ModalContainer>
        </CenteredModal>
    );
};

export default ModalAdd;
