const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");
const Card = require("../models/Credit-card");

const generateSitemap = async (req, res) => {
    res.header("Content-Type", "application/xml");
    res.header("Content-Encoding", "gzip");

    try {
        const smStream = new SitemapStream({ hostname: "https://yourwebsite.com/" });
        const pipeline = smStream.pipe(createGzip());

        // Add Static Pages
        smStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
        smStream.write({ url: "/credit-cards", changefreq: "weekly", priority: 0.9 });
        smStream.write({ url: "/hot-promotions", changefreq: "weekly", priority: 0.8 });
        smStream.write({ url: "/contact-us", changefreq: "monthly", priority: 0.7 });

        // Fetch All Credit Cards from MongoDB and Add to Sitemap
        const cards = await Card.find({}, "_id CardName"); // Get only ID & CardName
        cards.forEach(card => {
            smStream.write({
                url: `/credit-cards/${card._id}`,
                changefreq: "weekly",
                priority: 0.7
            });
        });

        // Finalize Sitemap
        smStream.end();
        streamToPromise(pipeline).then(sm => fs.writeFileSync("./sitemap.xml.gz", sm));
        pipeline.pipe(res).on("error", (err) => { throw err; });

    } catch (error) {
        console.error("Sitemap generation failed:", error);
        res.status(500).end();
    }
};

module.exports = { generateSitemap };
