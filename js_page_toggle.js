
(function pageLoad() {
    // Initialize Firebase
    var config = {
        apiKey: "your Firebase API key",
        authDomain: "your authDomain",
        databaseURL: "your databaseURL",
        projectId: "your projectID",
        storageBucket: "your storageBucket value",
        messagingSenderId: "your messagingSenderId" * /
    };
    firebase.initializeApp(config);

    //window.alert("hello");
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            document.body.style.backgroundImage = "url('back2.jpg')";
            document.body.style.display = "block";
            // User signed in
        } else {
            // Not signed in
            window.location.replace("firebase_login_page.html");
        }
    });
}());

function signOut() {
    console.log("signOut called");
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    })
}


let startTimer;
let flag;
//setTimeout(function(){ flag=signOut();},10000);

startTimer = setTimeout(function () { warningDisplay() }, 15000);

function warningDisplay() {
    document.getElementById("container").style.display = "none";
    document.getElementById("container_warning").style.display = "block";
    flag = setTimeout(function () { call_signOut(); }, 10000);
}

function call_signOut() {
    signOut();
}