"option strict";

let malayalamVowels = new Map();
let malayalamConsonants = new Map();
let malayalamKaagunita = new Map();
let malayalamNumbers = new Map();
let malayalamViraama;
let malayalamAnusvaara;
let malayalamVisarga;
let malayalamAvagraha;
let malayalamDanda;
let malayalamDoubleDanda;
let malayalamChandraBindu;
let malayalamChilluNN;
let malayalamChilluN;
let malayalamChilluRR;
let malayalamChilluL;
let malayalamChilluLL;
let malayalamChilluK;

function setupMalayalamMaps() {
  malayalamVowels.set("a", "\u0D05");
  malayalamVowels.set("A", "\u0D06"); // Also aa
  malayalamVowels.set("i", "\u0D07");
  malayalamVowels.set("I", "\u0D08"); // Also ee
  malayalamVowels.set("u", "\u0D09");
  malayalamVowels.set("U", "\u0D0A");
  malayalamVowels.set("Ru", "\u0D0B");
  malayalamVowels.set("e", "\u0D0E");
  malayalamVowels.set("E", "\u0D0F");
  malayalamVowels.set("!", "\u0D10"); // ai
  malayalamVowels.set("o", "\u0D12");
  malayalamVowels.set("O", "\u0D13");
  malayalamVowels.set("@", "\u0D14"); // au, ou

  malayalamConsonants.set("k", "\u0D15");
  malayalamConsonants.set("q", "\u0D15");
  malayalamConsonants.set("K", "\u0D16"); // Also kh
  malayalamConsonants.set("g", "\u0D17");
  malayalamConsonants.set("G", "\u0D18"); // Also gh
  malayalamConsonants.set("<", "\u0D19"); // ng

  malayalamConsonants.set("c", "\u0D1A"); // Also ch
  malayalamConsonants.set("C", "\u0D1B"); // Also Ch
  malayalamConsonants.set("j", "\u0D1C");
  malayalamConsonants.set("J", "\u0D1D");
  malayalamConsonants.set(">", "\u0D1E"); // ny

  malayalamConsonants.set("T", "\u0D1F");
  malayalamConsonants.set("#", "\u0D20"); // Th
  malayalamConsonants.set("D", "\u0D21");
  malayalamConsonants.set("$", "\u0D22"); // Dh
  malayalamConsonants.set("N", "\u0D23");

  malayalamConsonants.set("t", "\u0D24");
  malayalamConsonants.set("%", "\u0D25"); // th
  malayalamConsonants.set("d", "\u0D26");
  malayalamConsonants.set("^", "\u0D27"); // dh
  malayalamConsonants.set("n", "\u0D28");

  malayalamConsonants.set("p", "\u0D2A");
  malayalamConsonants.set("P", "\u0D2B"); // Also ph
  malayalamConsonants.set("f", "\u0D2B"); // Also ph
  malayalamConsonants.set("b", "\u0D2C");
  malayalamConsonants.set("B", "\u0D2D"); // Also bh
  malayalamConsonants.set("m", "\u0D2E");

  malayalamConsonants.set("y", "\u0D2F");
  malayalamConsonants.set("r", "\u0D30");
  malayalamConsonants.set("R", "\u0D31");
  malayalamConsonants.set("l", "\u0D32");
  malayalamConsonants.set("L", "\u0D33");
  malayalamConsonants.set("z", "\u0D34"); // zha
  malayalamConsonants.set("v", "\u0D35");
  malayalamConsonants.set("w", "\u0D35");
  malayalamConsonants.set("S", "\u0D36");
  malayalamConsonants.set("*", "\u0D37"); // Sh
  malayalamConsonants.set("s", "\u0D38");
  malayalamConsonants.set("h", "\u0D39");

  malayalamKaagunita.set("A", "\u0D3E");
  malayalamKaagunita.set("i", "\u0D3F");
  malayalamKaagunita.set("I", "\u0D40");
  malayalamKaagunita.set("u", "\u0D41");
  malayalamKaagunita.set("U", "\u0D42");
  malayalamKaagunita.set("R", "\u0D43"); // Ru
  malayalamKaagunita.set("x", "\u0D44"); // RU
  malayalamKaagunita.set("e", "\u0D46");
  malayalamKaagunita.set("E", "\u0D47");
  malayalamKaagunita.set("!", "\u0D48"); // ai
  malayalamKaagunita.set("o", "\u0D4A");
  malayalamKaagunita.set("O", "\u0D4B");
  malayalamKaagunita.set("@", "\u0D57"); // au

  malayalamNumbers.set("0", "\u0D66");
  malayalamNumbers.set("1", "\u0D67");
  malayalamNumbers.set("2", "\u0D68");
  malayalamNumbers.set("3", "\u0D69");
  malayalamNumbers.set("4", "\u0D6A");
  malayalamNumbers.set("5", "\u0D6B");
  malayalamNumbers.set("6", "\u0D6C");
  malayalamNumbers.set("7", "\u0D6D");
  malayalamNumbers.set("8", "\u0D6E");
  malayalamNumbers.set("9", "\u0D6F");

  malayalamViraama = "\u0D4D";
  malayalamAnusvaara = "\u0D02";
  malayalamVisarga = "\u0D03";
  malayalamAvagraha = "\u0D3D";
  malayalamDanda = "\u0964";
  malayalamDoubleDanda = "\u0965";
  malayalamChandraBindu = "\u0D01";
  malayalamChilluNN = "\u0D7A";
  malayalamChilluN = "\u0D7B";
  malayalamChilluRR = "\u0D7C";
  malayalamChilluL = "\u0D7D";
  malayalamChilluLL = "\u0D7E";
  malayalamChilluK = "\u0D7F";
}

// function clearMaps() {
//   malayalamVowels.clear();
//   malayalamConsonants.clear();
//   malayalamKaagunita.clear();
//   malayalamNumbers.clear();
// }
