// log in page is modified from https://github.com/Unicorn-NightFury/Front-end-aesthetics/tree/Demo_1

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7dOBg19mnoDdE_n2o5fV2FXoojeSDliw",
  authDomain: "eportfolio-74c20.firebaseapp.com",
  databaseURL: "https://eportfolio-74c20.firebaseio.com",
  projectId: "eportfolio-74c20",
  storageBucket: "eportfolio-74c20.appspot.com",
  messagingSenderId: "384834138871",
  appId: "1:384834138871:web:18aacf6823f9a0c3c219f2",
  measurementId: "G-LZ3LTNRGCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
/*
    Logic：
        主要采用原生 JavaScript，
        只有在发送 Ajax 请求是才使用 JQuery

    ===
    1、登录注册页面的切换逻辑

    2、Ajax发送及接受响应逻辑
    ===
*/


// 封装选择器, 采用ES6箭头函数写法
const getSelector = ele => {
    return typeof ele === "string" ? document.querySelector(ele) : "";
}


// 登录注册载入

const containerShow = () => {
    var show = getSelector(".container")
    show.className += " container-show"
}


window.onload = containerShow;


// 登录注册页切换
((window, document) => {

    // 登录 -> 注册
    let toSignBtn = getSelector(".toSign"),
        toLoginBtn = getSelector(".toLogin")
        loginBox = getSelector(".login-box"),
        signBox = getSelector(".sign-box");

    toSignBtn.onclick = () => {
        loginBox.className += ' animate_login';
        signBox.className += ' animate_sign';
    }

    toLoginBtn.onclick = () => {
        loginBox.classList.remove("animate_login");
        signBox.classList.remove("animate_sign");
    }


})(window, document);

// Ajax 请求发送



function signUp(){

  const userEmail = document.getElementById('sign-user').value;
  const userPass = document.getElementById('sign-password').value;
//  window.alert(userEmail + '  ' + userPass);
  // 去掉此处//可以redirect 到 main page

  //window.location.href = "index2.html";
  //window.location.replace("http://www.baidu.com");

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
    window.alert("Your account has been created, remember to verify your email.");
    verifyEmail();
    //window.location.href = "home.html";

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    // ...
  });

  }

function login(){

  const userEmail = document.getElementById('login-user').value;
  const userPass = document.getElementById('login-password').value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(){
  //Succesful, do whatever you want in your page
  console.log("redirect");
  //window.location.href = "index2.html";
  window.alert("Welcome  " + userEmail );

})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
    // ...
  });
  //Handle Account Status
  /*
  firebase.auth().onAuthStateChanged(use = {
    if(user) {
      window.alert("Loged In");
      window.location = "index2.html"; //After successful login, user will be redirected to home.html
    }else{
      window.alert("you never login, wrong guy");
  }
});*/
  //window.location.href = "index2.html";
  //window.alert("Loged In");
}
function resetPass(){
  var emailAddress = document.getElementById('login-user').value;

  firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
    window.alert("Please check your email to reset Password");
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
  });
}

 function logOut(){
     firebase.auth().signOut().then(function() {
    window.alert("Sign out successful");
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
  });
 }

 function verifyEmail(){
   //window.location.href = "index2.html";
   //window.alert("Loged In");
   var user = firebase.auth().currentUser;

   user.sendEmailVerification().then(function() {
 // Email sent.
   }).catch(function(error) {
     var emailerrorCode = error.code;
     var emailerrorMessage = error.message;
     window.alert(emailerrorMessage);
   });
 }


 function update(){
   //verifyEmail();
   var firstname = document.getElementById('user_first').value;
   var lastname = document.getElementById('user_last').value;
   var country = document.getElementById('user_country').value;
   var city = document.getElementById('user_city').value;
   var university = document.getElementById('user_university').value;
   var faculty = document.getElementById('user_faculty').value;
   var job = document.getElementById('user_job').value;
   //window.alert( "Welcome, "+firstname +" " + lastname);
   var rootRef = firebase.database().ref().child("Users");
   //window.alert("Database1");
   var userId = firebase.auth().currentUser.uid;
   //window.alert("Database2");
   var usersRef = rootRef.child(userId);
   //window.alert("Database3");

   if(firstname != "" && lastname != "" & country != "" & university != "" & job != ""){
     var userData ={
       "id": userId,
       "First_Name":firstname,
       "Last_Name":lastname,
       "Country": country,
       "City": city,
       "University": university,
       "Faculty": faculty,
       "Occupation": job,
       //"About":"",
       //"Intro":"",
     };
     //window.alert("If");
     usersRef.set(userData, function(error)
     {
       //window.alert("Set");
       if(error){
         var errorCode = error.code;
         var errorMessage = error.message;
         window.alert(errorMessage);
       }
       else{
         //window.alert("If");
         window.location.href = "home.html";
       }
    });

 }else{
   window.alert("Form is incomplete.");
 }
}
