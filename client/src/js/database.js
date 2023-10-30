import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  //Open it
  const db = await openDB("jate", 1);
  // What are we doing
  const text = db.transaction("jate", "readwrite");
  // Create a storage for the data we are going to add
  const storage = text.objectStore("jate");
  //What are we adding to the DB
  const addedData = storage.put({ id: 1, content });
  // run the data I added
  const result = await addedData;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  const db = await openDB("jate", 1);
  const text = db.transaction("jate", "readonly");
  const storage = text.objectStore("jate");
  const getData = storage.get(1)
  const result = await getData;
  return result?.value;



};

initdb();
