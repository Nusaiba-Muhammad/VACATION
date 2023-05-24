import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import "./App.css";
import AnimatedCard from "./component/AnimatedCard";
import Card from "./component/Card";
import CarouselCard from "./component/Card";
import MoreView from "./component/MoreView";
import Slider from "./component/Slider";
import Top from "./component/Top";
function App() {
  AOS.init();
  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step === 5) {
      setStep(1);
    } else {
      setStep((p) => p + 1);
    }
  };

  const onPrev = () => {
    if (step === 1) {
      setStep(5);
    } else {
      setStep((p) => p - 1);
    }
  };

  return (
    <>
      {/* <Slider /> */}
      <Top />
      <MoreView />
      <AnimatedCard />

      {step === 1 ? (
        <Card onNext={onNext} onPrev={onPrev} />
      ) : step === 2 ? (
        <Card
          image1="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Mount Fuji"
          country="JAPAN"
          text="The Metropolitan City of Venice (Italian: Città
                    Metropolitana di Venezia) is a metropolitan city in the
                    Veneto region, Italy. Its capital is the city of Venice. It
                    replaced the Province of Venice and includes the city of
                    Venice and 43 other municipalities (comuni)"
          count={2}
          max={5}
          image2="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          onNext={onNext}
          onPrev={onPrev}
        />
      ) : step === 3 ? (
        <Card
          image1="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          title="Paris"
          country="FRANCE"
          text="The Metropolitan City of Venice (Italian: Città
                    Metropolitana di Venezia) is a metropolitan city in the
                    Veneto region, Italy. Its capital is the city of Venice. It
                    replaced the Province of Venice and includes the city of
                    Venice and 43 other municipalities (comuni)"
          count={3}
          max={5}
          image2="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          onNext={onNext}
          onPrev={onPrev}
        />
      ) : step === 4 ? (
        <Card
          onNext={onNext}
          onPrev={onPrev}
          count={4}
          max={5}
          image1="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHVya2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          image2="https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHR1cmtleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          title="Istanbul"
          country="TURKEY"
          text="The Metropolitan City of Venice (Italian: Città
                    Metropolitana di Venezia) is a metropolitan city in the
                    Veneto region, Italy. Its capital is the city of Venice. It
                    replaced the Province of Venice and includes the city of
                    Venice and 43 other municipalities (comuni)"
        />
      ) : (
        <Card
          onNext={onNext}
          onPrev={onPrev}
          count={5}
          max={5}
          image1="https://images.unsplash.com/photo-1473455811944-fdd1b0f282f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          image2="https://images.unsplash.com/photo-1604689727774-6e8c049f3131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          title="Peru"
          country="PERU"
          text="The Metropolitan City of Venice (Italian: Città
                    Metropolitana di Venezia) is a metropolitan city in the
                    Veneto region, Italy. Its capital is the city of Venice. It
                    replaced the Province of Venice and includes the city of
                    Venice and 43 other municipalities (comuni)"
        />
      )}
    </>
  );
}

export default App;
