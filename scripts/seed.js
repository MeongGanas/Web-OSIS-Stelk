const { db } = require("@vercel/postgres");
const { bidangs } = require("../app/libs/placeholder-data");

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

async function main() {
  const client = await db.connect();

  await seedBidang(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
