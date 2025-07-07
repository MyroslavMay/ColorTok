import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon
} from "@ionic/react";
import { homeOutline,
  refreshOutline,
  bugOutline,
  codeOutline,
  readerOutline } from "ionicons/icons";
import { useIonToast } from "@ionic/react";
import "./About.css";

const About: React.FC = () => {
  const [present] = useIonToast();

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
        <div className="about">
          {/* top */}
          <img
            src="./../../../assets/logo/full.png"
            alt="ColorTok Logo"
            width={350}
          />
          <i><b>Stop scrolling brainrot, scroll colorful sense</b></i>
          <span className="copyright">v2+dev</span>
          <a
            href="https://github.com/MyroslavMay/ColorTok"
            className="about-btn"
          >
            <IonIcon icon={homeOutline} />
            App Home
          </a>

          <a
            href="https://github.com/MyroslavMay/ColorTok/blob/main/CHANGELOG.md" 
            className="about-btn"
          >
            <IonIcon icon={refreshOutline} />
            Change log
          </a>
          <a
            href="https://github.com/MyroslavMay/ColorTok/issues"
            className="about-btn"
          >
            <IonIcon icon={bugOutline} />
            Report bug
          </a>
          <a
            href="/legal"
            className="about-btn"
          >
            <IonIcon icon={readerOutline} />
            Legal Info
          </a>
          {/* bottom section */}
          <span className="copyright">Proudly made with ❤️ in Ukraine</span>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
