"option strict";

let gujaratiVowels = new Map();
let gujaratiConsonants = new Map();
let gujaratiKaagunita = new Map();
let gujaratiNumbers = new Map();
let gujaratiViraama;
let gujaratiAnusvaara;
let gujaratiVisarga;
let gujaratiAvagraha;
let gujaratiDanda;
let gujaratiDoubleDanda;
let gujaratiChandraBindu;

function setupGujaratiMaps() {
  gujaratiVowels.set("a", "\u0A85");
  gujaratiVowels.set("A", "\u0A86"); // Also aa
  gujaratiVowels.set("i", "\u0A87");
  gujaratiVowels.set("I", "\u0A88"); // Also ee
  gujaratiVowels.set("u", "\u0A89");
  gujaratiVowels.set("U", "\u0A8A");
  gujaratiVowels.set("Ru", "\u0A8B");
  gujaratiVowels.set("e", "\u0A8D"); // Chandra e
  gujaratiVowels.set("E", "\u0A8F");
  gujaratiVowels.set("!", "\u0A90"); // ai
  gujaratiVowels.set("o", "\u0A91"); // Chandra o
  gujaratiVowels.set("O", "\u0A93");
  gujaratiVowels.set("@", "\u0A94"); // au, ou

  gujaratiConsonants.set("k", "\u0A95");
  gujaratiConsonants.set("g", "\u0A95");
  gujaratiConsonants.set("K", "\u0A96"); // Also kh
  gujaratiConsonants.set("g", "\u0A97");
  gujaratiConsonants.set("G", "\u0A98"); // Also gh
  gujaratiConsonants.set("<", "\u0A99"); // ng

  gujaratiConsonants.set("c", "\u0A9A"); // Also ch
  gujaratiConsonants.set("C", "\u0A9B"); // Also Ch
  gujaratiConsonants.set("j", "\u0A9C");
  gujaratiConsonants.set("J", "\u0A9D");
  gujaratiConsonants.set(">", "\u0A9E"); // ny

  gujaratiConsonants.set("T", "\u0A9F");
  gujaratiConsonants.set("#", "\u0AA0"); // Th
  gujaratiConsonants.set("D", "\u0AA1");
  gujaratiConsonants.set("$", "\u0AA2"); // Dh
  gujaratiConsonants.set("N", "\u0AA3");

  gujaratiConsonants.set("t", "\u0AA4");
  gujaratiConsonants.set("%", "\u0AA5"); // th
  gujaratiConsonants.set("d", "\u0AA6");
  gujaratiConsonants.set("^", "\u0AA7"); // dh
  gujaratiConsonants.set("n", "\u0AA8");

  gujaratiConsonants.set("p", "\u0AAA");
  gujaratiConsonants.set("P", "\u0AAB"); // Also ph
  gujaratiConsonants.set("f", "\u0AAB"); // Also ph
  gujaratiConsonants.set("b", "\u0AAC");
  gujaratiConsonants.set("B", "\u0AAD"); // Also bh
  gujaratiConsonants.set("m", "\u0AAE");

  gujaratiConsonants.set("y", "\u0AAF");
  gujaratiConsonants.set("r", "\u0AB0");
  gujaratiConsonants.set("x", "\u0AB0");
  gujaratiConsonants.set("l", "\u0AB2");
  gujaratiConsonants.set("L", "\u0AB3");
  gujaratiConsonants.set("v", "\u0AB5");
  gujaratiConsonants.set("w", "\u0AB5");
  gujaratiConsonants.set("S", "\u0AB6");
  gujaratiConsonants.set("*", "\u0AB7"); // Sh
  gujaratiConsonants.set("s", "\u0AB8");
  gujaratiConsonants.set("h", "\u0AB9");

  gujaratiKaagunita.set("A", "\u0ABE");
  gujaratiKaagunita.set("i", "\u0ABF");
  gujaratiKaagunita.set("I", "\u0AC0");
  gujaratiKaagunita.set("u", "\u0AC1");
  gujaratiKaagunita.set("U", "\u0AC2");
  gujaratiKaagunita.set("R", "\u0AC3"); // Ru
  gujaratiKaagunita.set("x", "\u0AC4"); // RU
  gujaratiKaagunita.set("e", "\u0AC5");
  gujaratiKaagunita.set("E", "\u0AC7");
  gujaratiKaagunita.set("!", "\u0AC8"); // ai
  gujaratiKaagunita.set("o", "\u0AC9");
  gujaratiKaagunita.set("O", "\u0ACB");
  gujaratiKaagunita.set("@", "\u0ACC"); // au

  gujaratiNumbers.set("0", "\u0AE6");
  gujaratiNumbers.set("1", "\u0AE7");
  gujaratiNumbers.set("2", "\u0AE8");
  gujaratiNumbers.set("3", "\u0AE9");
  gujaratiNumbers.set("4", "\u0AEA");
  gujaratiNumbers.set("5", "\u0AEB");
  gujaratiNumbers.set("6", "\u0AEC");
  gujaratiNumbers.set("7", "\u0AED");
  gujaratiNumbers.set("8", "\u0AEE");
  gujaratiNumbers.set("9", "\u0AEF");

  gujaratiViraama = "\u0ACD";
  gujaratiAnusvaara = "\u0A82";
  gujaratiVisarga = "\u0A83";
  gujaratiAvagraha = "\u0ABD";
  gujaratiDanda = "\u0964";
  gujaratiDoubleDanda = "\u0965";
  gujaratiChandraBindu = "\u0A81";
}

// function clearMaps() {
//   gujaratiVowels.clear();
//   gujaratiConsonants.clear();
//   gujaratiKaagunita.clear();
//   gujaratiNumbers.clear();
// }
