// const promisesOne = new Promise(function(resolve, reject){
// // Do an async task
// // db calls network calls

// setTimeout(function(){
// console.log('Async function is completed');
// resolve()
// }, 1000);
// });

// promisesOne.then(function(){
// console.log('Resolved Promise');
// })

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let success = false;
//     console.log("Async task two...");
//     if (success) {
//       resolve("All Good...");
//     } else {
//       reject("All Bad...");
//     }
//   }, 1000);
// })
//   .then((FinalAns) => {
//     console.log("Resolved", FinalAns);
//   })
//   .catch((e) => {
//     console.log(`Error ${e} has been occured...`);
//   });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     console.log("Async task two...");

//     if (!error) {
//       resolve({ username: "Adithya", passCode: "************" });
//     } else {
//       reject("All Bad...");
//     }
//   }, 1000);
// });

// promiseThree
//   .then((user) => {
//     console.log(then);
//     //          return {username: user.username, passCode: user.passCode};
//     // }).then((data) => {
//     //          console.log(`UserName:- ${data.username}`);
//     //          return data.passCode
//     // })
//     // .then((PassWord) => {
//     //          console.log(`PassWord:- ${PassWord}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const ProfileName = "Adithya Sharma";
// const ProfilePost = "AccioJobs Posts";
// const ProfileMessages =
//   'We are here to inform you that you have placed at the company "Not Revel Now" at package of 15 lakhs!!! Congrulations.';

// function FetchProfileName(ProfileName) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (ProfileName) {
//         //  console.log("ProfileName: ", ProfileName);
//         resolve(`Helo ${ProfileName}. `);
//       } else {
//         reject(`This is the error occured while checking the ProfileName`);
//       }
//     }, 1000);
//   });
// }
// function FetchProfilePosts(ProfilePost) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (ProfilePost) {
//         // console.log("ProfilePosts: ", ProfilePost);
//         resolve(`This is the new Profile Name of ${ProfilePost}...`);
//       } else {
//         reject(`This is the error occured while checking the ProfilePost`);
//       }
//     }, 1500);
//   });
// }
// function FetchProfileMessages(ProfileMessages) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (!ProfileMessages) {
//         //                                     console.log("ProfileMessages: ", ProfileMessages);
//         resolve(`${ProfileMessages}...`);
//       } else {
//         reject(`This is the error occured while checking the ProfileMessages`);
//       }
//     }, 500);
//   });
// }

// Promise.allSettled([
//   FetchProfileName(ProfileName),
//   FetchProfilePosts(ProfilePost),
//   FetchProfileMessages(ProfileMessages),
// ])
//   .then((data) => {
//     const [ProfileName, ProfilePost, ProfileMessages] = data;
//     console.log("All Data Fected...");
//     console.log(ProfileName);
//     console.log(ProfilePost);
//     console.log(ProfileMessages);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// const fetchDetails = fetch("https://adithyasharma.netlify.app");

// fetchDetails
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Please Check the request...");
//     }
//     console.log(response.status, response.ok);
//     return response.text();

//   })
//   .then((data) => {
//     console.log("Fetched Data: ", data);
//     console.log(typeof data);
//     return data;
//   })
//   .then((data) => {
//     const newDom = new DOMParser();
//     const doc = newDom.parseFromString(data, "text/html");

//     const pageTitle = doc.querySelector("title")?.textContent?.trim() || 'No title Found...Sorry...';
//     console.log(pageTitle);
//   })
//   .catch((error) => {
//     console.log(
//       error.message
//     );
//   });

// Prototype
// const Myname = "adithya";

// Object.prototype.trueLength = function () {
//   console.log(`True length is: ${this.trim().length}`);
// };
// Myname.trueLength();

class React {
  constructor() {
    this.name = "Adithya Sharma";
    this.uid = "10598";

    document
      .getElementById("Btn")
      .addEventListener("click", this.handleClick());
    //     document.getElementById("Btn").addEventListener("click", ()=> {
    //                                         console.log("Button Cliked First time...");
    //     });
  }
  handleClick() {
    console.log("Button Clicked");
    console.log(
      `this is the name ${this.name} & uid ${this.uid}... please contanct them...`
    );
  }
}

// why this handle click function is passed in the line of code 161 is showin me the any when not attached the this.keyqword but showing the rea ct and this fucntionwhen attached the this keyword??
