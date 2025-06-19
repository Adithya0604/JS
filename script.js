// function Scroll() {
//   console.log("Heloo");
// }


// const Btn1 = document.getElementById("child1");
// const Btn2 = document.getElementById("child2");
// const Btn3 = document.getElementById("child3");

// const buttons = [Btn1, Btn2, Btn3];
// buttons.forEach((button) => {
//   if(button){
//   button.addEventListener("click", stylingButton); // direct attach of listner to the buttons in the container.
//   }
// });

// function stylingButton(event) {

//   const button = event.target;
//   const button1 = event.currentTarget;
//   console.log("evenet target:- ",button);
//   console.log("event current targett:- ",button1);

//   Object.assign(button.style,{
//     color : "black",
//     backgroundColor: "yellow",
//     padding: "10px",
//     fontSize: "20px",
//     fontWeight: "bold",
//     border: "2px solid black",
//     boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
//     cursor: "pointer",
//     borderRadius: "15px",
//   });
//   button.innerText = "Hi Adithya, mail from AccioJobs...";
// };




// // Btn1.addEventListener("click", stylingButton);
// // Btn2.addEventListener("click", stylingButton);



// // const Parent = document.querySelector('.parent');
//   // console.log(Parent);
//   // console.log(Parent.children);
//   // console.log(Parent.children[1].innerHTML);

//   // for (let i = 0; i < Parent.children.length; i++) {
//   //   console.log(Parent.children[i].innerHTML);
//   // };

//   // console.log(Parent.childNodes);


//   // const Div = document.createElement('div');
//   // console.log(Div);

  
// //******************* Div Creation using createElement Method *******************

//   // Div.className = "MyDivClass";
//   // Div.id = Math.round(Math.random() * 10 + 1);
//   // Div.setAttribute('title', 'Generate this Div');
//   // Div.style.backgroundColor = "red";
//   // Div.style.width = "100px";
//   // Div.style.height = "50px";
//   // Div.style.margin = "10px auto";
//   // Div.style.padding = "10px";
//   // Div.style.textAlign = "center";
//   // Div.style.lineHeight = "center";
//   // Div.style.borderRadius = "10px";
//   // Div.style.border = "2px solid yellow";
//   // // Div.innerHTML = "This is a dynamically created div";
//   // const textNode = document.createTextNode("Adithya Sharma");
//   // Div.appendChild(textNode);
//   // document.body.appendChild(Div);

// //******************* Nested Div Creation using createElement Method *******************
  
//   // const wapperDiv = document.createElement('div');
//   // wapperDiv.style.width = "300px auto";
//   // wapperDiv.style.height = "100px";
//   // wapperDiv.style.padding = "10px";
//   // wapperDiv.style.margin = "10px";
//   // wapperDiv.style.borderRadius = "10px";
//   // wapperDiv.style.border = "2px solid yellow";
  

//   // const heading = document.createElement('h2');
//   // heading.textContent = "This is my Nested Div Created by 'createElement'.";


//   // const description = document.createElement('p');
//   // description.textContent = "This is a description of the nested div created by 'createElement' method. It is used to demonstrate how to create and manipulate DOm elements using JavaScript.";


//   // const button = document.createElement('button');
//   // button.style.width = "100px auto";
//   // button.style.height = "50px";
//   // button.style.padding = "10px";
//   // button.style.margin = "10px";
//   // button.style.borderRadius = "10px";
//   // button.style.border = "2px solid yellow";
//   // button.textContent = "Hi This is a Nested Button. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

//   // button.addEventListener('click',() => {
//   //     wapperDiv.style.display = "none";
//   // });
  
//   // wapperDiv.appendChild(heading);
//   // wapperDiv.appendChild(description);
//   // wapperDiv.appendChild(button);

//   // document.body.appendChild(wapperDiv);

  

// //******************* Dynamic Card Creation *******************

// // ******** So, In this we have just created the Dynamic Card Creation using CreateElement Method. Like we have given the array of content where we have the title and body of the card and this wil eb wappered in the section tag and this section tag wil be in div tag. 
// // ******** And we have also added the delete button to delete the card when clicked on it. This Div tag is only one for all the array content but for every array content induvially we hav to creat a section and heading and para and delete button. After that we have added the text content inside the heading an para are title and body of the array respectively. We have to wapper that heading & para inside the section and the section inside the Div.

// /*
// const array = [
//   { title: "Card A", body: "Lorem ipsum…" },
//   { title: "Card B", body: "Dolor sit amet…" },
//   { title: "Card C", body: "Lorem ipsum…" },
//   { title: "Card D", body: "Dolor sit amet…" },
//   { title: "Card E", body: "Lorem ipsum…" },
//   { title: "Card F", body: "Dolor sit amet…" },
//   { title: "Card G", body: "Lorem ipsum…" },
//   { title: "Card H", body: "Dolor sit amet…" },
//   { title: "Card I", body: "Lorem ipsum…" },
//   { title: "Card J", body: "Dolor sit amet…" },
//   { title: "Card L", body: "Lorem ipsum…" },
//   { title: "Card M", body: "Dolor sit amet…" },
// ];

// const wapperdiv = document.createElement('div');
// wapperdiv.id = "cardContainer";
// wapperdiv.style.display = "flex";
// wapperdiv.style.flexWrap = "wrap";
// wapperdiv.style.justifyContent = "space-evenly";
// wapperdiv.style.margin = "20px auto";
// wapperdiv.style.padding = "20px";
// wapperdiv.style.backgroundColor = "#212121";
// wapperdiv.style.borderRadius = "10px";
// wapperdiv.style.border = "2px solid yellow";

// const InputFilter = document.createElement('input');
// InputFilter.type = 'search';
// InputFilter.placeholder = "Search Cards";
// InputFilter.style.justifyItems = "center";
// InputFilter.style.alignItems = "center";
// InputFilter.style.display = 'block';
// InputFilter.style.width = '300px';
// InputFilter.style.height = '40px';
// InputFilter.style.margin = '20px auto';
// InputFilter.style.padding = '10px 20px';
// InputFilter.style.borderRadius = '25px';
// InputFilter.style.border = '2px solid yellow'; 
// InputFilter.style.fontSize = '16px';
// InputFilter.style.fontFamily = 'Arial, sans-serif';
// InputFilter.style.textAlign = 'center';


// InputFilter.addEventListener('input', () => 
// {
//   // Logic 1

//   const SearchValue = InputFilter.value.toLowerCase();

//   const CardClass = document.querySelectorAll('.card');

//   CardClass.forEach(Carditems => {
//     const title = Carditems.querySelector('h3').textContent.toLowerCase();

//     if(title.includes(SearchValue)){
//       Carditems.style.display = 'flex';
//     }
//     else{
//       Carditems.style.display = 'None';
//     } 
//   });

//   // Logic 2
  
//   const Searchbar = InputFilter.value.toLowerCase();
//   if(Searchbar === "")
//   {
//     alert('Please enter a value to search');
//   }
//   else if(Searchbar !== "")
//   {
//     const cardClass = document.querySelectorAll('.card');
//     console.log(cardClass);
    
//     for (let i = 0; i < cardClass.length; i++) 
//     {
//       const SearchTitle = cardClass[i].querySelector('h3').textContent.toLowerCase();
//         if(SearchTitle === Searchbar)
//         {
//           cardClass[i].style.display = "flex";
//         }
//         else
//         {
//            cardClass[i].style.display = "none";
//         }
//     }
//   }
// });

// wapperdiv.appendChild(InputFilter);


// for (let i = 0; i < array.length; i++) {

// const wappersection = document.createElement('section');

//   wappersection.className = "card";
//   wappersection.style.width = "300px";
//   wappersection.style.height = "200px";
//   wappersection.style.margin = "10px";
//   wappersection.style.padding = "10px";
//   wappersection.style.borderRadius = "10px";
//   wappersection.style.border = "2px solid yellow";
//   wappersection.style.backgroundColor = "#333";
//   wappersection.style.color = "white";
//   wappersection.style.display = "flex";
//   wappersection.style.flexDirection = "column";
//   wappersection.style.justifyContent = "center";
//   wappersection.style.alignItems = "center";
//   wappersection.addEventListener('mouseenter', () => {
//       wappersection.style.transform = "scale(1.023)";
//   });
//   wappersection.addEventListener('mouseleave', () => {
//       wappersection.style.transform = "scale(1)";
//   });


// const heading = document.createElement('h3');
// heading.style.backgroundColor = "green";
// heading.style.color = "white";
// heading.style.padding = "10px";
// heading.style.borderRadius = "5px";
// heading.style.textAlign = "center"; 
// heading.style.marginBottom = "10px";
// heading.style.width = "50%";


// const para = document.createElement('p');
// para.style.backgroundColor = "blue";
// para.style.color = "white";
// para.style.padding = "10px";
// para.style.borderRadius = "5px";
// para.style.textAlign = "center"; 
// para.style.marginBottom = "10px";
// para.style.width = "100%";

// const DeleteButton = document.createElement('button');
// DeleteButton.textContent = "Delete";
// DeleteButton.style.width = '100px auto';
// DeleteButton.style.backgroundColor = "red";
// DeleteButton.style.color = "white";
// DeleteButton.style.padding = "10px";
// DeleteButton.style.borderRadius = "50px";
// DeleteButton.style.border = "none";
// DeleteButton.style.cursor = "pointer";
// DeleteButton.addEventListener('click',() => {
//    DeleteButton.parentElement.remove();
//    alert("Card Deleted");
//    console.log("Card Deleted");
// });

  
//   heading.textContent = array[i].title;
//   para.textContent = array[i].body;

//   wappersection.appendChild(heading);
//   wappersection.appendChild(para);
//   wappersection.appendChild(DeleteButton);
  
//   wapperdiv.appendChild(wappersection);
  
// };



// document.body.appendChild(InputFilter);
// document.body.appendChild(wapperdiv);


// */


//  document.addEventListener('', () => {

//   false;
//  });

//  ```
//  javascript 

//  const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// // node list has this foreach but not in html node list
// buttons.forEach((currentbutton) => {
//   currentbutton.addEventListener('click', (colorChangeEvent) => {
//     // console.log(colorChangeEvent);
//     // console.log(colorChangeEvent.target);
//     console.log(colorChangeEvent.currentTarget);

//     // Scanble way right fof more like 1000 or more button to change the color.
//     body.style.backgroundColor = colorChangeEvent.currentTarget.id;

//     // if (colorChangeEvent.target.id === 'grey') {
//     //   body.style.backgroundColor = colorChangeEvent.target.id;
//     // }f
//     // if (colorChangeEvent.target.id === 'white') {
//     //   body.style.backgroundColor = colorChangeEvent.target.id;
//     // }
//     // if (colorChangeEvent.target.id === 'blue') {
//     //   body.style.backgroundColor = colorChangeEvent.target.id;
//     // }
//     // if (colorChangeEvent.target.id === 'yellow') {
//     //   body.style.backgroundColor = colorChangeEvent.target.id;
//     // }
//     // if (colorChangeEvent.target.id === 'black') {
//     //   body.style.backgroundColor = colorChangeEvent.target.id;
//     // }
//   });
//   true;
// });

//  

// const CreateBox = document.querySelector('.CreateBoxes');
// const BoxGrid = document.querySelector('.grid');
// const ActualBox = document.querySelectorAll('.box');


// Event Delegation for dynamically created boxes

// ``` JavaScript 

// so when the user is cliking one the button i have added the event listener to the button telling that whn clicked on button then create a new element "DIV" and add it to the class list of box where all of them are there and then append that int to the grid of all boxes like the main one.
// And when we click on that button the new div is created right... it is working but when we toogle(dark/light) we can't see any thing changes for theat new one.
// and here the main point is tht the new div is scoped to the createBox only it can't access from outside right.

// Then we have creating the loop of for each on the boxes of orginal one not the created new one and we are doing the toggle on them so we are only doing on them not no the new one keep right... then this will only create the new div but don't do any toggle operatioin on them. 

// // So this is going to work but not that efficent. 

// // 2nd Approch

// we will be doing this with the help of event delegtion like we will be keeping the event listner on the parent and then we will target to the child only when that child is cliked we will do the toggle operation other wise nothing.


// ```

// *******  1st Method  ******


//      newDiv.addEventListener('click', () => {
  //         newDiv.classList.toggle('clicked');
  //     });
  // })
  
  // ActualBox.forEach(ACBX => {
    //     ACBX.addEventListener('click', e => {
      //           ACBX.classList.toggle("clicked");
      //     })
      // })
      
      
      // *******  1st Method  ******
      
      // typeOfAction = Click, ClassSelector = .box , OperationToBeDone = Toggle
      
      //  This is common this should be created companlusry.
      // CreateBox.addEventListener('click', () => {
        //   const newDiv = document.createElement('div');
        //   newDiv.classList.add('box');
        //   BoxGrid.append(newDiv);
        // })
        
        
        // //  this can be changed like this is the function which tells that we have to change the dark light thing in that boxes.
        // let clickcount = 0;
        // function ChangeTheToggleInBoxes(typeOfAction, ClassSelector, OperationToBeDone) {
        //   BoxGrid.addEventListener(typeOfAction, e => {
        //     if(e.target.matches(ClassSelector)){
        //       clickcount++;
        //       OperationToBeDone(e, clickcount);
        //     }
        //   });
        // }
        
        // ChangeTheToggleInBoxes('click', '.box', (e) => {
        //   e.target.classList.toggle("clicked","clicked1"); // removingf all the clors and when clicked acorind to that we are adding the colro that is also color.
          
          //  first method  :- if else method 
          // if (count % 2 === 0){
            //   e.target.classList.add("clicked");
            // }
            // else if (count % 2 !== 0){
              //   e.target.classList.add("clicked1");
              // }
              
              // second method : ternary method 
            //   let color = clickcount % 2 === 0 ? 'clicked':'clicked1';
            //   e.target.classList.add(color);
              
              
            // });
            
            
            // ChangeTheToggleInBoxes('scroll', '.box', e => {
              //   e.target.classList.newDiv
              // });
              
              
              
              
              // =====================
              
              // const container = document.querySelectorAll('#container');
              
              // console.log("constiener Children :- ", container.children);
              // console.log("constiener Childnodes :- ", container.childNodes);
              // console.log("conainer child", container.child);
              // console.log("container child count:- ", container.childElementCount);
              // // console.log("container child node:- ", container.hasChildNodes());
              
              
              // **************
              // const grandparent = document.querySelector('.grandparent');
              // const parent = document.getElementById('parent-id');
              // const Children = Array.from(document.getElementsByClassName('child'));
              
              // changeColor(grandparent); This dont work for the classname to do any operations right we have to tell that this are the elements to be do on operations. so classname then use this [indexOfElemets]
              // changeColor(grandparent);
              
              // parent.forEach(changeColor); //This will work for all of them like if there are "n" elements inthat then it will do the operation on that n elements ok.
              // changeColor(parent[0]) // only on the spefic elemtn right. so , spefic then with out foreach 
              
              
              // Changes for all the element at once right. 
              // Children.forEach(innerchild => {
                //   changeColor(innerchild)
                // });
                
                // changeColor(Children[3]);
                
                // grandparent.forEach(changeColor);
                
                // changeColor(parent);
                
                
                // operation for chaging the color in the traversal of the dom.
                // function changeColor(changehere){
                  //     changehere.style.backgroundColor = 'blue';
                  
                  // }
                  
                  
//  INfinte Scrolling HRotizal and vertical. so we are having this box like thing mainly one thing is iomporatnt in thsi like we have to need the height of the grid where all the elemtns can scroll or participate in that scrolling ok.
// the creation of the element are same but there is one catch here like we have to go thriught parameter every time we wil be scrolling 
// when all the things are over then apply the addevenet listenere to the parent grid of all the elements so that whejn the scrolling is started then the parent grid will only be scrolled right if we keep in the child then it is like not that clerar to scroll.
// then the formula for this infinate scrolling that the grid size if like 10 cm parent gird size ok and the client hieght is 1 cm like children hrighht ok.
// should be greeater thant the scroll height means that when we scroll the children up then the height should be 
                  
// const CreateBox = document.querySelector('.CreateBoxes');
// const BoxGrid = document.querySelector('.grid');
// const ActualBox = document.querySelectorAll('.box');
     


// function scrollLoading( LoadBox = 10){
//   for (let i = 0; i < LoadBox; i++) {
//       const newDiv = document.createElement('div');
//       newDiv.classList.add('box');
//       newDiv.textContent = `Box ${BoxGrid.children.length + 1}`;
//       BoxGrid.appendChild(newDiv);
//   }
// }

// scrollLoading(20);

// BoxGrid.addEventListener('scroll', () => {
//   console.log("Scrolling...");
//   if(BoxGrid.scrollTop + BoxGrid.clientHeight >= BoxGrid.scrollHeight - 10){
//     console.log("Loading more boxes...");
//     scrollLoading(14);
//   }
// });


// Confetti to create.
// import JSConfetti from 'js-confetti'
// const JustFun = document.querySelector('.Scrolhortal');
// const JustCards = document.querySelectorAll('.scrollCards');
// const jsConfetti = new JSConfetti()


// JustCards.forEach((cards, index) => {
//   if (index === 3){ 
//     cards.addEventListener('click', () => {
//       jsConfetti.addConfetti({
//          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
//       });
//     });
//   }
// });




