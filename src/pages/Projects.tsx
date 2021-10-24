import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

import React from 'react';
import _ProjectItem from '../components/ProjectItem'


const Projects: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Projects
                    </IonTitle>
                    
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <_ProjectItem color="primary" title="Fussgängerbrücke" status="relativ" massstab="Gebäude" visual="./assets/images/p-1.jpg"/>
            </IonContent>
        </IonPage>
    );
};
export default Projects;