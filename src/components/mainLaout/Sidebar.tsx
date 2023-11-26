'use client'

import { useState } from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { AnyMxRecord } from 'dns';

const Accordion = styled((props: any) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:before': {
        display: 'none',
    },
}))

const Title = styled((props: any) => (
    <MuiAccordionSummary {...props} role={undefined} />
))(({ theme }) => ({
    fontSize: '14px',
    paddingBlock: '18px',
    lineHeight: '16px',
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'dark'
            : 'white',
    flexDirection: 'row',
    cursor: 'default !important',
    marginBottom: '24px',
    '& .MuiAccordionSummary-content': {
        margin: 0,
    },
}))

const AccordionSummary = styled((props: AnyMxRecord) => (
    <MuiAccordionSummary
        className="active"
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    fontSize: '14px',
    paddingBlock: '18px',
    lineHeight: '16px',
    // marginBlock: '6px',
    backgroundColor:
        theme.palette.mode === 'dark'
            ? theme.palette.background.dark
            : theme.palette.background.paper,
    flexDirection: 'row',
    transition: '0.3s ease-in-out',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        alignItems: 'center',
        margin: 0,
    },
    color: '#4C5259',
    '&:hover': {
        color: '#4C5259',
        backgroundColor: '#4FABFC14',
    },
    '&.active': {
        color: '#fff',
        backgroundColor: '#4FABFC',
    },
    '&.active .MuiAccordionSummary-expandIconWrapper': {
        color: '#fff',
    },

    '& .MuiAccordionSummary-content .MuiSvgIcon-root:first-of-type': {
        marginRight: '12px',
        fontSize: '24px',
    },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    paddingBlock: '24px',
    paddingInline: '15px',
    backgroundColor: theme.palette.background.surface
}))



const SideBar = () => {

    const pathname = usePathname();
    const [expanded, setExpanded] = useState<string | false>(false);


    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    const isActiveClass = (path: string) => (path === pathname ? 'active' : '');


    return (
        <div className="h-[calc(100vh-72px)]">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <Link href="/dashboard">
                    <AccordionSummary  className={isActiveClass('/dashboard')}>
                        <FormatListBulletedIcon />
                        <Typography variant="body2">All Tasks</Typography>
                    </AccordionSummary>
                </Link>
            </Accordion>
            <Accordion >
                <Link href="/dashboard/important">
                    <AccordionSummary className={isActiveClass('/dashboard/important')}>
                        <GppMaybeIcon  />
                        <Typography variant="body2">Important</Typography>
                    </AccordionSummary>
                </Link>
            </Accordion>
            <Accordion >
                <Link href="/dashboard/completed">
                    <AccordionSummary  className={isActiveClass('/dashboard/completed')}>
                        <CheckCircleIcon />
                        <Typography variant="body2">Completed!</Typography>
                    </AccordionSummary>
                </Link>
            </Accordion>
            <Accordion >
                <Link href="/dashboard/incompleted">
                    <AccordionSummary className={isActiveClass('/dashboard/incompleted')}>
                        <HourglassTopIcon  />
                        <Typography variant="body2">Do It Now</Typography>
                    </AccordionSummary>
                </Link>
            </Accordion>
        </div>
    )
}

export default SideBar