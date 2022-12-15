import React from "react";
import NavBar from "./Navbar";
import miguel from "../assets/img/mifot3.png";
import antonio from "../assets/img/llaves.png";
import mayor from "../assets/img/mayor-menor.png";
import react from "../assets/img/react2.png";
import js from "../assets/img/js3.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import linkelind from "../assets/img/link1.png";
import ws from "../assets/img/ws2.png";
import gith from "../assets/img/git.png";
import logogi from "../assets/img/logo_github.png";
import logolink from "../assets/img/logo_linkedin.png";
import logows from "../assets/img/logo_ws.png";
import logogm from "../assets/img/logo_gmail.png";
import gmail from "../assets/img/gmail1.png";
import proj01 from "../assets/img/proj1.jpeg";
import proj02 from "../assets/img/proj2.jpeg";
import proj03 from "../assets/img/proj3.jpeg";
import proj04 from "../assets/img/proj4.jpeg";
import proj05 from "../assets/img/proj5.jpeg";
import bootstrap from "../assets/img/bootstrap.png";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1></h1>
      <h2 className="text-bg-secndary p-20px text-white fs-2 ">
        {" "}
        Developer: Miguel Antonio Martinez{" "}
      </h2>

      <div className="hability">
        <div className="container-one">
          <div className="container-father container-sm">
            <img className="img.thumbnail mx-auto d-block" src="https://img.freepik.com/foto-gratis/fondo-borroso-oscuro-abstracto-color-textura-degradado-suave-patron-sitio-web-brillante-brillante-encabezado-banner-o-imagen-arte-grafico-barra-lateral_1258-83087.jpg?auto=format&h=200" alt="" />
            <div className="my-photo">
              <img className="imgeA" src={antonio} alt="" />
            </div>

            <div className="my-photo">
              <img className="imgew" src={ws} alt="" />
            </div>
            <div className="my-photo">
              <img className="imgeB" src={miguel} alt="" />
            </div>

            <div className="my-photo">
              <img className="imgeC" src={mayor} alt="" />
            </div>

            <div className="my-photo">
              <img className="imgel" src={linkelind} alt="" />
            </div>
            <div className="my-photo">
              <img className="imgeg" src={gith} alt="" />
            </div>
            <div className="my-photo">
              <img className="imgegm" src={gmail} alt="" />
            </div>
          </div>
        </div>
        <div className="img.thumbnail float-end">
          <div>
            <img className="img img1" src={react} alt="" />
          </div>
          <div>
            <img className="img img2" src={js} alt="" />
          </div>
          <div>
            <img className="img img3" src={html} alt="" />
          </div>
          <div>
            <img className="img img4" src={css} alt="" />
          </div>
          <div>
            <img className="img img5" src={bootstrap} alt="" />
          </div>
        </div>
      </div>
      <div className="cv-container">
        <h1>CV</h1>
        <button>Download</button>
      </div>
      <div className="slice">
        <h1>Project</h1>
        <div className="d-flex justify-content-center">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={proj02} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={proj01} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={proj05} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={proj04} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={proj03} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <footer className=" container-fluid w-100 p-3 height: 100px">
        <div className="child container-lg">
          <h2 className="text-success text-opacity-45">About</h2>
          <p>Soy de Republica Dominicana, me dedico a la programacion, al analisis y diseños de aplicaiones. </p>
        </div>
        <div className="child container-lg"> 
          <h2 className="text-warning text-opacity-75">Technologies</h2>
          <p>
            React, JS, HTML, CSS, Bootstrap, Tailwind, C#, SQL, MariaDB, GItHub,
            Tableu, Trello.
          </p>
        </div>
        <div className="child container-lg">
          <h2 className="text-primary text-opacity-50">Projects</h2>
          
          <p>Desktop, App, Manejo de Api, Sistemas Facturacion.</p>
        </div>
        <div className=" mother img.container-fluid">
          
            <img className="container-lg w-25 p-2 h-25 d-inline-block" src={logows} alt="" />
            <img className="container-lg w-25 p-2 h-25 d-inline-block" src={logolink} alt="" />
            <img className="container-lg w-25 p-2 h-25 d-inline-block" src={logogm} alt="" />
            <img className="container-lg w-25 p-2 h-25 d-inline-block" src={logogi} alt="" />
          
        </div>
      </footer>
    </div>
  );
};

export default Home;
