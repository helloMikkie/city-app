import {

    IonItem,
    IonLabel,
    IonButton,
    IonAvatar,IonText, IonTitle, IonIcon
 
} from '@ionic/react';
import {chevronForward} from 'ionicons/icons';

import styled from 'styled-components'


type ProjectItemProps = {
    title: string,
    status: string,
    massstab: string,
    visual: string,
    color: string
}
const _ProjectItem: React.FC<ProjectItemProps> = ({color,title, status, massstab, visual}) => {

return(
    <Item button onClick={() => { }} color={color} lines="none">
        <Avatar>
            <img src={visual} style={ImageStyle}></img>
        </Avatar>
       
        <IonLabel>
            
            <IonText>
                <LabelContainer>
                    <Number >10</Number>
                    <div>
                    <h3>{title}</h3>
                    <p>{status}</p>
                    <p>{massstab}</p>
                    </div>
                </LabelContainer>
            </IonText>
         </IonLabel>
       
            
            
        <Icon icon={chevronForward} style={{ color: "#000" }}/>
    </Item>
)
}

const Item = styled(IonItem)`
    color: #000; 
    border-bottom: none; 
    align-items: flex-start;
`

const Avatar = styled(IonAvatar)`
    margin-right: 1rem; 
    width: 220px; 
    height: 160px;  
`
const ImageStyle= {
    border: "2px solid red",
    borderRadius: "4px",
    filter: "grayscale(10)"
}

const LabelContainer= styled.div`
    color: #000;
    display: flex; 
   
    justify-content: start;
    align-items: end;
    gap: 16px;
`

const Number = styled(IonText)`
font-weight: 600;
font-size: 48px;
margin-top: 0; 
line-height:0.8;
`

const Icon = styled(IonIcon)`
    
    svg{
        width: 30px; 
    }
`



export default _ProjectItem