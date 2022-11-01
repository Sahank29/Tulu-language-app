"option strict";

let devanagariVowels = new Map();
let devanagariConsonants = new Map();
let devanagariKaagunita = new Map();
let devanagariNumbers = new Map();
let devanagariViraama;
let devanagariAnusvaara;
let devanagariVisarga;
let devanagariAvagraha;
let devanagariDanda;
let devanagariDoubleDanda;
let devanagariChandraBindu;

function setupDevanagariMaps() {
  devanagariVowels.set("a", "\u0905");
  devanagariVowels.set("A", "\u0906"); // Also aa
  devanagariVowels.set("i", "\u0907");
  devanagariVowels.set("I", "\u0908"); // Also ee
  devanagariVowels.set("u", "\u0909");
  devanagariVowels.set("U", "\u090A");
  devanagariVowels.set("Ru", "\u090B");
  devanagariVowels.set("e", "\u090F");
  devanagariVowels.set("E", "\u090F");
  devanagariVowels.set("!", "\u0910"); // ai
  devanagariVowels.set("o", "\u0913");
  devanagariVowels.set("O", "\u0913");
  devanagariVowels.set("@", "\u0914"); // au, ou

  devanagariConsonants.set("k", "\u0915");
  devanagariConsonants.set("q", "\u0915");
  devanagariConsonants.set("K", "\u0916"); // Also kh
  devanagariConsonants.set("g", "\u0917");
  devanagariConsonants.set("G", "\u0918"); // Also gh
  devanagariConsonants.set("<", "\u0919"); // ng

  devanagariConsonants.set("c", "\u091A"); // Also ch
  devanagariConsonants.set("C", "\u091B"); // Also Ch
  devanagariConsonants.set("j", "\u091C");
  devanagariConsonants.set("J", "\u091D");
  devanagariConsonants.set(">", "\u091E"); // ny

  devanagariConsonants.set("T", "\u091F");
  devanagariConsonants.set("#", "\u0920"); // Th
  devanagariConsonants.set("D", "\u0921");
  devanagariConsonants.set("$", "\u0922"); // Dh
  devanagariConsonants.set("N", "\u0923");

  devanagariConsonants.set("t", "\u0924");
  devanagariConsonants.set("%", "\u0925"); // th
  devanagariConsonants.set("d", "\u0926");
  devanagariConsonants.set("^", "\u0927"); // dh
  devanagariConsonants.set("n", "\u0928");

  devanagariConsonants.set("p", "\u092A");
  devanagariConsonants.set("P", "\u092B"); // Also ph
  devanagariConsonants.set("f", "\u092B"); // Also ph
  devanagariConsonants.set("b", "\u092C");
  devanagariConsonants.set("B", "\u092D"); // Also bh
  devanagariConsonants.set("m", "\u092E");

  devanagariConsonants.set("y", "\u092F");
  devanagariConsonants.set("r", "\u0930");
  devanagariConsonants.set("x", "\u0930");
  devanagariConsonants.set("l", "\u0932");
  devanagariConsonants.set("L", "\u0933");
  devanagariConsonants.set("v", "\u0935");
  devanagariConsonants.set("w", "\u0935");
  devanagariConsonants.set("S", "\u0936");
  devanagariConsonants.set("*", "\u0937"); // Sh
  devanagariConsonants.set("s", "\u0938");
  devanagariConsonants.set("h", "\u0939");

  devanagariKaagunita.set("A", "\u093E");
  devanagariKaagunita.set("i", "\u093F");
  devanagariKaagunita.set("I", "\u0940");
  devanagariKaagunita.set("u", "\u0941");
  devanagariKaagunita.set("U", "\u0942");
  devanagariKaagunita.set("R", "\u0943"); // Ru
  devanagariKaagunita.set("x", "\u0944"); // RU
  devanagariKaagunita.set("e", "\u0947");
  devanagariKaagunita.set("E", "\u0947");
  devanagariKaagunita.set("!", "\u0948"); // ai
  devanagariKaagunita.set("o", "\u094B");
  devanagariKaagunita.set("O", "\u094B");
  devanagariKaagunita.set("@", "\u094C"); // au

  devanagariNumbers.set("0", "\u0966");
  devanagariNumbers.set("1", "\u0967");
  devanagariNumbers.set("2", "\u0968");
  devanagariNumbers.set("3", "\u0969");
  devanagariNumbers.set("4", "\u096A");
  devanagariNumbers.set("5", "\u096B");
  devanagariNumbers.set("6", "\u096C");
  devanagariNumbers.set("7", "\u096D");
  devanagariNumbers.set("8", "\u096E");
  devanagariNumbers.set("9", "\u096F");

  devanagariViraama = "\u094D";
  devanagariAnusvaara = "\u0902";
  devanagariVisarga = "\u0903";
  devanagariAvagraha = "\u093D";
  devanagariDanda = "\u0964";
  devanagariDoubleDanda = "\u0965";
  devanagariChandraBindu = "\u0901";
}

// function clearMaps() {
//   devanagariVowels.clear();
//   devanagariConsonants.clear();
//   devanagariKaagunita.clear();
//   devanagariNumbers.clear();
// }
