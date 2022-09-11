import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseKeys';

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp