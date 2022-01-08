import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { calculator, star, refreshCircle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useState } from "react";

setupIonicReact();

const App: React.FC = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid fixed={false}>
            <IonRow className="ion-margin-bottom">
              <IonCol sizeXs="12" sizeSm="6" sizeLg="6" sizeMd="6" sizeXl="6">
                <IonItem>
                  <IonLabel position="floating">Width</IonLabel>
                  <IonInput
                    value={width}
                    type="number"
                    onIonChange={(e) => setWidth(parseInt(e.detail!.value!))}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-margin-bottom">
              <IonCol sizeXs="12" sizeSm="12" sizeLg="6" sizeMd="6" sizeXl="6">
                <IonItem>
                  <IonLabel position="floating">Height</IonLabel>
                  <IonInput
                    value={height}
                    type="number"
                    onIonChange={(e) => setHeight(parseInt(e.detail!.value!))}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-margin-bottom">
              <IonCol sizeXs="6" sizeSm="6" sizeLg="3" sizeMd="3" sizeXl="3">
                <IonButton color="primary" expand="block">
                  <IonIcon slot="start" icon={calculator} />
                  Calculator
                </IonButton>
              </IonCol>
              <IonCol sizeXs="6" sizeSm="6" sizeLg="3" sizeMd="3" sizeXl="3">
                <IonButton color="secondary" expand="block">
                  Reset
                  <IonIcon slot="start" icon={refreshCircle} />
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => console.log("favorite clicked")}>
                Favorite
              </IonItemOption>
              <IonItemOption
                color="danger"
                onClick={() => console.log("share clicked")}
              >
                Share
              </IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Item Options</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption onClick={() => console.log("unread clicked")}>
                Unread
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
