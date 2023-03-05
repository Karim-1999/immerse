import { useNavigate } from "react-router-dom";

export function NavbarDesktop() {
  const navigate = useNavigate();

  return (
    <div className="navDesktopWrapper">
      <div className="navbg"></div>
      <nav className="nav2">
        <div className="nav2__position">
          <div className="nav2__firstList">
            <a href="#">Why us?</a>
            <a
              href="#"
              onClick={() => {
                navigate("/pricing");
              }}
            >
              Pricing
            </a>
            <a href="#"
              
              onClick={() => {
                navigate("/blog");
              }}>Blog</a>
          </div>
          <div
            className="nav2__logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <svg
              width="159"
              height="24"
              viewBox="0 0 159 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.738 23.082h6.263V.848H.738v22.234Zm9.65 0h6.26v-13.6l5.194 6.434h3.895l5.27-6.538v13.704h6.258V1.53L31.694.184l-7.943 9.858L15.923.323 10.388 1.53v21.553Zm98.707.735 6.523-1.425-6.447-8.12c2.902-1.013 4.43-3.32 4.43-6.292 0-4.056-3.17-7.132-8.439-7.132h-13.06v22.234h6.262v-7.9h4.583l6.148 8.635Zm-10.73-13.39V5.602h6.376c1.566 0 2.559 1.014 2.559 2.448 0 1.363-.993 2.377-2.559 2.377h-6.377ZM40.673 23.082h6.26v-13.6l5.194 6.434h3.895l5.27-6.538v13.704h6.258V1.53L61.98.184l-7.944 9.858L46.208.323 40.673 1.53v21.553Zm86.987.35c6.072 0 9.738-2.552 9.738-7.062 0-3.916-2.521-5.629-7.065-6.468l-3.742-.699c-2.482-.454-3.284-1.153-3.284-2.097 0-1.12 1.107-1.923 3.475-1.923 1.991 0 3.326.573 4.242 1.841l5.724-1.247c-1.718-3.46-5.193-5.279-10.119-5.279-5.843 0-9.47 2.517-9.47 6.887 0 3.741 2.634 5.804 7.102 6.643l3.552.664c2.635.49 3.398 1.189 3.398 2.063 0 1.293-1.604 1.992-3.818 1.992-2.244 0-4.122-.76-5.294-2.648l-5.742 1.25c1.145 3.776 4.735 6.083 11.303 6.083Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M157.027.848H140.56v22.234h16.467l1.39-4.824h-11.595v-4.02h9.689V9.413h-9.689v-3.74h11.595l-1.39-4.825ZM87.423.847H70.956V23.08h16.467l1.39-4.824H77.218v-4.02h9.689V9.412h-9.689v-3.74h11.595L87.423.846Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="nav2__secondList">
            <a
              href="#"
              onClick={() => {
                navigate("/ourStory");
              }}
            >
              Our Story
            </a>
            <a
              href="#"
              onClick={() => {
                navigate("/user");
              }}
            >
              Log In
            </a>
            <a
              href="#"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
