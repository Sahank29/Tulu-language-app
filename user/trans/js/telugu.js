"option strict";

let teluguVowels = new Map();
let teluguConsonants = new Map();
let teluguKaagunita = new Map();
let teluguNumbers = new Map();
let teluguViraama;
let teluguAnusvaara;
let teluguVisarga;
let teluguAvagraha;
let teluguDanda;
let teluguDoubleDanda;
let teluguChandraBindu;

function setupTeluguMaps() {
  teluguVowels.set("a", "\u0C05");
  teluguVowels.set("A", "\u0C06"); // Also aa
  teluguVowels.set("i", "\u0C07");
  teluguVowels.set("I", "\u0C08"); // Also ee
  teluguVowels.set("u", "\u0C09");
  teluguVowels.set("U", "\u0C0A");
  teluguVowels.set("Ru", "\u0C0B");
  teluguVowels.set("e", "\u0C0E");
  teluguVowels.set("E", "\u0C0F");
  teluguVowels.set("!", "\u0C10"); // ai
  teluguVowels.set("o", "\u0C12");
  teluguVowels.set("O", "\u0C13");
  teluguVowels.set("@", "\u0C14"); // au, ou

  teluguConsonants.set("k", "\u0C15");
  teluguConsonants.set("q", "\u0C15");
  teluguConsonants.set("K", "\u0C16"); // Also kh
  teluguConsonants.set("g", "\u0C17");
  teluguConsonants.set("G", "\u0C18"); // Also gh
  teluguConsonants.set("<", "\u0C19"); // ng

  teluguConsonants.set("c", "\u0C1A"); // Also ch
  teluguConsonants.set("C", "\u0C1B"); // Also Ch
  teluguConsonants.set("j", "\u0C1C");
  teluguConsonants.set("J", "\u0C1D");
  teluguConsonants.set(">", "\u0C1E"); // ny

  teluguConsonants.set("T", "\u0C1F");
  teluguConsonants.set("#", "\u0C20"); // Th
  teluguConsonants.set("D", "\u0C21");
  teluguConsonants.set("$", "\u0C22"); // Dh
  teluguConsonants.set("N", "\u0C23");

  teluguConsonants.set("t", "\u0C24");
  teluguConsonants.set("%", "\u0C25"); // th
  teluguConsonants.set("d", "\u0C26");
  teluguConsonants.set("^", "\u0C27"); // dh
  teluguConsonants.set("n", "\u0C28");

  teluguConsonants.set("p", "\u0C2A");
  teluguConsonants.set("P", "\u0C2B"); // Also ph
  teluguConsonants.set("f", "\u0C2B"); // Also ph
  teluguConsonants.set("b", "\u0C2C");
  teluguConsonants.set("B", "\u0C2D"); // Also bh
  teluguConsonants.set("m", "\u0C2E");

  teluguConsonants.set("y", "\u0C2F");
  teluguConsonants.set("r", "\u0C30");
  teluguConsonants.set("x", "\u0C31");
  teluguConsonants.set("l", "\u0C32");
  teluguConsonants.set("L", "\u0C33");
  teluguConsonants.set("v", "\u0C35");
  teluguConsonants.set("w", "\u0C35");
  teluguConsonants.set("S", "\u0C36");
  teluguConsonants.set("*", "\u0C37"); // Sh
  teluguConsonants.set("s", "\u0C38");
  teluguConsonants.set("h", "\u0C39");

  teluguKaagunita.set("A", "\u0C3E");
  teluguKaagunita.set("i", "\u0C3F");
  teluguKaagunita.set("I", "\u0C40");
  teluguKaagunita.set("u", "\u0C41");
  teluguKaagunita.set("U", "\u0C42");
  teluguKaagunita.set("R", "\u0C43"); // Ru
  teluguKaagunita.set("x", "\u0C44"); // RU
  teluguKaagunita.set("e", "\u0C46");
  teluguKaagunita.set("E", "\u0C47");
  teluguKaagunita.set("!", "\u0C48"); // ai
  teluguKaagunita.set("o", "\u0C4A");
  teluguKaagunita.set("O", "\u0C4B");
  teluguKaagunita.set("@", "\u0C4C"); // au

  teluguNumbers.set("0", "\u0C66");
  teluguNumbers.set("1", "\u0C67");
  teluguNumbers.set("2", "\u0C68");
  teluguNumbers.set("3", "\u0C69");
  teluguNumbers.set("4", "\u0C6A");
  teluguNumbers.set("5", "\u0C6B");
  teluguNumbers.set("6", "\u0C6C");
  teluguNumbers.set("7", "\u0C6D");
  teluguNumbers.set("8", "\u0C6E");
  teluguNumbers.set("9", "\u0C6F");

  teluguViraama = "\u0C4D";
  teluguAnusvaara = "\u0C02";
  teluguVisarga = "\u0C03";
  teluguAvagraha = "\u0C3D";
  teluguDanda = "\u0964";
  teluguDoubleDanda = "\u0965";
  teluguChandraBindu = "\u0C00";
}

// function clearMaps() {
//   teluguVowels.clear();
//   teluguConsonants.clear();
//   teluguKaagunita.clear();
//   teluguNumbers.clear();
// }
