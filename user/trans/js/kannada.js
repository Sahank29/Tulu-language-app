"option strict";

let kannadaVowels = new Map();
let kannadaConsonants = new Map();
let kannadaKaagunita = new Map();
let kannadaNumbers = new Map();
let kannadaViraama;
let kannadaAnusvaara;
let kannadaVisarga;
let kannadaAvagraha;
let kannadaDanda;
let kannadaDoubleDanda;
let kannadaChandraBindu;

function setupKannadaMaps() {
  kannadaVowels.set("a", "\u0C85");
  kannadaVowels.set("A", "\u0C86"); // Also aa
  kannadaVowels.set("i", "\u0C87");
  kannadaVowels.set("I", "\u0C88"); // Also ee
  kannadaVowels.set("u", "\u0C89");
  kannadaVowels.set("U", "\u0C8A");
  kannadaVowels.set("Ru", "\u0C8B");
  kannadaVowels.set("e", "\u0C8E");
  kannadaVowels.set("E", "\u0C8F");
  kannadaVowels.set("!", "\u0C90"); // ai
  kannadaVowels.set("o", "\u0C92");
  kannadaVowels.set("O", "\u0C93");
  kannadaVowels.set("@", "\u0C94"); // au, ou

  kannadaConsonants.set("k", "\u0C95");
  kannadaConsonants.set("q", "\u0C95");
  kannadaConsonants.set("K", "\u0C96"); // Also kh
  kannadaConsonants.set("g", "\u0C97");
  kannadaConsonants.set("G", "\u0C98"); // Also gh
  kannadaConsonants.set("<", "\u0C99"); // ng

  kannadaConsonants.set("c", "\u0C9A"); // Also ch
  kannadaConsonants.set("C", "\u0C9B"); // Also Ch
  kannadaConsonants.set("j", "\u0C9C");
  kannadaConsonants.set("J", "\u0C9D");
  kannadaConsonants.set(">", "\u0C9E"); // ny

  kannadaConsonants.set("T", "\u0C9F");
  kannadaConsonants.set("#", "\u0CA0"); // Th
  kannadaConsonants.set("D", "\u0CA1");
  kannadaConsonants.set("$", "\u0CA2"); // Dh
  kannadaConsonants.set("N", "\u0CA3");

  kannadaConsonants.set("t", "\u0CA4");
  kannadaConsonants.set("%", "\u0CA5"); // th
  kannadaConsonants.set("d", "\u0CA6");
  kannadaConsonants.set("^", "\u0CA7"); // dh
  kannadaConsonants.set("n", "\u0CA8");
  kannadaConsonants.set("[", "\u0CA8");

  kannadaConsonants.set("p", "\u0CAA");
  kannadaConsonants.set("P", "\u0CAB"); // Also ph
  kannadaConsonants.set("f", "\u0CAB"); // Also ph
  kannadaConsonants.set("b", "\u0CAC");
  kannadaConsonants.set("B", "\u0CAD"); // Also bh
  kannadaConsonants.set("m", "\u0CAE");

  kannadaConsonants.set("y", "\u0CAF");
  kannadaConsonants.set("r", "\u0CB0");
  kannadaConsonants.set("x", "\u0CB1");
  kannadaConsonants.set("l", "\u0CB2");
  kannadaConsonants.set("L", "\u0CB3");
  kannadaConsonants.set("v", "\u0CB5");
  kannadaConsonants.set("w", "\u0CB5");
  kannadaConsonants.set("S", "\u0CB6");
  kannadaConsonants.set("*", "\u0CB7"); // Sh
  kannadaConsonants.set("s", "\u0CB8");
  kannadaConsonants.set("h", "\u0CB9");

  kannadaKaagunita.set("A", "\u0CBE");
  kannadaKaagunita.set("i", "\u0CBF");
  kannadaKaagunita.set("I", "\u0CC0");
  kannadaKaagunita.set("u", "\u0CC1");
  kannadaKaagunita.set("U", "\u0CC2");
  kannadaKaagunita.set("R", "\u0CC3"); // Ru
  kannadaKaagunita.set("x", "\u0CC4"); // RU
  kannadaKaagunita.set("e", "\u0CC6");
  kannadaKaagunita.set("E", "\u0CC7");
  kannadaKaagunita.set("!", "\u0CC8"); // ai
  kannadaKaagunita.set("o", "\u0CCA");
  kannadaKaagunita.set("O", "\u0CCB");
  kannadaKaagunita.set("@", "\u0CCC"); // au

  kannadaNumbers.set("0", "\u0CE6");
  kannadaNumbers.set("1", "\u0CE7");
  kannadaNumbers.set("2", "\u0CE8");
  kannadaNumbers.set("3", "\u0CE9");
  kannadaNumbers.set("4", "\u0CEA");
  kannadaNumbers.set("5", "\u0CEB");
  kannadaNumbers.set("6", "\u0CEC");
  kannadaNumbers.set("7", "\u0CED");
  kannadaNumbers.set("8", "\u0CEE");
  kannadaNumbers.set("9", "\u0CEF");

  kannadaViraama = "\u0CCD";
  kannadaAnusvaara = "\u0C82";
  kannadaVisarga = "\u0C83";
  kannadaAvagraha = "\u0CBD";
  kannadaDanda = "\u0964";
  kannadaDoubleDanda = "\u0965";
  kannadaChandraBindu = "\u0C81";
}

// function clearMaps() {
//   kannadaVowels.clear();
//   kannadaConsonants.clear();
//   kannadaKaagunita.clear();
//   kannadaNumbers.clear();
// }
