
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



let profileView = document.getElementById('profile-view'),
aboutView = document.getElementById('about-view'),
fileView = document.getElementById('file-view'),
file2View = document.getElementById('file2-view'),
textView = document.getElementById('text-view'),
textShow = document.getElementById('text-show'),
firstName = document.getElementById('first-name'),
lastName = document.getElementById('last-name'),
pdfView = document.getElementById('pdf-view'),
img = document.getElementById('img'),
imgAbout = document.getElementById('imgAbout'),
imgSkill = document.getElementById('imgSkill'),
pdf = document.getElementById('pdf');
/*
const curr_uid = 'xDToq8wzIjbHkZbbDUJFyUJwodH2'
firebase.database().ref('Users/' + curr_uid ).once('value').then(function (snapshort){
  var firstname = snapshort.val().First_Name;
  var lastname = snapshort.val().Last_Name;
  document.getElementById('first-name').innerHTML = firstname;
  document.getElementById('last-name').innerHTML = lastname;
})
*/



var curr_uid;
firebase.auth().onAuthStateChanged(user => {
  var user = firebase.auth().currentUser;
  firebase.database().ref('Users/' + user.uid).once('value').then(function (snapshort){
  var other_id = snapshort.val().other_id;
  curr_uid = other_id;

  firebase.storage().ref('user/' + curr_uid + '/image/' + 'profile.jpg').getDownloadURL().then(imgUrl =>{
    img.src = imgUrl;
    imgAbout.src = imgUrl;
    imgSkill.src = imgUrl;
  })

  firebase.database().ref('Users/' + curr_uid).once('value').then(function (snapshort){
    var firstname = snapshort.val().First_Name;
    var job = snapshort.val().Occupation;
    var university = snapshort.val().University;
    document.getElementById('first-name').innerHTML = firstname;
    document.getElementById('job').innerHTML = job;
    document.getElementById('school').innerHTML = university;
  })

  firebase.database().ref('Users/' + curr_uid).once('value').then(function (snapshort){

    var about = snapshort.val().About;

    document.getElementById('about-show').innerHTML = about;
  })

  firebase.database().ref('Users/' + curr_uid).once('value').then(function (snapshort){
    var info = snapshort.val().Intro;
    document.getElementById('info-show').innerHTML = info;
  })

  firebase.storage().ref('user/' + curr_uid + '/image/' + 'research.pdf').getDownloadURL().then(pdfUrl =>{
    pdf.src = pdfUrl;
  })


  })
})

function goToLinkedin(){
  var curr_uid;
  firebase.auth().onAuthStateChanged(user => {
    var user = firebase.auth().currentUser;
    firebase.database().ref('Users/' + user.uid).once('value').then(function (snapshort){
    var other_id = snapshort.val().other_id;
    curr_uid = other_id;

      firebase.database().ref('Users/' + curr_uid).once('value').then(function (snapshort){
        var linkedin = snapshort.val().Linkedin;
        window.open(String(linkedin));
      })
  })
})
}

function goToBehance(){
  var curr_uid;
  firebase.auth().onAuthStateChanged(user => {
    var user = firebase.auth().currentUser;
    firebase.database().ref('Users/' + user.uid).once('value').then(function (snapshort){
    var other_id = snapshort.val().other_id;
    curr_uid = other_id;

      firebase.database().ref('Users/' + curr_uid).once('value').then(function (snapshort){
        var behance = snapshort.val().Behance;
        window.open(String(behance));
      })
  })
})
}

function goToGithub(){
  var curr_uid;
  firebase.auth().onAuthStateChanged(user => {
    var user = firebase.auth().currentUser;
    firebase.database().ref('Users/' + user.uid).once('value').then(function (snapshort){
    var other_id = snapshort.val().other_id;
    curr_uid = other_id;

      firebase.database().ref('Users/' + curr_uid).once('value').then(function (snapshort){
        var github = snapshort.val().Github;
        window.open(String(github));
      })
  })
})
}
// const curr_uid ="xDToq8wzIjbHkZbbDUJFyUJwodH2";

/*
firebase.database().child("user").orderByChild("first-name").equalTo("Shengze").addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot snapshot) {
         List<User> data = new ArrayList<>();
                if (dataSnapshot.exists()) {
            for (DataSnapshot snapshot :
                    dataSnapshot.getChildren()) {
               User element = snapshot.getValue(User.class);
                element.setKey(snapshot.getKey());
                data.add(element);

            }
            User user = data.get(0);
            var firstname = snapshort.val().First_Name;
            document.getElementById('first-name').innerHTML = firstname;
    @Override
    public void onCancelled(DatabaseError databaseError) {
        window.alert("load error");
    }

});
*/
/*
firebase.auth().onAuthStateChanged(user => {
  var user = firebase.auth().currentUser;
  if(user){
    firebase.storage().ref('user/' + user.uid + '/image/' + 'profile.jpg').getDownloadURL().then(imgUrl =>{
      img.src = imgUrl;
      imgAbout.src = imgUrl;
      imgSkill.src = imgUrl;
    })

    firebase.database().ref('Users/' + user.uid).once('value').then(function (snapshort){
      var firstname = snapshort.val().First_Name;
      var lastname = snapshort.val().Last_Name;
      document.getElementById('first-name').innerHTML = firstname;
      document.getElementById('last-name').innerHTML = lastname;
    })

    firebase.database().ref('Users_About/' + user.uid).once('value').then(function (snapshort){

      var about = snapshort.val().User_about;

      document.getElementById('about-show').innerHTML = about;
    })

    firebase.database().ref('Users_Introduction/' + user.uid).once('value').then(function (snapshort){
      var info = snapshort.val().User_info;
      document.getElementById('info-show').innerHTML = info;
    })

    firebase.storage().ref('user/' + user.uid + '/image/' + 'research.pdf').getDownloadURL().then(pdfUrl =>{
      pdf.src = pdfUrl;
    })

  }
})
*/
