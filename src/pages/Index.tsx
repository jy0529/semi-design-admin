import React from 'react';
import { Button } from '@douyinfe/semi-ui'
import { useNavigate } from 'react-router-dom'

export default () => {
    const navigate = useNavigate();

    return (
        <>
            <div>name</div>
            <Button onClick={ () => navigate('/demo') }>Change</Button>
        </>
    )
}