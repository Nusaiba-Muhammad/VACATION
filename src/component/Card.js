import React from "react";
import "../component/Moreview.css";
import "reactstrap";
import "bootstrap";
import "react-bootstrap";

export default function Card({
  country = "ITALY",
  count = 1,
  max = 5,
  title = "Metrolpolitan City of Venice",
  text = `The Metropolitan City of Venice (Italian: Città
                    Metropolitana di Venezia) is a metropolitan city in the
                    Veneto region, Italy. Its capital is the city of Venice. It
                    replaced the Province of Venice and includes the city of
                    Venice and 43 other municipalities (comuni).`,
  image1 = "https://source.unsplash.com/rknrvCrfS1k/408x615",
  image2 = "https://source.unsplash.com/ftTsK4QinMw/400x400",
  onPrev = (f) => f,
  onNext = (f) => f,
}) {
  return (
    <div className="containa">
      <div className="travel_container">
        <div className="content">
          <div className="left_container">
            <img alt="" id="hero-photo" src={image1} />
            <div className="navigator">
              <div className="prev" onClick={onPrev}>
                &#10229;
              </div>
              <div className="next" onClick={onNext}>
                &#10230;
              </div>
            </div>
          </div>
          <div className="right_container">
            <div className="title">
              {country}
              <span className="smaller-font"> & places to discover</span>
            </div>
            <div className="counter">
              <span className="big-figure">{count}</span>/
              <span className="small-figure">{max}</span>
            </div>
            <div className="entries">
              <div className="entry">
                <div className="snippet_container">
                  <div className="entry-title">{title}</div>
                  <div className="entry-text">{text}</div>
                </div>
                <div className="thumbnail">
                  <img alt="" src={image2} width={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
