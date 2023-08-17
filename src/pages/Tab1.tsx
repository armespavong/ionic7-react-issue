import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { closeOutline } from 'ionicons/icons';
import { useState } from 'react';

const Tab1: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => setIsOpen(true)}>Open Modal Tab 1</IonButton>
        <IonModal
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
        >
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>
                  Modal Tab 1
                </IonTitle>
                <IonButtons slot="end">
                  <IonButton color='primary'
                    onClick={() => setIsOpen(false)}
                  >
                    <IonIcon icon={closeOutline} slot="start"></IonIcon>
                    Close
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent>
            </IonContent>
          </IonPage>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
