import Aos from "aos";
import "./App.css";
import "./styles/home.scss";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function App() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
    var scrollTop = window.scrollY;
    var progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    document.getElementById("myBar").style.width = progress + "%";
    progress >= 15
      ? (document.getElementById("goToTopBtn").style.display = "flex")
      : (document.getElementById("goToTopBtn").style.display = "none");

      progress >= 35
      ? (document.getElementById("list").style.color = "orange")
      : (document.getElementById("list").style.color = "white");
  }
  Aos.init();
  return (
    <>
      <div className="main-wrap flex col">
      <div className="header flex">
        <h1><span>Fit</span>nastic</h1>
        <div className="navs">
          <ul id="list">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Locations</li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
        <div className="hero-wrap flex">
          <div className="btn-explore">
            <button
              onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
            >
              services
            </button>
          </div>
          <div
            className="icons flex col"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaYoutube />
            </button>
          </div>
          <div className="content">
            <h1 className="flex col" data-aos="fade-right" data-aos-delay="600">
              let's <span>workout!</span>
            </h1>
          </div>
          <div className="image-sect">
            <img
              src="./bg.png"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
        <div
          className="services-wrap flex col"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h1>Services</h1>
          <div className="cards flex">
            <div
              className="card flex col"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src="./cardio.png" alt="" />
              <h2>Cardio & Spinning</h2>
              <button>&#10140;</button>
            </div>
            <div
              className="card flex col"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img src="./personal.png" alt="" />
              <h2>Personal Training</h2>
              <button>&#10140;</button>
            </div>
            <div
              className="card flex col"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <img src="./weight.png" alt="" />
              <h2>Weight Lifting</h2>
              <button>&#10140;</button>
            </div>
          </div>
        </div>
        <div
          className="quote-wrap flex"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="image-sect" data-aos="zoom-in" data-aos-delay="300">
            <img src="./main.jpg" alt="" />
          </div>
          <div className="content" data-aos="fade-right" data-aos-delay="600">
            <h1>
              <span>Build</span> Your <span>perfect</span> Body In Our{" "}
              <span>Gym</span>
            </h1>
            <p>
              In our gym, we offer more than just a place to exercise; we
              provide a platform to transform your body and enhance your overall
              well-being. With state-of-the-art equipment and expert trainers,
              we are dedicated to helping you reach your fitness goals. Whether
              you're looking to build muscle, improve endurance, or simply boost
              your confidence, our tailored programs cater to individuals of all
              fitness levels.
              <button>Personal Trainers</button>
            </p>
          </div>
        </div>
        <div className="work-wrap flex" data-aos="fade-right">
          <div className="image-sect">
            <img src="./trainer.png" alt="" />
          </div>
          <div
            className="content flex col"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h1>
              We're <span>working</span> with the <span>best</span> personal{" "}
              <span>trainers</span>{" "}
            </h1>
            <p>
              At our gym, we're privileged to partner with a cadre of elite
              personal trainers, distinguished by their unparalleled dedication,
              extensive knowledge, and unwavering commitment to helping our
              members achieve remarkable transformations, both inside and out.
              With their expert guidance and individualized approach, they
              inspire, motivate, and empower individuals to surpass their
              limits, redefine their potential, and embark on a journey of
              self-discovery and physical empowerment. 
              <button>See Pricing</button>
            </p>
          </div>
        </div>
        <div
          className="btn-top flex"
          id="goToTopBtn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          &#x2191;
        </div>
        <div className="footer flex col">
          <p className="flex">&copy; Copyright All Rights Reserved</p>
          <h1>Fitnastic</h1>
        </div>
      </div>
    </>
  );
}

export default App;
