import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,  } from "@ionic/react";
import React from "react";

const Profile: React.FC = (props) => {
  console.log("props", props);
  
  return (
    <IonPage>
      <IonHeader collapse="fade" translucent={true}>
        <IonToolbar className="ion-justify-content-center">
          <IonMenuButton aria-hidden={false}  />
          <IonTitle size="large" className="ion-align-items-baseline">
            Profile
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};
export default Profile;
