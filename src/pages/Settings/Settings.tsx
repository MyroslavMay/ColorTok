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

  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark");
    setIsDark(!isDark);
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
          <h1>Your Settings</h1>
          <IonItem>
            <IonSelect
              label="Theme"
              interface="action-sheet"
              onIonChange={(e) => selectTheme(e.detail.value)}
              value={isDark ? "dark" : "light"}
            >
              <IonSelectOption value="sys">System</IonSelectOption>
              <IonSelectOption value="dark">Dark</IonSelectOption>
              <IonSelectOption value="light">Light</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
