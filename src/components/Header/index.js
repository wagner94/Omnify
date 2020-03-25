import React from 'react';

import Omni from '../../utils/omnidata.png';

import { Container }  from './styles';


export default function Header(){


    return (
        
        <Container>
           <img src={Omni} width="9%"/>
        </Container>
    );
}