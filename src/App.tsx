import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useIonRouter } from '@ionic/react';
import { informationCircleOutline, settingsOutline, bookmarkOutline, albumsOutline } from 'ionicons/icons';


import MainApp from './pages/MainApp/MainApp.tsx'
import About from './pages/About/About.tsx'
import Settings from './pages/Settings/Settings.tsx'
import Legal from './pages/Legal/Legal.tsx';
import Favorites from './pages/Favorites/Favorites.tsx';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

import './theme/variables.css';

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/app">
            <MainApp />
          </Route>
          <Route exact path="/legal">
            <Legal />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <Redirect to="/app" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="app" href="/app">
            <IonIcon aria-hidden="true" icon={albumsOutline} />
            <IonLabel>Feed</IonLabel>
          </IonTabButton>
          {/* Hack to get favoritess working */}
          <IonTabButton tab="favorites" href="/favorites" onClick={() => window.location.href = "/favorites"}>
            <IonIcon aria-hidden="true" icon={bookmarkOutline} />
            <IonLabel>Favorites</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon aria-hidden="true" icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon aria-hidden="true" icon={informationCircleOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;