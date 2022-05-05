import React from "react";
import "./App.css";
import bgImage from "./assets/bg.jpg";
import logo from "./assets/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faReddit,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: 'none',
    // boxShadow: 24,
    p: 4,
  };
  return (
    <div className="hero__page">
      <div className="hero__first__section">
        <div className="header">
          <img src={logo} alt="" />
          <div className="social__media displaynone">
          <a href="https://twitter.com/Cyberhippoz" target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon" /></a> 
          <a href="https://www.reddit.com/user/cyberhippozNFT" target="_blank"> <FontAwesomeIcon icon={faReddit} className="icon"/></a>
          <a href="https://www.instagram.com/cyberhippoz.nft/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
 <FontAwesomeIcon icon={faDiscord} className="icon" onClick={handleOpen}/>
          </div>
        </div>
        <div className="hero__content">
          <Container>
            <Row>
              <Col md={12}>
                <h1>Coming Soon</h1>
                <h2>
                  The Cyberhippoz Project <br /> (Hip)
                </h2>
                <p>
                  A collection of{" "}
                  <strong>10,000 highly advanced hippos,</strong> from the{" "}
                  <br /> digital planet Potomia, living on the Ethereum
                  blockchain.
                </p>

                <h2 style={{marginTop:'150px'}}>Welcome to Potomia</h2>

                <ReactPlayer
                  className="video__player"
                  url="https://www.youtube.com/watch?v=ynFNLBP2TPs&ab_channel=EdRoh"
                  //https://youtu.be/-l7aobIxGng
                  // width="889px"
                  // height="500px"
                  controls={true}
                />

                <div className="social__media">
                <a href="https://twitter.com/Cyberhippoz" target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon" /></a> 
                <a href="https://www.reddit.com/user/cyberhippozNFT" target="_blank"> <FontAwesomeIcon icon={faReddit} className="icon"/></a>
                <a href="https://www.instagram.com/cyberhippoz.nft/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
               <FontAwesomeIcon icon={faDiscord} className="icon" onClick={handleOpen}/>
                </div>
              </Col>
            </Row>
            <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                  <h1 style={{color:"white", textAlign:"center"}}>
                   <FontAwesomeIcon icon={faDiscord} className="icon"/>
                   </h1>
                  <h2 style={{color:"#b2afaf",textAlign:"center"}}>Coming Soon</h2>
                  </Box>
                </Modal>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
