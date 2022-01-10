import {
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Tab3: React.FC = () => {
  return (
    <Sidebar>
      <IonPage id="content">
        <IonHeader collapse="fade" translucent={true}>
          <IonToolbar>
            <IonMenuButton autoHide={false} slot="start" mode="md" />
            <IonTitle size="large" className="ion-align-items-baseline">
              Tab 3
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <h1> Tab 3 page </h1>
        </IonContent>
      </IonPage>
    </Sidebar>
  );
};
export default Tab3;
