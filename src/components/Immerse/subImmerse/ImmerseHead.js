export function ImmerseHead() {
  return (
    <div className="container">
      <div className="immerse-container">
        <div className="main">
          <div className="main_title">
            <h1>Welcome to the future of fluency</h1>
          </div>
          <div className="main_paragraph">
            <p>
              No chatting with robots. No memorizing scripts. Have fun and build
              real community by immersing yourself in new languages, cultures
              and instructor-led VR classNamees.
            </p>
          </div>
          <div className="main_link">
            <a href="#" className="main_link-first">
              <span>Start Free Trial</span>
              <svg
                id="right"
                width="27"
                height="22"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"></path>
              </svg>
            </a>
            <a href="#" className="main_link-second">
              <span>How immerse works</span>
              <svg
                id="right"
                width="27"
                height="22"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="vid">
          <video
            autoPlay
            muted
            loop
            src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62c592e778a4d3afe84a36d7_B_Roll Final_compressed_1080p-transcode.mp4"
          ></video>
          <div className="play-btn-wrapper">
            <div className="play-btn">
              <i id="play" className="fa-solid fa-play"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
