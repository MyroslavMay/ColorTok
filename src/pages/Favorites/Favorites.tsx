import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react"
import React from "react"

import "./Favorites.css"

const Favorites: React.FC = () => {

  const cards = Array.from({ length: 0 }, (_, i) => i);

  const randomSpans = () =>
    ({
      colSpan: Math.random() > 0.7 ? 2 : 1,
      rowSpan: Math.ceil(Math.random() * 3),
    });

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
            {/* <div className="fav-card">1</div>
            <div className="fav-card">1</div>
            <div className="fav-card">1</div>
            <div className="fav-card">1</div>
            <div className="fav-card">1</div>
            <div className="fav-card">1</div> */}
            {cards.length >= 1 ? <p>Cards</p> : (
              <p>No favorites</p>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;