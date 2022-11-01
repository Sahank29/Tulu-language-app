"option strict";

let gurmukhiVowels = new Map();
let gurmukhiConsonants = new Map();
let gurmukhiKaagunita = new Map();
let gurmukhiNumbers = new Map();
let gurmukhiViraama;
let gurmukhiAnusvaara;
let gurmukhiVisarga;
let gurmukhiAvagraha;
let gurmukhiDanda;
let gurmukhiDoubleDanda;
let gurmukhiTippi;
let gurmukhiAddak;
let gurmukhiChandraBindu;

function setupGurmukhiMaps() {
  gurmukhiVowels.set("a", "\u0A05");
  gurmukhiVowels.set("A", "\u0A06"); // Also aa
  gurmukhiVowels.set("i", "\u0A07");
  gurmukhiVowels.set("I", "\u0A08"); // Also ee
  gurmukhiVowels.set("u", "\u0A09");
  gurmukhiVowels.set("U", "\u0A0A");
  gurmukhiVowels.set("Ru", "\u0A0A");
  gurmukhiVowels.set("e", "\u0A0F");
  gurmukhiVowels.set("E", "\u0A0F");
  gurmukhiVowels.set("!", "\u0A10"); // ai
  gurmukhiVowels.set("o", "\u0A13");
  gurmukhiVowels.set("O", "\u0A13");
  gurmukhiVowels.set("@", "\u0A14"); // au, ou

  gurmukhiConsonants.set("k", "\u0A15");
  gurmukhiConsonants.set("q", "\u0A15");
  gurmukhiConsonants.set("K", "\u0A16"); // Also kh
  gurmukhiConsonants.set("g", "\u0A17");
  gurmukhiConsonants.set("G", "\u0A18"); // Also gh
  gurmukhiConsonants.set("<", "\u0A19"); // ng

  gurmukhiConsonants.set("c", "\u0A1A"); // Also ch
  gurmukhiConsonants.set("C", "\u0A1B"); // Also Ch
  gurmukhiConsonants.set("j", "\u0A1C");
  gurmukhiConsonants.set("J", "\u0A1D");
  gurmukhiConsonants.set(">", "\u0A1E"); // ny

  gurmukhiConsonants.set("T", "\u0A1F");
  gurmukhiConsonants.set("#", "\u0A20"); // Th
  gurmukhiConsonants.set("D", "\u0A21");
  gurmukhiConsonants.set("$", "\u0A22"); // Dh
  gurmukhiConsonants.set("N", "\u0A23");

  gurmukhiConsonants.set("t", "\u0A24");
  gurmukhiConsonants.set("%", "\u0A25"); // th
  gurmukhiConsonants.set("d", "\u0A26");
  gurmukhiConsonants.set("^", "\u0A27"); // dh
  gurmukhiConsonants.set("n", "\u0A28");

  gurmukhiConsonants.set("p", "\u0A2A");
  gurmukhiConsonants.set("P", "\u0A2B"); // Also ph
  gurmukhiConsonants.set("f", "\u0A2B"); // Also ph
  gurmukhiConsonants.set("b", "\u0A2C");
  gurmukhiConsonants.set("B", "\u0A2D"); // Also bh
  gurmukhiConsonants.set("m", "\u0A2E");

  gurmukhiConsonants.set("y", "\u0A2F");
  gurmukhiConsonants.set("r", "\u0A30");
  gurmukhiConsonants.set("x", "\u0A30");
  gurmukhiConsonants.set("l", "\u0A32");
  gurmukhiConsonants.set("L", "\u0A33");
  gurmukhiConsonants.set("v", "\u0A35");
  gurmukhiConsonants.set("w", "\u0A35");
  gurmukhiConsonants.set("S", "\u0A36");
  gurmukhiConsonants.set("*", "\u0A36"); // Sh
  gurmukhiConsonants.set("s", "\u0A38");
  gurmukhiConsonants.set("h", "\u0A39");

  gurmukhiKaagunita.set("A", "\u0A3E");
  gurmukhiKaagunita.set("i", "\u0A3F");
  gurmukhiKaagunita.set("I", "\u0A40");
  gurmukhiKaagunita.set("u", "\u0A41");
  gurmukhiKaagunita.set("U", "\u0A42");
  gurmukhiKaagunita.set("R", "\u0A42"); // Ru
  gurmukhiKaagunita.set("x", "\u0A42"); // RU
  gurmukhiKaagunita.set("e", "\u0A47");
  gurmukhiKaagunita.set("E", "\u0A47");
  gurmukhiKaagunita.set("!", "\u0A48"); // ai
  gurmukhiKaagunita.set("o", "\u0A4B");
  gurmukhiKaagunita.set("O", "\u0A4B");
  gurmukhiKaagunita.set("@", "\u0A4C"); // au

  gurmukhiNumbers.set("0", "\u0A66");
  gurmukhiNumbers.set("1", "\u0A67");
  gurmukhiNumbers.set("2", "\u0A68");
  gurmukhiNumbers.set("3", "\u0A69");
  gurmukhiNumbers.set("4", "\u0A6A");
  gurmukhiNumbers.set("5", "\u0A6B");
  gurmukhiNumbers.set("6", "\u0A6C");
  gurmukhiNumbers.set("7", "\u0A6D");
  gurmukhiNumbers.set("8", "\u0A6E");
  gurmukhiNumbers.set("9", "\u0A6F");

  gurmukhiViraama = "\u0A4D";
  gurmukhiAnusvaara = "\u0A02";
  gurmukhiVisarga = "\u0A03";
  gurmukhiAvagraha = "\u093D";
  gurmukhiDanda = "\u0964";
  gurmukhiDoubleDanda = "\u0965";
  gurmukhiTippi = "\u0A70";
  gurmukhiAddak = "\u0A71";
  gurmukhiChandraBindu = "\u0A01";
}

// function clearMaps() {
//   gurmukhiVowels.clear();
//   gurmukhiConsonants.clear();
//   gurmukhiKaagunita.clear();
//   gurmukhiNumbers.clear();
// }
