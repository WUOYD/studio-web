<template>
  <header>
    <h1 style="display: none">What the World Wide Web</h1>
    <div class="header-wrapper">
      <div class="header-item sp">WHAT</div>
      <div class="header-item sp">THE</div>
      <div class="world outline" >W<span id="hworld">ORLD</span></div>
      <div class="wide outline" >W<span id="hwide">IDE</span></div>
      <div class="web outline" >WEB</div>
      <div class="scroll-section">
        <a href="#track-domain"
          ><img id="scroll-svg" src="../assets/scroll_colored.svg"
        /></a>
      </div>

      <p class="info">
        A journey through the <span class="stroke">internet</span
        ><span class="blue">.</span>
      </p>
    </div>

    <div id="track-domain" class="h-wrapper">
      <div class="trace-section">
        <div class="trace-title">
            <h2>Trace your Domain</h2>
            <p>Location the traced website starts at the webserver location in switzerland.</p>
        </div>
        <form class="tracert-form" id="section-form">
          <input
          class="domain"
          placeholder="example-domain.com"
          type="domain"
          required
          />
          <button class="submitbutton" type="submit">Trace</button>
        </form>
        <div class="sidebar">
          <ul class="locations"></ul>
          <!-- <LoadingAnimation /> -->
         <!--  <div id="status">
            <p>Finished!</p>
          </div> -->
          <div class="loading-wrapper">
            <div class="loading">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="explore-button-section">
          <button id="explore-button">Explore how it works</button>
        </div>
      </div>
      <div class="cta-wrapper">
        <p>
          Enter a domain to track the network path of a
          <span class="stroke">website</span><span class="blue">.</span>
        </p>
        <form class="tracert-form" id="header-form">
          <label for="domain">Trace a Domain</label>
          <input
            class="domain"
            placeholder="example-domain.com"
            type="domain"
            required
          />
          <button type="submit">Trace</button>
        </form>
        <div class="tracert-loading">
          <p class="error">Error: Tracing your Domain</p>
          <div class="success">
            <p class="loading-dots">tracing started</p>
            <p class="loading-dots">searching for the next hops</p>
            <p class="loading-dots">locating <span></span></p>
          </div>
        </div>
      </div>
    </div>
    <div id="globe-wrapper"><div id="globe"></div></div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

header .outline span {
  font-weight: 800;
}

header .white{
    font-weight: 800;
    color: white;
    font-size: 6.5vw;
    line-height: 0.9;
    font-family: "Roboto", sans-serif;
}

header .outline{
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(67, 242, 255);
    -webkit-text-fill-color: transparent;
    font-family: "Roboto", sans-serif;
    font-size: 6.5vw;
    line-height: 0.9;
    font-weight: 800;
}

/*header .world{
    width: 20%;
}

header .wide{
    width: 20%;
    transform: translate(80px, 0px);
}

header .web{
    width: 20%;
    transform: translate(147px, 0px);
}*/
header .world{
    width: 20%;
    opacity: 0;
}

header .wide{
    width: 20%;
    opacity: 0;
    transform: translate(0px, 0px);
}

header .web{
    width: 20%;
    transform: translate(0px, 0px);
}

header {
  height: 450vh;
  z-index: 2;
}

header h2 {
    color: white;
    font-size: 25px;
}

header h2 + p {
    color: white;
    padding-bottom: 20px;
}

header .trace-title {
    padding: 0px 17px;
}

header .cta-wrapper .tracert-loading {
  position: absolute;
  bottom: 20%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
}

header .cta-wrapper .tracert-loading p {
  position: absolute;
  width: 100%;
  font-size: 25px;
  opacity: 0;
}

header .trace-section {
  opacity: 0;
  display: none;
  height: calc(100% - 2 * 60px);
  width: 45%;
  margin-top: 60px;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.9);
}

header .trace-section form {
  display: flex;
}

header .sidebar {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #43f2ff #000;
  padding: 0 15px;
  margin: 15px 0;
}

header .explore-button-section {
  justify-content: center;
  display: flex;
  width: 100%;
}

header .loading-wrapper {
  justify-content: center;
  display: flex;
}

/*header #status {
  visibility: hidden;
  justify-content: center;
  display: flex;
  padding-top: 1rem;
}*/

header #explore-button {
  width: 50%;
  border-radius: 35px;
  position: relative;
  bottom: 0;
  visibility: hidden;
}

header .success {
  width: 100%;
}

header .sidebar .locations {
  font-size: 18px;
  padding-left: 25px;
  color: white;
  margin-top: 15px;
}

header .h-wrapper {
  position: absolute;
  top: 350vh;
  width: 100%;
  height: 100vh;
}

header .cta-wrapper::before {
  content: "";
  position: absolute;
  left: -100vw;
  width: 200vw;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 0, 0, 0.6) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 120vh;
  bottom: 0;
}

header .cta-wrapper {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
}

header .cta-wrapper p {
  font-size: 65px;
  line-height: 1.1;
  color: white;
  width: 50%;
  text-align: center;
  font-weight: 500;
}

header .scroll-section {
  width: 100%;
  position: absolute;
  top: calc(100vh - 100px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header #scroll-svg {
  margin: auto;
  padding-top: 10px;
  width: 7%;
}

@keyframes scale {
  0% {
    transform: translateX(-50%) scale(1);
  }
  100% {
    transform: translateX(-50%) scale(1.05);
  }
}

header .info {
  font-size: 65px;
  line-height: 0.9;
  color: white;
  position: absolute;
  top: 130vh;
  font-weight: 500;
  left: 0;
  width: 100%;
  text-align: center;
}

header .header-item:nth-of-type(n + 3) {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(67, 242, 255);
  -webkit-text-fill-color: transparent;
}

.header-item {
  font-weight: 600;
  color: white;
  font-size: 6.5vw;
  line-height: 0.9;
  z-index: 1;
  font-family: "Roboto", sans-serif;
}

header .header-wrapper {
  width: 100%;
  position: relative;
}

.header-wrapper {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15vh;
  flex-direction: column;
}

.header-wrapper div:nth-of-type(1) {
  transform: translateX(-80%);
}
.header-wrapper div:nth-of-type(2) {
  transform: translateX(-60%);
}
.header-wrapper div:nth-of-type(3) {
  transform: translateX(0%);
}
.header-wrapper div:nth-of-type(4) {
  transform: translateX(60%);
}
.header-wrapper div:nth-of-type(5) {
  transform: translateX(120%);
}

#header-form {
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

form .domain {
  width: 100%;
  padding-left: 10px;
}

form {
  justify-content: flex-start;
}

form label {
  display: none;
}

form button {
  border-radius: 30px;
  
}

form input {
  background-color: transparent;
  color: white;
  border: none;
  width: 40%;
  font-size: 20px;
  border-right: none;
}

.tracert-form {
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  padding: 7px 7px;
}

#header-form {
  width: 50%;
}

#info p {
  font-weight: 500;
}

form input:focus,
form input:active {
  outline: 0;
}

@media only screen and (max-width: 1199.98px) {
    .header-item,
    .world.outline,
    .wide.outline,
    .web.outline {
        font-size: 100px;
    }

    header #explore-button{
        width: 60%;
    }
}

@media only screen and (max-width: 991.98px) {
    #header-form {
        width: 75%;
    }

    header .cta-wrapper p {
        width: 90%;
    }

    header .cta-wrapper {
        height: 60%;
        opacity: 1 !important;
        display: flex !important;
    }

    header .cta-wrapper::before {
        height:  100%;
    }

    header .sidebar {
        height: auto !important;
        margin-bottom: 30px;
    }

    header .cta-wrapper p,
    header .info {
        font-size: 40px;
    }

    header div.trace-section {
        width: 100%;
        top: 150vh;
        position: absolute;
        height: auto !important;
        padding-bottom: 30px;
    }

    header div.trace-section::before {
        content: "";
        position: absolute;
        top: 0;
        left: -10vw;
        width: 120vw;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);
        height: 100%;
    }

    header div.h-wrapper {
        top: 195vh;
    }

    header .info {
        top:  78vh;
    }

    header {
        height: auto;
    }

    header .trace-section form {
        display: none;
    }

    .header-wrapper div{
      transform: translateX(-80%);
    }
}

/*Tablet portrait 768 width*/

@media screen and (max-width: 768px) {
    .header-item,
    .world.outline,
    .wide.outline,
    .web.outline {
        font-size: 130px;
    }
    header .cta-wrapper p,
    #header-form {
        width: 100%;
    }

    .header-wrapper {
        align-items: center;
        height: 100vh;
        padding-top: 20vh;
    }

    header div.h-wrapper {
        top: 110vh;
    }

    .header-wrapper div{
        width: auto;
    }

    .header-wrapper div:nth-of-type(1) {
        transform: translateX(-10%);
    }

    .header-wrapper div:nth-of-type(2){
        transform: translateX(5%);
    }

    .header-wrapper div:nth-of-type(5) {
        transform: translateX(25%);
    }

    .header-wrapper div:nth-of-type(3),
    .header-wrapper div:nth-of-type(4) {
        display: none;
    }

    header .info {
        top: 80vh;
    }

    header .cta-wrapper .tracert-loading {
        bottom: -10%;
        width: 100%;
    }

    #globe-wrapper {
        height: 500px;
    }

    #globe-wrapper, #globe-wrapper.globeTop {
        top: 145vh !important;
    }

    header div.trace-section {
        top: 100vh;
        margin-top: unset;
    }

    header .h-wrapper {
        height: unset;
    }
}

@media only screen and (max-width: 575.98px) {
    .header-item,
    .world.outline,
    .wide.outline,
    .web.outline {
        font-size: 120px;
    }

    #globe-wrapper{
        margin-top: 90px;
    }

    #globe-wrapper,
    #track-domain {
        position: static;
    }

    header div.trace-section {
        top: 100%;
        padding-top: 15px;
    }

}

@media only screen and (max-width: 499.98px) {
    .header-item,
    .world.outline,
    .wide.outline,
    .web.outline {
        font-size: 110px;
    }

    #globe-wrapper {
        height: 400px;
    }

    header #explore-button {
        width: 80%;
    }
}

@media only screen and (max-width: 399.98px) {
    .header-item,
    .world.outline,
    .wide.outline,
    .web.outline {
        font-size: 90px;
    }

    .header-wrapper div:nth-of-type(1) {
        transform: translateX(0%);
    }

    .header-wrapper div:nth-of-type(2){
        transform: translateX(0%);
    }

    .header-wrapper div:nth-of-type(5) {
        transform: translateX(0%);
    }

    header .cta-wrapper p,
    header .info {
        font-size: 28px;
    }

    #globe-wrapper {
        height: 380px;
    }

    #globe-wrapper{
        margin-top: 30px;
    }

    header .cta-wrapper .tracert-loading p{
        font-size: 20px;
    }

    header #explore-button {
        width: 100%;
    }
}

</style>




