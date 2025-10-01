import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/react";
import { useState } from "react";

import "./Settings.css";

const Settings: React.FC = () => {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );

  const selectTheme = (themeType: "sys" | "dark" | "light") => {
    const body = document.body;
    body.classList.remove("dark", "light");

    switch (themeType) {
      case "dark":
        body.classList.add("dark");
        setIsDark(true);
        break;
      case "light":
        body.classList.add("light");
        setIsDark(false);
        break;
      case "sys":
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
          body.classList.add("dark");
          setIsDark(true);
        }
        break;
    }
  };

  // TODO: fisnish this
  const selectWidgets = (widgetsType: "md" | "ios") => {
    const body = document.body;
    body.classList.remove("dark", "light");

    switch (themeType) {
      case "dark":
        body.classList.add("dark");
        setIsDark(true);
        break;
      case "light":
        body.classList.add("light");
        setIsDark(false);
        break;
      case "sys":
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
          body.classList.add("dark");
          setIsDark(true);
        }
        break;
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ColorTok</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ColorTok</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* actual content lives here */}
        <div className="settings">
          <IonTitle>Your Settings</IonTitle>
          <IonItem style={{ marginTop: "5vh" }}>
            <IonSelect
              label="Theme"
              interface="popover"
              onIonChange={(e) => selectTheme(e.detail.value)}
              value={isDark ? "dark" : "light"}
            >
              <IonSelectOption value="sys">System</IonSelectOption>
              <IonSelectOption value="dark">Dark</IonSelectOption>
              <IonSelectOption value="light">Light</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem style={{ marginTop: "5vh" }}>
            <IonSelect
              label="Widgets"
              interface="popover"
              onIonChange={(e) => selectWidgets(e.detail.value)}
              // value={isMat ? "md" : "ios"}
              value={"md"}
            >
              <IonSelectOption value="md">Material (Android)</IonSelectOption>
              <IonSelectOption value="ios">Cupertino (iOS)</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
