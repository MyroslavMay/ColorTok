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
import { Clipboard } from "@capacitor/clipboard";
import "./About.css";

const About: React.FC = () => {
  const [present] = useIonToast();

  const copyDebugInfo = (toastHook: any) => {
    const debugInfo = `
    START OF DEBUG INFO:
    Version: ColorTok v2+dev,
    Platform: ${window.cordova ? "Cordova" : "Web"},
    Platform Version: ${window.cordova ? window.cordova.platformVersion : "N/A"},
    Device Model: ${window.device ? window.device.model : "N/A"},
    Device Platform: ${window.device ? window.cordova : "N/A"},
    Device Version: ${window.device ? window.device.version : "N/A"},
    User Agent: ${navigator.userAgent},
    App Version: ${window.cordova ? window.cordova.getAppVersion() : "N/A"},
    App Name: ${window.cordova ? window.cordova.getAppName() : "N/A"},
    App Package: ${window.cordova ? window.cordova.getAppPackage() : "N/A"},
    App Build: ${window.cordova ? window.cordova.getAppBuild() : "N/A"},
    END OF DEBUG INFO
    `
    
    Clipboard.write({
      string: debugInfo
    }).then(() => {
      toastHook({
        message: "Debug info copied to clipboard",
        duration: 1500,
        position: "bottom",
      });
    }).catch((error) => {
      toastHook({
        message: `Error copying debug info: ${error.message}`,
        duration: 2000,
        position: "bottom",
      });
    })
  }

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
            <a
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => copyDebugInfo(present)}
            className="about-btn"
            >
            <IonIcon icon={codeOutline} />
            Copy debug info
            </a>
          {/* bottom section */}
          <span className="copyright">Proudly made with ❤️ in Ukraine</span>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
