
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



let searchName = document.getElementById("searchinfo");


var searchby;

// show filter list
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function getId(id) {
   if (id == "filterName")
   {
     document.form1.ok.value = "Name";
     searchby = "First_Name";
   }
   if (id == "filterCountry")
   {
     document.form1.ok.value="Country";
     searchby = "Country";
   }
   if (id == "filterCity")
   {
     document.form1.ok.value="City";
     searchby = "City";
   }
   if (id == "filterUniversity")
   {
     document.form1.ok.value="University";
     searchby = "University";
   }
   if (id == "filterFaculty")
   {
     document.form1.ok.value="Faculty";
      searchby = "Faculty";
   }
   if (id == "filterJob")
   {
     document.form1.ok.value="Occupation";
     searchby = "Occupation";
   }
}







function delay (URL) {
    setTimeout( function() { window.location = URL }, 3000 );
}


var id_count = 0;
var id_list = [];
function SearchButtonPressed(){


  const search_name = document.getElementById("searchinfo").value;
  // console.log(search_name);
  var ref = firebase.database().ref("Users");
  var rootRef = firebase.database().ref().child("Users");
  //window.alert("Database1");
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  var userId = firebase.auth().currentUser.uid;

    var usersRef = rootRef.child(userId);

    usersRef.update({
      "other_ids": ''
    });

    usersRef.child("other_ids").remove();


    id_list = [];
    ref.orderByChild(searchby).equalTo(search_name).on("child_added", function(snapshot){
      //console.log(snapshot.val());
      id_list.push(snapshot.val().id);
      usersRef.update({
        "other_ids": id_list
      });

    })
    }
  })
  id_count = id_list.length;
  //console.log(id_count);

}

var other_id_1;
var other_id_2;
var other_id_3;
var other_id_4;

// used to display searched result
  function showResult() {
     firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
     var userId = firebase.auth().currentUser.uid;
     var other_length;

      firebase.database().ref('Users/' + user.uid  ).once('value').then(function (snapshort){
          var other_id = snapshort.val().other_ids;
          if(other_id == undefined){
            window.alert("No matched result found");
          }
          other_length = snapshort.val().other_ids.length;
          if(other_length >= 4){
            other_id_1 = other_id[0];
            firebase.auth().onAuthStateChanged(user => {
              firebase.database().ref('Users/' + other_id_1).once('value').then(function (snapshort){
                var firstname1 = snapshort.val().First_Name;
                var job1 = snapshort.val().Occupation;
                var university1 = snapshort.val().University;
                document.getElementById('user1Name').innerHTML = firstname1;
                document.getElementById('user1University').innerHTML = university1;
                document.getElementById('user1Job').innerHTML = job1;
                })
              })
            other_id_2 = other_id[1];
            firebase.auth().onAuthStateChanged(user => {
              firebase.database().ref('Users/' + other_id_2).once('value').then(function (snapshort){
                var firstname2 = snapshort.val().First_Name;
                var job2 = snapshort.val().Occupation;
                var university2 = snapshort.val().University;
                document.getElementById('user2Name').innerHTML = firstname2;
                document.getElementById('user2University').innerHTML = university2;
                document.getElementById('user2Job').innerHTML = job2;
                })
              })
              other_id_3 = other_id[2];
              firebase.auth().onAuthStateChanged(user => {
                firebase.database().ref('Users/' + other_id_3).once('value').then(function (snapshort){
                  var firstname3 = snapshort.val().First_Name;
                  var job3 = snapshort.val().Occupation;
                  var university3 = snapshort.val().University;
                  document.getElementById('user3Name').innerHTML = firstname3;
                  document.getElementById('user3University').innerHTML = university3;
                  document.getElementById('user3Job').innerHTML = job3;
                  })
                })
              other_id_4 = other_id[3];
              firebase.auth().onAuthStateChanged(user => {
                firebase.database().ref('Users/' + other_id_4).once('value').then(function (snapshort){
                  var firstname4 = snapshort.val().First_Name;
                  var job4 = snapshort.val().Occupation;
                  var university4 = snapshort.val().University;
                  document.getElementById('user4Name').innerHTML = firstname4;
                  document.getElementById('user4University').innerHTML = university4;
                  document.getElementById('user4Job').innerHTML = job4;
                  })
                })
          }
          if(other_length == 3){
            other_id_1 = other_id[0];
            firebase.auth().onAuthStateChanged(user => {
              firebase.database().ref('Users/' + other_id_1).once('value').then(function (snapshort){
                var firstname1 = snapshort.val().First_Name;
                var job1 = snapshort.val().Occupation;
                var university1 = snapshort.val().University;
                document.getElementById('user1Name').innerHTML = firstname1;
                document.getElementById('user1University').innerHTML = university1;
                document.getElementById('user1Job').innerHTML = job1;
                })
              })
            other_id_2 = other_id[1];
            firebase.auth().onAuthStateChanged(user => {
              firebase.database().ref('Users/' + other_id_2).once('value').then(function (snapshort){
                var firstname2 = snapshort.val().First_Name;
                var job2 = snapshort.val().Occupation;
                var university2 = snapshort.val().University;
                document.getElementById('user2Name').innerHTML = firstname2;
                document.getElementById('user2University').innerHTML = university2;
                document.getElementById('user2Job').innerHTML = job2;
                })
              })
              other_id_3 = other_id[2];
              firebase.auth().onAuthStateChanged(user => {
                firebase.database().ref('Users/' + other_id_3).once('value').then(function (snapshort){
                  var firstname3 = snapshort.val().First_Name;
                  var job3 = snapshort.val().Occupation;
                  var university3 = snapshort.val().University;
                  document.getElementById('user3Name').innerHTML = firstname3;
                  document.getElementById('user3University').innerHTML = university3;
                  document.getElementById('user3Job').innerHTML = job3;
                  })
                })
          }
          if(other_length == 2){
            other_id_1 = other_id[0];
            firebase.auth().onAuthStateChanged(user => {
              firebase.database().ref('Users/' + other_id_1).once('value').then(function (snapshort){
                var firstname1 = snapshort.val().First_Name;
                var job1 = snapshort.val().Occupation;
                var university1 = snapshort.val().University;
                document.getElementById('user1Name').innerHTML = firstname1;
                document.getElementById('user1University').innerHTML = university1;
                document.getElementById('user1Job').innerHTML = job1;
                })
              })
            other_id_2 = other_id[1];
            firebase.auth().onAuthStateChanged(user => {
              firebase.database().ref('Users/' + other_id_2).once('value').then(function (snapshort){
                var firstname2 = snapshort.val().First_Name;
                var job2 = snapshort.val().Occupation;
                var university2 = snapshort.val().University;
                document.getElementById('user2Name').innerHTML = firstname2;
                document.getElementById('user2University').innerHTML = university2;
                document.getElementById('user2Job').innerHTML = job2;
                })
              })


          }
          if(other_length == 1){
            other_id_1 = other_id[0];
            firebase.auth().onAuthStateChanged(user => {
              firebase.database().ref('Users/' + other_id_1).once('value').then(function (snapshort){
                var firstname1 = snapshort.val().First_Name;
                var job1 = snapshort.val().Occupation;
                var university1 = snapshort.val().University;
                document.getElementById('user1Name').innerHTML = firstname1;
                document.getElementById('user1University').innerHTML = university1;
                document.getElementById('user1Job').innerHTML = job1;
                })
              })
          }
          //console.log(other_id);
       })

       }
    })

  }

// filter out searched person
  function firstPerson() {
     firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
     var userId = firebase.auth().currentUser.uid;
     var rootRef = firebase.database().ref().child("Users");
     var usersRef = rootRef.child(userId);
     var other_id = other_id_1;
      usersRef.update({
          "other_id": other_id
          });
        }
      });
    }

    function secondPerson() {
       firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
       var userId = firebase.auth().currentUser.uid;
       var rootRef = firebase.database().ref().child("Users");
       var usersRef = rootRef.child(userId);
       var other_id = other_id_2;
        usersRef.update({
            "other_id": other_id
            });
          }
        });
      }

      function thirdPerson() {
         firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
         var userId = firebase.auth().currentUser.uid;
         var rootRef = firebase.database().ref().child("Users");
         var usersRef = rootRef.child(userId);
         var other_id = other_id_3;
          usersRef.update({
              "other_id": other_id
              });
            }
          });
        }
        function forthPerson() {
           firebase.auth().onAuthStateChanged(function(user) {
           if (user) {
           var userId = firebase.auth().currentUser.uid;
           var rootRef = firebase.database().ref().child("Users");
           var usersRef = rootRef.child(userId);
           var other_id = other_id_4;
            usersRef.update({
                "other_id": other_id
                });
              }
            });
          }
