import { sql } from "./db.js";

sql`DROP TABLE IF EXISTS videos;`.then(() => {
  console.log("Table dropped");
});

// sql`
//     CREATE TABLE videos (
//         id TEXT PRIMARY KEY,
//         title TEXT,
//         description TEXT,
//         price TEXT,
//         image TEXT
//     );
// `.then(() => {
//   console.log("Table created");
// });
