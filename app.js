// Initialize Firebase
const firebaseConfig = {
  // Add Firebase configuration here
};
firebase.initializeApp(firebaseConfig);

// Get references to UI elements
const authSection = document.getElementById('authSection');
const dataSection = document.getElementById('dataSection');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const dataForm = document.getElementById('dataForm');
const dataDisplay = document.getElementById('dataDisplay');
const logoutButton = document.getElementById('logoutButton');

// Handle user registration
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      console.error('Error during registration:', error);
    });
});

// Handle user login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.error('Error during login:', error);
    });
});

// Handle user logout
logoutButton.addEventListener('click', () => {
  firebase.auth().signOut();
});

// Monitor user authentication state
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is logged in
    authSection.style.display = 'none';
    dataSection.style.display = 'block';

    // Handle data submission
    dataForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const dataInput = document.getElementById('dataInput').value;

      firebase.firestore().collection('data').add({ 
        uid: user.uid, 
        content: dataInput 
      })
      .catch((error) => {
        console.error('Error adding data:', error);
      });
    });

    // Listen for data changes and display the data
    firebase.firestore().collection('data').where('uid', '==', user.uid).onSnapshot((snapshot) => {
      dataDisplay.innerHTML = '';
      snapshot.forEach((doc) => {
        const data = doc.data();
        dataDisplay.innerHTML += `<p>${data.content}</p>`;
      });
    });
  } else {
    // User is logged out
    authSection.style.display = 'block';
    dataSection.style.display = 'none';
  }
});
