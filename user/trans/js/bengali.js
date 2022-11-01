"option strict";

let bengaliVowels = new Map();
let bengaliConsonants = new Map();
let bengaliKaagunita = new Map();
let bengaliNumbers = new Map();
let bengaliViraama;
let bengaliAnusvaara;
let bengaliVisarga;
let bengaliAvagraha;
let bengaliDanda;
let bengaliDoubleDanda;
let bengaliChandraBindu;
let bengaliKhandaTa;
let assameseRa;
let assameseVa;

function setupBengaliMaps() {
  bengaliVowels.set("a", "\u0985");
  bengaliVowels.set("A", "\u0986"); // Also aa
  bengaliVowels.set("i", "\u0987");
  bengaliVowels.set("I", "\u0988"); // Also ee
  bengaliVowels.set("u", "\u0989");
  bengaliVowels.set("U", "\u098A");
  bengaliVowels.set("Ru", "\u098B");
  bengaliVowels.set("e", "\u098F");
  bengaliVowels.set("E", "\u098F");
  bengaliVowels.set("!", "\u0990"); // ai
  bengaliVowels.set("o", "\u0993");
  bengaliVowels.set("O", "\u0993");
  bengaliVowels.set("@", "\u0994"); // au, ou

  bengaliConsonants.set("k", "\u0995");
  bengaliConsonants.set("K", "\u0996"); // Also kh
  bengaliConsonants.set("g", "\u0997");
  bengaliConsonants.set("G", "\u0998"); // Also gh
  bengaliConsonants.set("<", "\u0999"); // ng

  bengaliConsonants.set("c", "\u099A"); // Also ch
  bengaliConsonants.set("C", "\u099B"); // Also Ch
  bengaliConsonants.set("j", "\u099C");
  bengaliConsonants.set("J", "\u099D");
  bengaliConsonants.set(">", "\u099E"); // ny

  bengaliConsonants.set("T", "\u099F");
  bengaliConsonants.set("#", "\u09A0"); // Th
  bengaliConsonants.set("D", "\u09A1");
  bengaliConsonants.set("$", "\u09A2"); // Dh
  bengaliConsonants.set("N", "\u09A3");

  bengaliConsonants.set("q", "\u09CE"); //Khanda Ta

  bengaliConsonants.set("t", "\u09A4");
  bengaliConsonants.set("%", "\u09A5"); // th
  bengaliConsonants.set("d", "\u09A6");
  bengaliConsonants.set("^", "\u09A7"); // dh
  bengaliConsonants.set("n", "\u09A8");

  bengaliConsonants.set("p", "\u09AA");
  bengaliConsonants.set("P", "\u09AB"); // Also ph
  bengaliConsonants.set("f", "\u09AB"); // Also ph
  bengaliConsonants.set("b", "\u09AC");
  bengaliConsonants.set("B", "\u09AD"); // Also bh
  bengaliConsonants.set("m", "\u09AE");

  bengaliConsonants.set("y", "\u09AF");
  bengaliConsonants.set("r", "\u09B0");
  bengaliConsonants.set("x", "\u09B0");
  bengaliConsonants.set("l", "\u09B2");
  bengaliConsonants.set("L", "\u09B2");
  bengaliConsonants.set("v", "\u09AC");
  bengaliConsonants.set("w", "\u09AC");
  bengaliConsonants.set("S", "\u09B6");
  bengaliConsonants.set("*", "\u09B7"); // Sh
  bengaliConsonants.set("s", "\u09B8");
  bengaliConsonants.set("h", "\u09B9");

  bengaliKaagunita.set("A", "\u09BE");
  bengaliKaagunita.set("i", "\u09BF");
  bengaliKaagunita.set("I", "\u09C0");
  bengaliKaagunita.set("u", "\u09C1");
  bengaliKaagunita.set("U", "\u09C2");
  bengaliKaagunita.set("R", "\u09C3"); // Ru
  bengaliKaagunita.set("x", "\u09C4"); // RU
  bengaliKaagunita.set("e", "\u09C7");
  bengaliKaagunita.set("E", "\u09C7");
  bengaliKaagunita.set("!", "\u09C8"); // ai
  bengaliKaagunita.set("o", "\u09CB");
  bengaliKaagunita.set("O", "\u09CB");
  bengaliKaagunita.set("@", "\u09CC"); // au

  bengaliNumbers.set("0", "\u09E6");
  bengaliNumbers.set("1", "\u09E7");
  bengaliNumbers.set("2", "\u09E8");
  bengaliNumbers.set("3", "\u09E9");
  bengaliNumbers.set("4", "\u09EA");
  bengaliNumbers.set("5", "\u09EB");
  bengaliNumbers.set("6", "\u09EC");
  bengaliNumbers.set("7", "\u09ED");
  bengaliNumbers.set("8", "\u09EE");
  bengaliNumbers.set("9", "\u09EF");

  bengaliViraama = "\u09CD";
  bengaliAnusvaara = "\u0982";
  bengaliVisarga = "\u0983";
  bengaliAvagraha = "\u09BD";
  bengaliDanda = "\u0964";
  bengaliDoubleDanda = "\u0965";
  bengaliChandraBindu = "\u0981";
  bengaliKhandaTa = "\u09CE"; 

  assameseRa = "\u09F0";
  assameseVa = "\u09F1";
}

// function clearMaps() {
//   bengaliVowels.clear();
//   bengaliConsonants.clear();
//   bengaliKaagunita.clear();
//   bengaliNumbers.clear();
// }
