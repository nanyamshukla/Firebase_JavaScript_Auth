// Initialize Firebase
var config = {
    apiKey: "your Firebase API key",
    authDomain: "your authDomain",
    databaseURL: "your databaseURL",
    projectId: "your projectID",
    storageBucket: "your storageBucket value",
    messagingSenderId: "your messagingSenderId"
};
firebase.initializeApp(config);



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.replace("test_page.html");
        // User is signed in.
    } else {
        // No user is signed in.
        document.getElementById("entry_page").style.display = "block";
        document.getElementById("exit_page").style.display = "none";

    }
});

function signUp() {
    var userEmail = document.getElementById("email_code").value;
    var userPass = document.getElementById("pass_code").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
        // ...
    });
}

function signIn() {
    var userEmail = document.getElementById("email_code").value;
    var userPass = document.getElementById("pass_code").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
        // ...
    });
}

function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    })
}
