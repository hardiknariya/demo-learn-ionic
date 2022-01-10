import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack, calculator, menu, refreshCircle } from "ionicons/icons";
import Sidebar from "../../components/Sidebar/Sidebar";

const Tab1: React.FC = (props) => {

  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [BMI, setBMI] = useState<number>();
  const [alert1, setAlert1] = useState<boolean>(false);
  const [alert2, setAlert2] = useState<boolean>(false);

  const Calculate = () => {
    console.log("weight ->", weight, "  height->", height);

    if (!weight) {
      setAlert1(true);
      return;
    }
    if (!height) {
      setAlert2(true);
      return;
    }
    let BMI = weight! / (height! * height!);
    setBMI(BMI);
  };
  const ResetEveryThing = () => {
    setWeight(undefined);
    setHeight(undefined);
    setBMI(undefined);
    setAlert1(false);
    setAlert2(false);
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={alert1}
        onDidDismiss={() => setAlert1(false)}
        header={"Alert"}
        message={"Weight is required!"}
        buttons={["OK"]}
      />
      <IonAlert
        isOpen={alert2}
        onDidDismiss={() => setAlert2(false)}
        header={"Alert"}
        message={"Height is Required!"}
        buttons={["OK"]}
      />

      <Sidebar>
        <IonPage id="content">
          <IonHeader collapse="fade" translucent={true}>
            <IonToolbar>
              <IonMenuButton autoHide={false} slot="start" mode="md" />
              <IonTitle size="large" className="ion-align-items-baseline">
               Tab 1
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonGrid fixed={false}>
              <IonRow className="ion-margin-bottom">
                <IonCol sizeXs="12" sizeSm="6" sizeLg="6" sizeMd="6" sizeXl="6">
                  <IonItem>
                    <IonLabel position="floating">Weight</IonLabel>
                    <IonInput
                      value={weight}
                      type="number"
                      onIonChange={(e) =>
                        setWeight(parseFloat(e.detail!.value!))
                      }
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow className="ion-margin-bottom">
                <IonCol
                  sizeXs="12"
                  sizeSm="12"
                  sizeLg="6"
                  sizeMd="6"
                  sizeXl="6"
                >
                  <IonItem>
                    <IonLabel position="floating">Height(m)</IonLabel>
                    <IonInput
                      value={height}
                      type="number"
                      onIonChange={(e) =>
                        setHeight(parseFloat(e.detail!.value!))
                      }
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow className="ion-margin-bottom">
                <IonCol sizeXs="6" sizeSm="6" sizeLg="3" sizeMd="3" sizeXl="3">
                  <IonButton color="primary" expand="block" onClick={Calculate}>
                    <IonIcon slot="start" icon={calculator} />
                    Calculator
                  </IonButton>
                </IonCol>
                <IonCol sizeXs="6" sizeSm="6" sizeLg="3" sizeMd="3" sizeXl="3">
                  <IonButton
                    color="secondary"
                    expand="block"
                    onClick={ResetEveryThing}
                  >
                    Reset
                    <IonIcon slot="start" icon={refreshCircle} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>

            {BMI && (
              <IonCard>
                <IonCardContent>{BMI}</IonCardContent>
              </IonCard>
            )}
          </IonContent>
        </IonPage>
      </Sidebar>
    </React.Fragment>
  );
};
export default Tab1;
