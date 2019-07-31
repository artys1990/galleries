import React from 'react'
import MyButton from '@material-ui/core/Button';
export default function Button(props) {
    return (
        <MyButton variant="contained" color="primary" onClick={props.click}>
            {props.text}
        </MyButton>
    )
}
