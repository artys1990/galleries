import React from 'react'
import Button1 from '@material-ui/core/Button';
export default function Button(props) {
    return (
        <Button1 variant="contained" color="primary">
            {props.text}
        </Button1>
    )
}
