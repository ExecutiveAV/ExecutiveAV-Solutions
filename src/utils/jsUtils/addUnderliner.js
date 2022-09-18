import { collection, getDocs } from 'firebase/firestore';

export const getOptions = async (kind, db) => {
    const querySnapshot = await getDocs(collection(db, kind));
    let results = [];
    querySnapshot.forEach(doc => {
        results.push(doc.id);
    })
    return results;
}