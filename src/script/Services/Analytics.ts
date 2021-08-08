import firebase  from "firebase/app";
import "@firebase/analytics";
export default function InitFirebaseAnalytics() {
    const firebaseConfig = {
        apiKey: "AIzaSyAHaQDXYUBmapvU3Rz9K1O7WJRlrZrQF5A",
        authDomain: "egf-islamic-center-321017.firebaseapp.com",
        projectId: "egf-islamic-center-321017",
        storageBucket: "egf-islamic-center-321017.appspot.com",
        messagingSenderId: "49382867005",
        appId: "1:49382867005:web:ba2b53cb022a55f4116a54",
        measurementId: "G-3CKG710W7E"
      };

      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

}