import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react"
import React from "react"

import "./Favorites.css"

const Favorites: React.FC = () => {
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
        {/* content*/}
        <div className="favorites">
          <IonTitle>Your Favorites</IonTitle>
          <div className="favs-cards">
            <div className="fav-card"></div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;