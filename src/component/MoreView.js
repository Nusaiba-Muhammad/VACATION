import React from "react";
import "../component/Moreview.css";

export default function MoreView() {
  return (
    <div className="moreview">
     
      <div className="moreview_container">
        <div className="grid-container">
          <div className="card card--2x2">
            <div className="card__content big-script padding-large">
              <p>Travel and see the world</p>
            </div>
          </div>
          <div className="card card--vertical">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/443416/pexels-photo-443416.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card card--2x3">
            <div className="card__top-to-bottom">
              <div className="card__image">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp/;w=1260"
                />
              </div>
              <div className="card__content padding-mlarge--l">
                <h2>Quisque volutpat.</h2>
                <hr />
                <p>
                  Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                  nibh. Quisque volutpat condimentum velit.
                </p>
                <div className="card__button">
                  More
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card card--frameless">
            <div className="card__content">
              <p>
                <em>
                  Travel is fatal to prejudice, bigotry, and narrow-mindedness.
                </em>
              </p>
              <p>— Mark Twain</p>
            </div>
          </div>
          <div className="card card--horizontal card--frameless">
            <div className="card__content card__content--has-icon">
              <p>
                <i className="card__icon--large fas fa-plane"></i>
              </p>
              <p>
                <i className="card__icon--large fas fa-motorcycle"></i>
              </p>
              <p>
                <i className="card__icon--large fas fa-subway"></i>
              </p>
            </div>
          </div>
          <div className="card card--featured">
            <div className="card__side-by-side--m">
              <div className="card__image">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/1125278/pexels-photo-1125278.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=126/0"
                />
              </div>
              <div className="card__content padding-mlarge--l">
                <h2>Quisque volutpat.</h2>
                <hr />
                <p>
                  Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
                  nibh. Quisque volutpat condimentum velit.
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <div className="card__button">
                  More
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card card--vertical">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/920968/pexels-photo-920968.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card card--horizontal">
            <div className="card__side-by-side">
              <div className="card__image">
                <img
                  alt=""
                  className="img-fluid"
                  style={{ maxHeight: "180px" }}
                  src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
                />
              </div>
              <div className="card__content card__content--has-icon">
                <div>
                  <h2>Ipsum.</h2>
                  <p>
                    <i className="card__icon--large far fa-arrow-alt-circle-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card card--vertical">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card card--frameless">
            <div className="card__content">
              <p>
                <em>
                  We wander for distraction, but we travel for fulfilment.
                </em>
              </p>
              <p>— Hilaire Belloc</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card card--2x3">
            <div className="card__top-to-bottom">
              <div className="card__image">
                <img
                  alt=""
                  src="https://images.pexels.com/photos/542411/pexels-photo-542411.png?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
                 />
                {/* <img
                  src="https://images.pexels.com/photos/13816476/pexels-photo-13816476.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
                  alt=""
                /> */}
              </div>
              <div className="card__content padding-mlarge--l">
                <h2>Etiam ultrices.</h2>
                <hr />
                <p>
                  Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                  Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                  sem, at interdum magna augue eget diam.
                </p>
                <div className="card__button">
                  More
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card card--horizontal card--frameless">
            <div className="card__content card__content--has-icon">
              <p>
                <i className="card__icon--large fas fa-map"></i>
              </p>
              <p>
                <i className="card__icon--large fas fa-car"></i>
              </p>
              <p>
                <i className="card__icon--large fas fa-map-marker-alt"></i>
              </p>
            </div>
          </div>
          <div className="card card--2x2">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card card--frameless">
            <div className="card__content">
              <p>
                <em>
                  A good traveller has no fixed plans and is not intent on
                  arriving.
                </em>
              </p>
              <p>— Lao Tzu</p>
            </div>
          </div>
          <div className="card card--horizontal card--frameless">
            <div className="card__content big-script">
              <p>Bon voyage</p>
            </div>
          </div>
          <div className="card card--horizontal">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card card--vertical">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                alt=""
                src="https://images.pexels.com/photos/386007/pexels-photo-386007.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
