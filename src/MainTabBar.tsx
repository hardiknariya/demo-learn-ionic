import React from "react";
import Tab1 from "./pages/Tab1/Tab1";
import Tab2 from "./pages/Tab2/Tab2";
import Tab3 from "./pages/Tab3/Tab3";
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

import { Redirect, Route } from "react-router";

const MainTabBar: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tab1" component={Tab1} exact={true} />
        <Route path="/tab2" component={Tab2} exact={true} />
        <Route path="/tab3" component={Tab3} exact={true} />
        <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={calculator} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={home} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={settings} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
export default MainTabBar;
