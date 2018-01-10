import React from 'react'

// import { STATIC_PATH } from '../../config'

const LandingPage = () =>
  <div>
    <div id="container">
      <img src="/static/images/iphonex-clay-mockup.png" alt="iPhone X" />
      <p id="heroText">Providing proof of <br /> ownership and peace of <br /> mind for your valuables</p>
      <img id="how" src="/static/images/how.png" alt="" />
      {/* <button className="btn" id="how">How it works ↓</button> */}
      <img id="login" src="/static/images/login.png" alt="" />
      <img id="signup" src="/static/images/signup.png" alt="" />
    </div>


    <div id="bodyText">
      {/* <div id="imgContainer">
        <img src="assets/images/vault.png">
      </div> */}

      <h2 className="paraTitle" id="header"> Completely secure. </h2>
      <p className="text"> Solerus tokens provide proof of ownership for any product. Think of it <br /> as a receipt proving that you bought an authentic item. Tokens can <br /> be issued for any valuable asset like jewelry, watches, <br /> or handbags. Each token is exclusively created by manufacturers and <br />recorded on the blockchain. You receive the corresponding token <br /> when you purchase a Solerus-backed product. </p>


    </div>

    {/* <hr align="center" /> */}

    <div id="bodyTextTwo">

      <h2 className="paraTitle" id="headerTwo"> What is the blockchain? </h2>
      <p className="text"> A blockchain is a sophisticated digital ledger. It can keep <br /> records that are immune to tampering and fraud. With <br /> Solerus, your ownership of an item is written to the <br /> blockchain to keep permenent record. </p>

    </div>

    {/* <hr align="center" /> */}

    <div id="bodyTextThree">

      <h2 className="paraTitle" id="headerTwo"> Another line of defense against theft and loss. </h2>
      <p className="text"> Just like your car or property title, a Cora token proves that you <br /> and only you own the asset. In the case of theft or loss, you still <br /> retain the Cora token. Your item can be reported missing on the <br /> blockchain, preventing others from reselling or purchasing <br />your item. </p>

    </div>

    {/* <hr align="center" /> */}

    <div id="bodyTextFour">

      <h2 className="paraTitle" id="headerTwo"> Easily distinguish real goods from fakes. </h2>
      <p className="text"> Since every product has a unique Cora token associated with it, <br /> it’s easy to tell what is authentic and what is fake: simply ask for <br /> the Cora token. Tokens can only be created by manufacturers, <br /> ensuring that they correspond to authentic goods. </p>

    </div>
  </div>

export default LandingPage
