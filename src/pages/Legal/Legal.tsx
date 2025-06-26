import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

const Legal: React.FC = () => {
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
        {/* content here */}
        <h1>Copyrights</h1>
        Icons from <a href="https://icons8.com">Icons8</a> &{" "}
        <a href="https://ionic.io/ionicons">IonIcons</a>
        <br />
        Copyright 2025,{" "}
        <a href="https://github.com/MyroslavMay">MyroslavMay</a>

        <h1>Libraries Used</h1>
        
      </IonContent>
    </IonPage>
  );
};

export default Legal;
