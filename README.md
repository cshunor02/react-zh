# Csapó Hunor
B8O0LS<br />
Kliensoldali webprogramozás - ZH

# Tudnivalók
A zárthelyi megoldására 180 perc áll rendelkezésre. További 30 percet adunk a README.md fájl kitöltésére, a feladatok elolvasására, a szükséges telepítésekre, az anyagok letöltésére, összecsomagolására és feltöltésére.<br />
A feladatokat a Canvas rendszeren keresztül kell beadni. A rendszer pontban 18:30-kor lezár, ezután nincs lehetőség beadásra.<br />
A feladatok megoldásához bármilyen segédanyag használható (dokumentáció, előadás, órai anyag, cheat sheet). A zh időtartamában igénybe vett emberi és mesterséges intelligencia segítség tilos (szinkron, aszinkron, chat, fórum, ChatGPT, Copilot, stb)! Erről nyilatkoztok az alább olvasható README.md fájlban is, ahol tudomásul veszitek ennek következményeit.<br />
A feladatok nem épülnek egymásra, tetszőleges sorrendben megoldhatók.<br />
# Előkészületek
Töltsd le a keretprogramot!<br />
Az egyes feladatok könyvtárában telepíteni kell a függőségeket egyesével. Ahol server és client könyvtár van, ott ezt külön meg kell tenni.<br />
A react-zh mappát tömörítsd be és töltsd fel Canvasra!
# 1. Időjárás komponens (1-weather-component, 10 pont)
Ebben a feladatban egy időjárás előrejelző komponenst kell elkészítened. A weather.js fájlban megtalálhatod a feladathoz szükséges adatokat, az alábbi formában:
```
export const weatherList = [
  // ...
  {
    id: 10,
    name: "Moscow",
    temp: {
      celsius: 12,
      fahrenheit: 53,
    },
    details: {
      humidity: 50,
      wind: 20,
      condition: "Rainy",
    },
    iconURL: "/assets/rainy.png",
  },
  // ...
]
```
a. (2 pont) Az App komponensben töltsd be a weather.js fájlban megadott listát, amely tartalmazza a városokhoz tartozó időjárási adatokat. A listát add át a CitiesList komponensnek, és jelenítsd meg a városneveket a megadott helyen!
b. (3 pont) Kattintással lehessen kiválasztani egy várost! Kattintáskor tárold el egy állapotváltozóba a kiválasztott városhoz tartozó objektumot az App komponensben. Alapértelmezetten a lista első eleme legyen kiválasztva!
c. (2 pont) Add át a Forecast komponensnek a kiválasztott várost! Jelenítsd meg a Forecast komponensben a kiválasztott városhoz tartozó adatokat a megfelelő helyekre, amelyeket kommentekkel jelöltünk. (name, temp.celsius, humidity, wind, condition, iconUrl).
d. (3 pont) Jelenítsd meg a Forecast komponensben a városban érzékelhető hőmérsékletet, úgy, hogy a benne található changeMeasure id-val rendelkező radio gombbal meg lehessen változtatni, hogy Fahrenheit-ban vagy Celsiusban jelenik meg a hőmérséklet! Ezt egy helyi állapotváltozóban tárold! Mindkét értéket a városhoz tartozó objektumban találod.

# 2. Hibakeresés (2-find-the-problems, 10 pont)
Keresd meg és javítsd ki a hibát az alábbi két feladatban!

(5 pont) TaskA: a helyes működés szerint van egy kezdőidőpontunk, amit meg is jelenítünk. Van egy módosítható időpontunk is, amely kezdetben a kezdőidőpontnak felel meg, de a "+5 minutes" gombbal 5 perc hozzáadható. A "Toggle show seconds" gombbal pedig azt szabályozhatjuk, hogy a másodperceket fel akarjuk-e tüntetni. Igen ám, de valami hiba csúszott a megoldásba. Ha percet szeretnék hozzáadni, az nem frissül azonnal. Ha a másodpercet kapcsolgatom ki-be, akkor frissül az aktuális idő, de sajnos az eredeti is. Mi lehet a baj? Segíts megoldani, hogy helyesen működjön!

(5 pont) TaskB: a helyes működés szerin egy doboz háttérszínét és pozícióját tudjuk beállítani. Igen ám, de azt tapasztaljuk, hogy a háttérszín beállítása valami miatt nem működik. Mi lehet a baj? Segíts megoldani, hogy helyesen működjön!

# 3. Holidays (3-rest-holidays, 10 pont)
Készíts egy alkalmazást, ami lekéri a nager.date (https://date.nager.at/ (Linkek egy külső oldalra)) szolgáltatásban elérhető országok listáját, valamint egy-egy kiválasztott ország ünnepnapjait is meg tudja jeleníteni.

A feladat megoldásához szükséges végpontok:

https://date.nager.at/api/v3/AvailableCountries (Linkek egy külső oldalra): Visszaadja a szolgáltatásban elérhető országok listáját.
https://date.nager.at/api/v3/PublicHolidays/{year}/{countryCode} (Linkek egy külső oldalra): Visszaadja az ünnepnapokat egy adott ország adott évében.
Feladatok:

a. (2 pont) A szolgáltatás által elérhető országok lekérésre kerülnek.
b. (1 pont) A szolgáltatás által elérhető országok megjelenítésre kerülnek (ország, országkód).
c. (2 pont) A listában megjelenő országra kattintva lekérésre kerülnek annak ünnepnapjai.
d. (2 pont) A listában megjelenő országot kiválasztva megjelenítésre kerülnek annak ünnepnapjai.
e. (1 pont) A listában megjelenő ország legyen egy link, mutasson az adott országkódra (pl. /HU)!
f. (2 pont) A listában megjelenő ország linkjére kattintva az alsó részben routinggal jelenjenek meg az ünnepnapok!
Megjegyzés: ha a publikus REST API mégsem lenne elérhető, akkor az src/assets mappában van két JSON fájl a két végpont válaszát tartalmazván. Így ezt a két lokális fájlt is lehet használni.

# 4. Simple Blackjack (4-redux-blackjack, 10 pont)
Készíts Redux segítségével egy egyszerűbb Blackjack alkalmazást! Jelen esetben a játékot két fő játssza (osztó és a felhasználó) egy pakli francia kártyával. Először a játékos húz kártyákat az előre összekevert pakliból, addíg amíg meg nem áll, vagy túl nem lépi a 21-et (minden kártya értéke a rajta lévő szám; az ász, bubi, dáma és király mind 10-et ér). Az nyer, akinek a kártyáinak összértéke közelebb van a 21-hez és nem lépi azt túl.

Lehetséges állapottér:
```
{
   deck: [],
   hands: {
      player: [],
      dealer: []
   },
   isGameStarted: false,
   isPlayerRoundDone: false,
   roundWinner: null,
   winnings: {
      player: 0,
      dealer: 0
   }
}
```
Lehetséges action-ök:

```
NEW_GAME: új játék kezdése
NEXT_CARD: játékos új kártyát húz a pakli tetejéről
PLAYER_FINISHED: játékos jelzi, hogy megáll
DEALER_ROUND: osztó köre
```
Előre megírt segédfüggvények az utils/blackJackUtils.js -ben:
```
getSymbolFromCardId(id): visszaad egy kártyához tartozó szimbólumot (id: [0-51])
getValueFromCardId(id): visszaadja egy kártya értékét (id: [0-51])
getValueOfCards(hand): visszaadja egy játékos kártyáinak összértékét
```
Az alkalmazás tartalmaz még egy Card és egy Hand komponenst, amelyek 1-1 kártya, valamint 1-1 kártyasorozat elemeit jelenítik meg.

Feladatok:

a. (1 pont) A kártyákat 0-51 egész számokkal reprezentáljuk. Készíts egy 52 elemű tömböt, ami a kártyákat tárolja (0. eleme 0, 1. eleme 1, stb), majd keverd össze (a lodash shuffle függvénye ebben segíthet). A pakli tartalmát írd ki konzolra!
b. (1 pont) Lehessen új játékot kezdeni a "New game" gombra kattintva! Küldj egy NEW_GAME akciót, amely során az állapottér elemei inicializálásra kerülnek (a deck megkeverve, a kezek üresek, stb).
c. (2 pont) A játékos tudjon új kártyát felhúzni ("Get New Card" gomb, NEXT_CARD akció)! Ekkor a pakli tetején lévő kártya a játékos kezébe kerül. Ha kártyáinak összértéke meghaladja a 21-et (ld. getValueOfCards segédfüggvényt), akkor már ne tudjon (isPlayerRoundDone legyen igaz)! A kártyák jelenjenek is meg a felületen!
d. (1 pont) A játékos tudja befejezni a körét ("Stop" gomb, PLAYER_FINISHED akció, isPlayerRoundDone igazzá válik))! A "Get New Card" és "Stop" gombok inaktívvá válnak, a "Play Dealer" aktívvá.
e. (2 pont) El lehessen indítani az osztó körét, amennyiben a játékos már befejezte a sajátját ("Play Dealer" gomb, DEALER_ROUND akció). Ekkor a pakli tetejéről addig kerülnek lapok az osztóhoz, amíg el nem éri a 16-ot, 16 felett megáll (ld. getValueOfCards segédfüggvényt). A kártyák megjelennek az osztó alatt!
f. (1 pont) Mindkét játékos pontszáma folyamatosan látszódjón a kártyáik alatt!
g. (2 pont) A kör végén az aktuális nyertes felületi szinten is kerüljön jelzésre, majd eltárolásra. A DEALER_ROUND akciónál a pontok alapján vagy a játékos, vagy az osztó nyer, a megfelelő winnings 1-gyel növelendő. A jelenlegi állás kerüljön megjelenítésre! (például: a név mellett zárójelben)
