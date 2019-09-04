check = null;
function checkDate() {
  const date = new Date();
  if (date.getDate() === 20 && date.getMonth() + 1 === 9) {
    replaceContent();
    clearInterval(this.check);
  } else {
    check = setInterval(() => checkDate(), 60000);
  }
}
function replaceContent() {
  console.log("world web climate strike!");
  console.log(
    "it's the 20th of september and this page is offline to speak up against human made climate change."
  );
  console.log(
    "You'll be able to access this website again tomorrow, 21 September!"
  );
  document.querySelector("body").innerHTML = `
  <style>
  * {
    margin: 0;
    padding: 0;
    background: #17292e;
  }
  body {
    color: #4ee682;
    background: #17292e;
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 1rem;
  }
  h1 {
    font-size: 4rem;
    font-weight: bolder;
    text-transform: uppercase;
    font-family: Impact, Charcoal, sans-serif;
  }
  .content {
    padding: 2rem;
    max-width: 570px;
  }
  p {
    margin-bottom: 3rem;
  }
</style>
<div class="content">
  <h1>world web climate strike</h1>
  <p>
    it's the 20th of september and this page is offline to speak up against
    human made climate change.
  </p>
  <h2>You'll be able to access this website again tomorrow, 21 September</h2>
</div>

  `;
}
setTimeout(() => checkDate(), 3000);
