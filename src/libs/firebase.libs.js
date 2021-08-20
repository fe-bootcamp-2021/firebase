import firebase from "firebase/app";
import "firebase/auth";

console.log(process.env.API_KEY);

export default firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  appID: process.env.REACT_APP_APP_ID,
});
