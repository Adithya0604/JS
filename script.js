function Scroll() {
  console.log("Heloo");
}


const Btn1 = document.getElementById("child1");
const Btn2 = document.getElementById("child2");
const Btn3 = document.getElementById("child3");

const buttons = [Btn1, Btn2, Btn3];
buttons.forEach((button) => {
  if(button){
  button.addEventListener("click", stylingButton); // direct attach of listner to the buttons in the container.
  }
});

function stylingButton(event) {

  const button = event.target;
  const button1 = event.currentTarget;
  console.log("evenet target:- ",button);
  console.log("event current targett:- ",button1);

  Object.assign(button.style,{
    color : "black",
    backgroundColor: "yellow",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    border: "2px solid black",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
    cursor: "pointer",
    borderRadius: "15px",
  });
  button.innerText = "Hi Adithya, mail from AccioJobs...";
};


// Btn1.addEventListener("click", stylingButton);
// Btn2.addEventListener("click", stylingButton);