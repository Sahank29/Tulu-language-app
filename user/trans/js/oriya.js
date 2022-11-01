"option strict";

let odiaVowels = new Map();
let odiaConsonants = new Map();
let odiaKaagunita = new Map();
let odiaNumbers = new Map();
let odiaViraama;
let odiaAnusvaara;
let odiaVisarga;
let odiaAvagraha;
let odiaDanda;
let odiaDoubleDanda;
let odiaChandraBindu;

function setupOdiaMaps() {
  odiaVowels.set("a", "\u0B05");
  odiaVowels.set("A", "\u0B06"); // Also aa
  odiaVowels.set("i", "\u0B07");
  odiaVowels.set("I", "\u0B08"); // Also ee
  odiaVowels.set("u", "\u0B09");
  odiaVowels.set("U", "\u0B0A");
  odiaVowels.set("Ru", "\u0B0B");
  odiaVowels.set("e", "\u0B0F");
  odiaVowels.set("E", "\u0B0F");
  odiaVowels.set("!", "\u0B10"); // ai
  odiaVowels.set("o", "\u0B13");
  odiaVowels.set("O", "\u0B13");
  odiaVowels.set("@", "\u0B14"); // au, ou

  odiaConsonants.set("k", "\u0B15");
  odiaConsonants.set("q", "\u0B15");
  odiaConsonants.set("K", "\u0B16"); // Also kh
  odiaConsonants.set("g", "\u0B17");
  odiaConsonants.set("G", "\u0B18"); // Also gh
  odiaConsonants.set("<", "\u0B19"); // ng

  odiaConsonants.set("c", "\u0B1A"); // Also ch
  odiaConsonants.set("C", "\u0B1B"); // Also Ch
  odiaConsonants.set("j", "\u0B1C");
  odiaConsonants.set("J", "\u0B1D");
  odiaConsonants.set(">", "\u0B1E"); // ny

  odiaConsonants.set("T", "\u0B1F");
  odiaConsonants.set("#", "\u0B20"); // Th
  odiaConsonants.set("D", "\u0B21");
  odiaConsonants.set("$", "\u0B22"); // Dh
  odiaConsonants.set("N", "\u0B23");

  odiaConsonants.set("t", "\u0B24");
  odiaConsonants.set("%", "\u0B25"); // th
  odiaConsonants.set("d", "\u0B26");
  odiaConsonants.set("^", "\u0B27"); // dh
  odiaConsonants.set("n", "\u0B28");

  odiaConsonants.set("p", "\u0B2A");
  odiaConsonants.set("P", "\u0B2B"); // Also ph
  odiaConsonants.set("f", "\u0B2B"); // Also ph
  odiaConsonants.set("b", "\u0B2C");
  odiaConsonants.set("B", "\u0B2D"); // Also bh
  odiaConsonants.set("m", "\u0B2E");

  odiaConsonants.set("y", "\u0B2F");
  odiaConsonants.set("Y", "\u0B5F");
  odiaConsonants.set("r", "\u0B30");
  odiaConsonants.set("x", "\u0B30");
  odiaConsonants.set("l", "\u0B32");
  odiaConsonants.set("L", "\u0B33");
  odiaConsonants.set("v", "\u0B35");
  odiaConsonants.set("w", "\u0B35");
  odiaConsonants.set("S", "\u0B36");
  odiaConsonants.set("*", "\u0B37"); // Sh
  odiaConsonants.set("s", "\u0B38");
  odiaConsonants.set("h", "\u0B39");

  odiaKaagunita.set("A", "\u0B3E");
  odiaKaagunita.set("i", "\u0B3F");
  odiaKaagunita.set("I", "\u0B40");
  odiaKaagunita.set("u", "\u0B41");
  odiaKaagunita.set("U", "\u0B42");
  odiaKaagunita.set("R", "\u0B43"); // Ru
  odiaKaagunita.set("x", "\u0B44"); // RU
  odiaKaagunita.set("e", "\u0B47");
  odiaKaagunita.set("E", "\u0B47");
  odiaKaagunita.set("!", "\u0B48"); // ai
  odiaKaagunita.set("o", "\u0B4B");
  odiaKaagunita.set("O", "\u0B4B");
  odiaKaagunita.set("@", "\u0B4C"); // au

  odiaNumbers.set("0", "\u0B66");
  odiaNumbers.set("1", "\u0B67");
  odiaNumbers.set("2", "\u0B68");
  odiaNumbers.set("3", "\u0B69");
  odiaNumbers.set("4", "\u0B6A");
  odiaNumbers.set("5", "\u0B6B");
  odiaNumbers.set("6", "\u0B6C");
  odiaNumbers.set("7", "\u0B6D");
  odiaNumbers.set("8", "\u0B6E");
  odiaNumbers.set("9", "\u0B6F");

  odiaViraama = "\u0B4D";
  odiaAnusvaara = "\u0B02";
  odiaVisarga = "\u0B03";
  odiaAvagraha = "\u0B3D";
  odiaDanda = "\u0964";
  odiaDoubleDanda = "\u0965";
  odiaChandraBindu = "\u0B01";
}

// function clearMaps() {
//   odiaVowels.clear();
//   odiaConsonants.clear();
//   odiaKaagunita.clear();
//   odiaNumbers.clear();
// }
