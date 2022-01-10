import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { Children } from "react";

const Sidebar: React.FC = (props) => {
  return (
    <IonSplitPane when="sm" contentId="content">
      <IonMenu contentId="content">
        <IonHeader>
          <IonToolbar>
            <IonMenuButton autoHide={false} slot="start" />
            <IonTitle> Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem href="/profile" >
              Profile
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      {props?.children}
    </IonSplitPane>
  );
};
export default Sidebar;
