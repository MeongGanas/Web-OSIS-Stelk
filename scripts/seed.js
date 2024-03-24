const { db } = require("@vercel/postgres");
const { bidangs, visiMisi, admins } = require("../app/lib/placeholder-data");
const bcrypt = require("bcrypt");

async function seedBidang(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS bidangs (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
        );
    `;

    console.log(`Created "bidangs" table`);

    const insertedBidangs = await Promise.all(
      bidangs.map(async (bidang) => {
        return client.sql`
        INSERT INTO bidangs (id, name)
        VALUES (${bidang.id}, ${bidang.name})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedBidangs.length} users`);

    return {
      createTable,
      bidangs: insertedBidangs,
    };
  } catch (error) {
    console.error("Error seeding bidangs:", error);
    throw error;
  }
}

async function seedVisiMisi(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS visiMisi (
        periode VARCHAR(12) PRIMARY KEY,
        visi TEXT NOT NULL,
        misi JSON NOT NULL
        );
    `;

    console.log(`Created "visiMisi" table`);

    const insertedVisiMisi = await client.sql`
    INSERT INTO visiMisi (periode, visi, misi)
    VALUES (${visiMisi.periode}, ${visiMisi.visi}, ${JSON.stringify(
      visiMisi.misi
    )})
    ON CONFLICT (periode) DO NOTHING;
  `;

    console.log(`Seeded visi misi`);

    return {
      createTable,
      visiMisi: insertedVisiMisi,
    };
  } catch (error) {
    console.error("Error seeding bidangs:", error);
    throw error;
  }
}

async function seedAdmin(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
        );
    `;

    console.log(`Created "admins" table`);

    const insertedAdmins = await Promise.all(
      admins.map(async (admin) => {
        const hashed_pass = await bcrypt.hash(admin.password, 10);
        return client.sql`
        INSERT INTO admins (name, email, password)
        VALUES (${admin.name}, ${admin.email}, ${hashed_pass})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded admins`);

    return {
      createTable,
      admin: insertedAdmins,
    };
  } catch (error) {
    console.error("Error seeding bidangs:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedBidang(client);
  await seedVisiMisi(client);
  await seedAdmin(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
