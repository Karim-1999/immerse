import { useState, useEffect } from "react";

// import { cardInfo } from "./infoHistory"

export function History() {
  /*   const [scroll, setScroll] = useState();
  const [style, setStyle] = useState();
  function handleScroll() {
    const position = window.pageYOffset;
    setScroll(position);
  }

  console.log(scroll);

  function style() {
    if (scroll > 2500) {
      const style = {
        backgroundColor: "#33ffc2",
      };
      setStyle(style);
    } else {
      const style = {
        backgroundColor: "#03011a",
      };
      setStyle(style);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  return (
    <div className="bg-color-history">
      <div className="container">
        <h1 className="history-title">Our History</h1>
        <div className="card-plustimeline">
          <div className="timeline-box">
            <div className="timeline timeline-top"></div>
            <div className="timeline-box-array">
              <div className="timeline-box-array-dot" id="box">
                {" "}
              </div>
              <div className="timeline-box-array-text">
                <div>Founding</div>
                <div className="timeline-box-array-text-arrow">
                  <svg
                    width="10"
                    height="22"
                    viewBox="0 0 10 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19287 21.3021L9.19287 0.364563L1.55255 8.00489C-0.00954954 9.56698 -0.00955061 12.0996 1.55255 13.6617L9.19287 21.3021Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="history-card">
            <img
              src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dca5b05e494e8_timeline-photo_founding.jpeg"
              alt="workin in office image"
            />
            <div className="history-card-text">
              <p className="history-card-text-date">March 2017 - August 2019</p>
              <h2>Founding ($500k)</h2>
              <p className="history-card-text-paragraph">
                Quinn moved back to the USA, hired the founding team, and
                created the very first prototype for immersive language learning
                built on the Oculus Go VR headset.
              </p>
            </div>
          </div>
        </div>
        <div className="card-plustimeline">
          <div className="timeline-box">
            <div className="timeline"></div>
            <div className="timeline-box-array">
              <div className="timeline-box-array-dot" id="box2"></div>
              <div className="timeline-box-array-text">
                <div>Series A</div>
                <div className="timeline-box-array-text-arrow">
                  <svg
                    width="10"
                    height="22"
                    viewBox="0 0 10 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19287 21.3021L9.19287 0.364563L1.55255 8.00489C-0.00954954 9.56698 -0.00955061 12.0996 1.55255 13.6617L9.19287 21.3021Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="history-card">
            <img
              src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dca49d4e494e9_timeline-photo_series-a.png"
              alt="workin in office image"
            />
            <div className="history-card-text">
              <p className="history-card-text-date">
                September 2019 – February 2022
              </p>
              <h2>Series A ($2M)</h2>
              <p className="history-card-text-paragraph">
                While VR adoption steadily grew in the consumer market, Immerse
                saw an opportunity to help international language schools
                transform their 2D curriculum into immersive 3D experiences. So
                the Immerse team spent the next 18 months building the first
                ever VR language teaching and learning platform, closing over 30
                institutional partnerships, and transitioning the company to
                work 100% remote as a result of the Covid-19 pandemic.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card-plustimeline">
          <div className="timeline-box">
            <div className="timeline"></div>
            <div className="timeline-box-array">
              <div className="timeline-box-array-dot" id="box3"></div>
              <div className="timeline-box-array-text">
                <div>Series B</div>
                <div className="timeline-box-array-text-arrow">
                  <svg
                    width="10"
                    height="22"
                    viewBox="0 0 10 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19287 21.3021L9.19287 0.364563L1.55255 8.00489C-0.00954954 9.56698 -0.00955061 12.0996 1.55255 13.6617L9.19287 21.3021Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="history-card">
            <img
              src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dca90f6e494ea_timeline-photo_series-b.jpeg"
              alt="workin in office image"
            />
            <div className="history-card-text">
              <p className="history-card-text-date">March 2022 – Current Day</p>
              <h2>Series B ($9M)</h2>
              <p className="history-card-text-paragraph">
                Here's where the Immerse story gets really interesting. In what
                felt like a blink of an eye, two major shifts happened in the
                world: the Covid-19 pandemic completely disrupted the
                traditional education model and Facebook rebranded to Meta. To
                capitalize on this moment, Immerse raised $9M (100% from social
                impact investors) to pivot the company to become the world's
                first ever direct-to-consumer language immersion brand. We have
                since hired over a dozen people, been rated by Meta as the #1 VR
                language education app in VR, and launched the first VR Spanish
                and English language immersion programs in the world. We've come
                a looong way in just five years, but Immerse is just getting
                started.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card-plustimeline">
          <div className="timeline-box">
            <div className="timeline timeline-bottom"></div>
            <div className="timeline-box-array">
              <div className="timeline-box-array-dot" id="box4"></div>
              <div className="timeline-box-array-text">
                <div>Future</div>
                <div className="timeline-box-array-text-arrow">
                  <svg
                    width="10"
                    height="22"
                    viewBox="0 0 10 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19287 21.3021L9.19287 0.364563L1.55255 8.00489C-0.00954954 9.56698 -0.00955061 12.0996 1.55255 13.6617L9.19287 21.3021Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="history-card">
            <img
              src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcaeb24e4950d_Languages%20Image.png"
              alt="workin in office image"
            />
            <div className="history-card-text">
              <p className="history-card-text-date">To infinity and beyond</p>
              <h2>What does tomorrow hold?</h2>
              <p className="history-card-text-paragraph">
                With a vision to become the world's leader in immersive language
                education, we plan to launch multiple world languages over the
                next decade. As a result, we will seek to fully realize our
                mission to democratize access to language immersion experiences
                and cultivate the world's largest community of fluent, global
                citizens.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
