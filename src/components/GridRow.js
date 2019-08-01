import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

export default function GridRow (props){
    return (
        <Row>
            {props.children}
        </Row>
    )
}