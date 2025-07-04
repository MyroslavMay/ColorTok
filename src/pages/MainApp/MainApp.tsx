import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import "./MainApp.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import React, { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "@ionic/react/css/ionic-swiper.css";
import ColorCard from "../../components/ColorCard.tsx";

import { generateNumData } from "../../dataGenerator.ts";

const MainApp = () => {
  const [items, setItems] = useState<React.ReactNode[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 500; i++) {
      const { hex, rgb } = generateNumData();
      newItems.push(<ColorCard RGBcolor={rgb} hexColor={hex} />);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
  }, []);

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
        <Swiper
          direction={"vertical"}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {item}
            </SwiperSlide>
          ))}
          <IonInfiniteScroll
            ionInfinite={(e) => {
              generateItems();
              setTimeout(() => e.target.complete(), 500)
            }}
          >
            <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading..."></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default MainApp;
