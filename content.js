/* ============================================================
   ✏️  HIER PAS JE ALLES AAN — je hoeft index.html nooit aan te raken.
   Tips:
   - Zet je plaatjes/gifs in de map "images" naast dit bestand
     en verwijs ernaar, bijv.  gif: "images/mijngame.gif"
   - Mist een gif of foto? Dan zie je automatisch een kleurvlak met de titel.
   - Let op de komma's en aanhalingstekens "..." — die moeten kloppen.
   - Wil je een nieuw project? Kopieer een blok { ... }, plak 'm eronder en pas aan.
   ============================================================ */

const SITE = {

  // ---------- Over jou ----------
  naam:      "Felix Nieuwenhuijsen",
  rol:       "Game Developer in opleiding",
  opleiding: "3e jaars Game Development · Grafisch Lyceum Utrecht",
  tagline:   "Ik bouw games met een sterke game feel en schone, onderhoudbare code.",
  foto:      "images/ik.png",        // leeg laten ("") = emoji i.p.v. foto
  email:     "felixnieuwenhuijsen@gmail.com",
  cv:        "",                      // bijv. "cv.pdf" (zet het bestand naast index.html), of leeg laten

  // ---------- De 3 MAIN games (staan op de startpagina) ----------
  uitgelicht: [
    {
      titel:  "Food Fight",
      gif:    "images/foodfightgif.gif",
      genre:  "Brawler, Fightinh",
      engine: "Unity",
      rol:    "Gameplay programmer",
      team:   "Team van 5",
      jaar:   "2026",
      beschrijving: "Wat is het voor game, wat was jouw bijdrage en wat heb je ervan geleerd? Twee tot drie zinnen is genoeg.",
      tags:   ["C#", "Unity", "Game feel"],
      links:  [
        { naam: "Speel op itch.io", url: "https://remonbeiboer.itch.io/foodfight" },
        { naam: "GitHub",          url: "https://github.com" }
      ]
    },
    {
      titel:  "We got card games at home",
      gif:    "images/cardgamesgif.gif",
      genre:  "Card-game, Strategy",
      engine: "Unity",
      rol:    "Solo developer",
      team:   "Solo",
      jaar:   "2026",
      beschrijving: "Korte uitleg over je tweede game.",
      tags:   ["C#", "Aseprite", "Unity", "Shaders"],
      links:  [ { naam: "Speel op itch.io", url: "https://denieuwefelix.itch.io/we-got-card-games-at-home" } ]
    },
    {
      titel:  "Game Drie",
      gif:    "images/game3.gif",
      genre:  "Shooter",
      engine: "Unreal Engine",
      rol:    "AI & tools programmer",
      team:   "Team van 8",
      jaar:   "2026",
      beschrijving: "Korte uitleg over je derde game.",
      tags:   ["C++", "Blueprints", "AI"],
      links:  [ { naam: "Trailer", url: "https://youtube.com" } ]
    }
  ],

  // ---------- Overige projecten (komen alleen in het tabblad "Mijn werk") ----------
  overig: [
    {
      titel: "Game Jam Project",
      gif:   "images/jam.gif",
      genre: "Arcade", engine: "Unity", rol: "Programmer", team: "Team van 3", jaar: "2024",
      beschrijving: "48 uur, 1 thema, veel koffie.",
      tags:  ["Game jam"],
      links: []
    },
    {
      titel: "Shader Experiment",
      gif:   "images/shader.gif",
      genre: "Tech demo", engine: "Unity", rol: "Solo", team: "Solo", jaar: "2024",
      beschrijving: "Een experiment met shaders en visuele effecten.",
      tags:  ["HLSL", "VFX"],
      links: []
    }
  ],

  // ---------- Tabblad "Over mij" ----------
  overMij: [
    "Ik ben derdejaars Game Development student. Vertel hier kort wie je bent en waar je goed in bent.",
    "Tweede alinea: waar ben je naar op zoek (stage, afstuderen, baan) en wat voor games wil je maken?"
  ],

  // Skills: ["naam", niveau van 0 tot 100]
  skills: [
    ["C# / Unity", 85],
    ["C++ / Unreal", 60],
    ["Game design", 70],
    ["Git / teamwork", 80]
  ],

  tools: ["Unity", "Unreal Engine", "Godot", "Blender", "Git", "Aseprite", "Jira"],

  // ---------- Socials ----------
  socials: [
    { naam: "GitHub",    handle: "@jouwnaam", url: "https://github.com/" },
    { naam: "itch.io",   handle: "jouwnaam",  url: "https://itch.io/" },
    { naam: "LinkedIn",  handle: "Jouw Naam", url: "https://linkedin.com/" },
    { naam: "YouTube",   handle: "@jouwnaam", url: "https://youtube.com/" },
    { naam: "Instagram", handle: "@jouwnaam", url: "https://instagram.com/" }
  ]
};
