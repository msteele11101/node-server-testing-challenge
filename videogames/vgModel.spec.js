const db = require("../data/dbConfig.js");
const VideoGames = require("./vgModel");

describe("vg model", () => {
  describe("insert()", () => {
    it("should insert vide game", async () => {
      await VideoGames.insert({ gametitle: "Doom", devteam: "Bethesda" });

      const videogames = await db("videogames");
      expect(videogames.length).not.toBeLessThan(3);
    });
  });

  describe("remove()", () => {
    it("should delete videogame", async () => {
      await VideoGames.remove({ id: 1 });
      const videogames = await db("videogame");
      expect(videogames).not.toContain({
        gametitle: "WOW",
        devteam: "Blizzard"
      });
    });
  });
});