const { MongoClient } = require("mongodb");

async function seed() {
    const uri = "mongodb://localhost:27017/autoshow";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("autoshow");

        await db.collection("cars").deleteMany({});
        await db.collection("logos").deleteMany({});

        await db.collection("cars").insertOne({
            toyota: {
                toyota1: {
                    images: "/car_images/toyota1.webp",
                    speed: 90,
                    handling: 85,
                    acceleration: 88,
                    launch: 75,
                    braking: 80
                },
                toyota2: {
                    images: "/car_images/toyota2.webp",
                    speed: 78,
                    handling: 87,
                    acceleration: 75,
                    launch: 70,
                    braking: 76
                },
                toyota3: { images: "/car_images/toyota3.webp", speed: 82, handling: 80, acceleration: 79, launch: 72, braking: 78 },
                toyota4: { images: "/car_images/toyota4.webp", speed: 65, handling: 75, acceleration: 68, launch: 66, braking: 70 }
            },
            mazda: {
                mazda1: {
                    images: "/car_images/mazda1.webp",
                    speed: 88,
                    handling: 86,
                    acceleration: 85,
                    launch: 78,
                    braking: 80
                },
                mazda2: {
                    images: "/car_images/mazda2.webp",
                    speed: 75,
                    handling: 90,
                    acceleration: 72,
                    launch: 74,
                    braking: 77
                },
                mazda3: { images: "/car_images/mazda3.webp", speed: 70, handling: 78, acceleration: 69, launch: 70, braking: 72 },
                mazda4: { images: "/car_images/mazda4.webp", speed: 68, handling: 76, acceleration: 66, launch: 68, braking: 71 }
            },
            mitsu: {
                mitsu1: {
                    images: "/car_images/mitsu1.webp",
                    speed: 86,
                    handling: 84,
                    acceleration: 85,
                    launch: 79,
                    braking: 81
                },
                mitsu2: {
                    images: "/car_images/mitsu2.webp",
                    speed: 82,
                    handling: 79,
                    acceleration: 80,
                    launch: 77,
                    braking: 78
                },
                mitsu3: { images: "/car_images/mitsu3.webp", speed: 60, handling: 70, acceleration: 62, launch: 65, braking: 68 },
                mitsu4: { images: "/car_images/mitsu4.webp", speed: 72, handling: 74, acceleration: 70, launch: 69, braking: 73 }
            },
            honda: {
                honda1: {
                    images: "/car_images/honda1.webp",
                    speed: 83,
                    handling: 85,
                    acceleration: 80,
                    launch: 78,
                    braking: 79
                },
                honda2: {
                    images: "/car_images/honda2.webp",
                    speed: 89,
                    handling: 88,
                    acceleration: 87,
                    launch: 81,
                    braking: 84
                },
                honda3: { images: "/car_images/honda3.webp", speed: 75, handling: 78, acceleration: 74, launch: 72, braking: 76 },
                honda4: { images: "/car_images/honda4.webp", speed: 70, handling: 73, acceleration: 69, launch: 70, braking: 72 }
            },
            merc: {
                merc1: {
                    images: "/car_images/merc1.webp",
                    speed: 92,
                    handling: 89,
                    acceleration: 91,
                    launch: 85,
                    braking: 87
                },
                merc2: {
                    images: "/car_images/merc2.webp",
                    speed: 84,
                    handling: 83,
                    acceleration: 82,
                    launch: 80,
                    braking: 81
                },
                merc3: { images: "/car_images/merc3.webp", speed: 79, handling: 80, acceleration: 77, launch: 75, braking: 78 },
                merc4: { images: "/car_images/merc4.webp", speed: 70, handling: 74, acceleration: 73, launch: 71, braking: 74 }
            },
            porsche: {
                porsche1: {
                    images: "/car_images/porsche1.webp",
                    speed: 95,
                    handling: 93,
                    acceleration: 94,
                    launch: 89,
                    braking: 90
                },
                porsche2: {
                    images: "/car_images/porsche2.webp",
                    speed: 88,
                    handling: 87,
                    acceleration: 86,
                    launch: 84,
                    braking: 85
                },
                porsche3: { images: "/car_images/porsche3.webp", speed: 82, handling: 83, acceleration: 81, launch: 80, braking: 82 },
                porsche4: { images: "/car_images/porsche4.webp", speed: 76, handling: 78, acceleration: 75, launch: 74, braking: 76 }
            },
            nissan: {
                nissan1: {
                    images: "/car_images/nissan1.webp",
                    speed: 93,
                    handling: 90,
                    acceleration: 92,
                    launch: 88,
                    braking: 89
                },
                nissan2: {
                    images: "/car_images/nissan2.webp",
                    speed: 85,
                    handling: 83,
                    acceleration: 84,
                    launch: 82,
                    braking: 83
                },
                nissan3: { images: "/car_images/nissan3.webp", speed: 74, handling: 76, acceleration: 73, launch: 72, braking: 75 },
                nissan4: { images: "/car_images/nissan4.webp", speed: 69, handling: 72, acceleration: 68, launch: 67, braking: 70 }
            }
        });

        // Insert logos
        await db.collection("logos").insertOne({
            toyota: "/car_logos/toyota.webp",
            mazda: "/car_logos/mazda.webp",
            mitsu: "/car_logos/mitsu.webp",
            honda: "/car_logos/honda.webp",
            merc: "/car_logos/merc.webp",
            porsche: "/car_logos/porsche.webp",
            nissan: "/car_logos/nissan.webp"
        });

        console.log("Seeding complete.");
    } catch (err) {
        console.error("Seeding failed:", err);
    } finally {
        await client.close();
    }
}

seed();
