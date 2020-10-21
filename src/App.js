import React, { PureComponent } from "react";
import logo from "./headerImage.jpg";
import Cards from "./components/Cards";
import Tabs from "./components/Tabs";
import Faqs from "./components/Faqs";
import "./App.css";

import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram-new.png";
import Cycling from "./images/cyclist.jpg";
import Surfing from "./images/surfing.jpg";
import Skiing from "./images/skiing.jpg";
import Camping from "./images/camping.jpg";

const cardsImages = [
  {
    image: Cycling,
    title: "WHISTLER MOUNTAIN BIKING",
    subtitle: "CYCLING",
  },

  {
    image: Surfing,
    title: "SURF CAMP IN COSTA RICA",
    subtitle: "SURFING",
  },

  {
    image: Skiing,
    title: "SKI TOURING MONT BLANC",
    subtitle: "SKIING",
  },

  {
    image: Camping,
    title: "RIVERSIDE CAMPING",
    subtitle: "CAMPING",
  },
];

const faq = [
  {
    question: "WHO IS WKND'S INTENDED AUDIENCE?",
    answer: [
      <p>
        We belive the best adventures and activities are those that are
        accesbile to everyone. WKND is designed to be inclusive of all age
        range, abilites, and bugget-levels. We strive to cater to the
        thrill-seeking adrenaline junkie BASE-jumpers as well as novices that
        have a spare weekend and interest in trying something new.
      </p>,
    ],
    index: "1",
  },

  {
    question: "HOW DOES WKND PAY FOR ITSELF?",
    answer: [<p>Some random text</p>],
    index: "2",
  },

  {
    question: "CAN I CONTRIBUTE TO WKND?",
    answer: [<p>Some random text</p>],
    index: "3",
  },

  {
    question: "HOW OFTEN IS WKDN UPDATED?",
    answer: [<p>Some random text</p>],
    index: "4",
  },

  {
    question: "WHEN WAS WKND FOUNDED?",
    answer: [<p>Some random text</p>],
    index: "5",
  },

  {
    question: "IS WKND A REAL COMPANY?",
    answer: [<p>Some random text</p>],
    index: "6",
  },
];

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home-wrapper"> 
        <div className="image-wrapper">
          <img src={logo} alt="logo" className="top-image" />
        </div>

        <div className="cards-wrapper">
          <Cards data={cardsImages} title="test" />
        </div>

        <div className="tabs-wrapper">
          <Tabs>
            <div label="Tab 1">
              <Faqs data={faq} />
            </div>

            <div label="Tab 2">
              <p>Tab 2</p>
            </div>

            <div label="Tab 3">
              <p>Tab 3</p>
            </div>

            <div label="Tab 4">
              <p>Tab 4</p>
            </div>
          </Tabs>
        </div>

        <div className="news-wrapper">
          <h4 className="news-h4">NEWSLETTER</h4>

          <div className="column">
            <img src={logo} alt="logo" className="news-img-wrapper" />

            <div className="news-right-wrapper">
              <h4>Want WKND in your inbox?</h4>
              <p>
                Be the first to know about new trips, fresh gears, and co-op
                offers. We're a good penpal. Promise.
              </p>

              <form>
                <input placeholder="YOUR EMAIL ADDRESS" />
                <button>SIGN UP</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="top">
            <h2>WKND</h2>

            <div className="top-middle">
              <a>MAGAZINE</a>
              <a>ADVENTURES</a>
              <a>FAQ</a>
              <a>ABOUT US</a> 
            </div>

            <div className="top-right">
                <a>
                  <img src={instagram} />
                </a>

                <a>
                  <img src={facebook} />
                </a>

                <a>
                  <img src={twitter} />
                </a>
              </div>
          </div>

          <div className="bottom">
            <p>
              2019, WKND DEMO SITE. INTENDED ONLY AS A DEMOSTRATION OF ADOBDE
              EXPERIENCE MANAGER
            </p>
          </div>
        </div>
      </div>
    );
  }
}
