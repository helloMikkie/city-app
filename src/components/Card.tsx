import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import styled from 'styled-components'
// import '../theme/fonts.css'

import _Button from './Button'

type Props = {
    subtitle: string,
    title: string,
    content: string,
}

const _Card: React.FC<Props> = ({title, subtitle, content}) => {
    return (
       
        <Card>
            <CardHeader>
                <CardSubtitle>{subtitle}</CardSubtitle>
                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{content}</CardContent>
            <CardButton size="large" fill="outline">Starten</CardButton>
            {/* <_Button size="small" /> */}
        </Card>

            
    );
};

const Card = styled(IonCard)`

border: 3px solid red; 
box-shadow: none; 
@media (min-width: 40rem){
    border: 10px solid green;
}
`
const CardHeader= styled(IonCardHeader)`
font-size: 24px; 
text-align: left;
`

const CardSubtitle = styled(IonCardSubtitle)`
    border-bottom: 1px solid red; 
`
const CardTitle = styled(IonCardTitle)`
    border: 1px solid green; 
`
const CardContent= styled(IonCardContent)`
color: #000;
text-align: left;
`
const CardButton = styled(IonButton)`

font-size: 12px;

    
 &:hover{
     background: RED; 
 }

`


export default _Card;