import { sql } from "./db.js";
import { randomUUID } from "crypto";

export class DatabasePostgres {
  #videos = new Map();

  async list(search) {
    let videos;

    if (search) {
      videos = await sql`select * from videos where title ilike ${
        "%" + search + "%"
      }`;
    } else {
      videos = await sql`select * from videos`;
    }

    return videos;
  }

  async create(video) {
    const videoId = randomUUID();

    const { title, description, price, image } = video;

    await sql`
      insert into videos (id, title, description, price, image)
      VALUES (${videoId}, ${title}, ${description}, ${price}, ${image})
    `;
  }

  async update(id, video) {
    const { title, description, price, image } = video;

    await sql`
      update videos
      set title = ${title}, description = ${description}, price = ${price}, image = ${image}
      WHERE id = ${id}
    `;
  }
  async delete(id) {
    await sql`
    delete from videos where id = ${id}
    `;
  }
}
