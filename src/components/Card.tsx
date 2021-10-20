import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import styled from 'styled-components'
import './Card.css';

export const _Card: React.FC = () => {
    return (
       
                <Card>
                    <CardHeader>
                        <IonCardSubtitle>Ausstellung</IonCardSubtitle>
                        <IonCardTitle>Carl Zillich fühhrt durch die IBA</IonCardTitle>
                    </CardHeader>

                    <IonCardContent>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCardContent>
                </Card>

            
    );
};

const Card = styled(IonCard)`
border: 3px solid red; 
@media (min-width: 40rem){
    border: 10px solid green;
}
`
const CardHeader= styled(IonCardHeader)`
font-size: 24px; 
text-align: left;
`



export default _Card;