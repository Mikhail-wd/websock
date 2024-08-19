import { useState } from 'react';
import { Stack, Pagination } from '@mui/material';

function PaginationComp(props) {

    return (
        <Stack spacing={2}>
            <Pagination count={props.amount} variant="outlined" shape="rounded" onChange={(event,page)=>props.pageSelect(event,page)}/>
        </Stack>
    )
}

export default PaginationComp