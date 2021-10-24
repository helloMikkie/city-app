import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel
} from '@ionic/react';

import React from 'react';
import './NewItem.css';


import _Button from "../components/Button"

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <_Button />

        <IonList id="labels-list" >
          <IonListHeader className="f-large">Projekte</IonListHeader>
          {labels.map((label) => (
            <IonItem lines="inset" >
              {/* <IonIcon slot="start" icon={bookmarkOutline} /> */}
              <IonLabel >{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;