import firebase from "firebase";
import "firebase/firestore";
import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

//Custom Reducers todo

const firebaseConfig = {
  apiKey: "AIzaSyBpRZoxX7nudzXfHpCus6pqe3_Kyz6m_zo",
  authDomain: "reactclientpanel-4a98a.firebaseapp.com",
  databaseURL: "https://reactclientpanel-4a98a.firebaseio.com",
  projectId: "reactclientpanel-4a98a",
  storageBucket: "reactclientpanel-4a98a.appspot.com",
  messagingSenderId: "1020385665419"
};

// Config for React-Redux-Firebase
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestore instance
firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create and initial State
const initialState = {};

// Create Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
