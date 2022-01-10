import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Tab2: React.FC = () => {
  return (
    <Sidebar>
      <IonPage id="content">
        <IonHeader collapse="fade" translucent={true}>
          <IonToolbar>
            <IonMenuButton autoHide={false} slot="start" mode="md" />
            <IonTitle size="large" className="ion-align-items-baseline">
              Tab 2
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <h1> Tab 2 page </h1>
        </IonContent>
      </IonPage>
    </Sidebar>
  );
};
export default Tab2;
