import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { calculator, home, settings } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";

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
import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";

/* import capacitor app */
import Tab1 from "./pages/Tab1/Tab1";
import Tab2 from "./pages/Tab2/Tab2";
import Tab3 from "./pages/Tab3/Tab3";
import Profile from "./pages/Profile/Profile";
import MainTabBar from "./MainTabBar";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonContent>
          <IonRouterOutlet>
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/tab:index" component={MainTabBar} exact={true} />
            <Route path="/" component={MainTabBar} exact={true} />
          </IonRouterOutlet>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
