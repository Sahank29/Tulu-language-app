"option strict";

let tamilVowels = new Map();
let tamilConsonants = new Map();
let tamilKaagunita = new Map();
let tamilNumbers = new Map();
let tamilViraama;
let tamilAnusvaara;
let tamilVisarga;
let tamilAvagraha;
let tamilDanda;
let tamilDoubleDanda;
let tamilChandraBindu;

function setupTamilMaps() {
  tamilVowels.set("a", "\u0B85");
  tamilVowels.set("A", "\u0B86"); // Also aa
  tamilVowels.set("i", "\u0B87");
  tamilVowels.set("I", "\u0B88"); // Also ee
  tamilVowels.set("u", "\u0B89");
  tamilVowels.set("U", "\u0B8A");
  tamilVowels.set("Ru", "\u0B8A");
  tamilVowels.set("e", "\u0B8E");
  tamilVowels.set("E", "\u0B8F");
  tamilVowels.set("!", "\u0B90"); // ai
  tamilVowels.set("o", "\u0B92");
  tamilVowels.set("O", "\u0B93");
  tamilVowels.set("@", "\u0B94"); // au, ou

  tamilConsonants.set("k", "\u0B95");
  tamilConsonants.set("q", "\u0B95");
  tamilConsonants.set("K", "\u0B95"); // Also kh
  tamilConsonants.set("g", "\u0B95");
  tamilConsonants.set("G", "\u0B95"); // Also gh
  tamilConsonants.set("<", "\u0B99"); // ng

  tamilConsonants.set("c", "\u0B9A"); // Also ch
  tamilConsonants.set("C", "\u0B9A"); // Also Ch
  tamilConsonants.set("j", "\u0B9C");
  tamilConsonants.set("J", "\u0B9C");
  tamilConsonants.set(">", "\u0B9E"); // ny

  tamilConsonants.set("T", "\u0B9F");
  tamilConsonants.set("#", "\u0B9F"); // Th
  tamilConsonants.set("D", "\u0B9F");
  tamilConsonants.set("$", "\u0B9F"); // Dh
  tamilConsonants.set("N", "\u0BA3");

  tamilConsonants.set("t", "\u0BA4");
  tamilConsonants.set("%", "\u0BA4"); // th
  tamilConsonants.set("d", "\u0BA4");
  tamilConsonants.set("^", "\u0BA4"); // dh
  tamilConsonants.set("[", "\u0BA8");
  tamilConsonants.set("n", "\u0BA9");

  tamilConsonants.set("p", "\u0BAA");
  tamilConsonants.set("P", "\u0BAA"); // Also ph
  tamilConsonants.set("f", "\u0BAA"); // Also ph
  tamilConsonants.set("b", "\u0BAA");
  tamilConsonants.set("B", "\u0BAA"); // Also bh
  tamilConsonants.set("m", "\u0BAE");

  tamilConsonants.set("y", "\u0BAF");
  tamilConsonants.set("r", "\u0BB0");
  tamilConsonants.set("R", "\u0BB1");
  tamilConsonants.set("x", "\u0BB1");
  tamilConsonants.set("l", "\u0BB2");
  tamilConsonants.set("L", "\u0BB3");
  tamilConsonants.set("z", "\u0BB4");
  tamilConsonants.set("v", "\u0BB5");
  tamilConsonants.set("w", "\u0BB5");
  tamilConsonants.set("S", "\u0BB6");
  tamilConsonants.set("*", "\u0BB7"); // Sh
  tamilConsonants.set("s", "\u0BB8");
  tamilConsonants.set("h", "\u0BB9");

  tamilKaagunita.set("A", "\u0BBE");
  tamilKaagunita.set("i", "\u0BBF");
  tamilKaagunita.set("I", "\u0BC0");
  tamilKaagunita.set("u", "\u0BC1");
  tamilKaagunita.set("U", "\u0BC2");
  tamilKaagunita.set("z", "\u0BC2");
  tamilKaagunita.set("x", "\u0BC2"); // RU
  tamilKaagunita.set("e", "\u0BC6");
  tamilKaagunita.set("E", "\u0BC7");
  tamilKaagunita.set("!", "\u0BC8"); // ai
  tamilKaagunita.set("o", "\u0BCA");
  tamilKaagunita.set("O", "\u0BCB");
  tamilKaagunita.set("@", "\u0BCC"); // au

  tamilNumbers.set("0", "\u0BE6");
  tamilNumbers.set("1", "\u0BE7");
  tamilNumbers.set("2", "\u0BE8");
  tamilNumbers.set("3", "\u0BE9");
  tamilNumbers.set("4", "\u0BEA");
  tamilNumbers.set("5", "\u0BEB");
  tamilNumbers.set("6", "\u0BEC");
  tamilNumbers.set("7", "\u0BED");
  tamilNumbers.set("8", "\u0BEE");
  tamilNumbers.set("9", "\u0BEF");

  tamilViraama = "\u0BCD";
  tamilAnusvaara = "\u0B82";
  tamilVisarga = "\u0B83";
  tamilAvagraha = "\u0CBD";
  tamilDanda = "\u0964";
  tamilDoubleDanda = "\u0965";
  tamilChandraBindu = tamilAnusvaara; // Placeholder
}

// function clearMaps() {
//   tamilVowels.clear();
//   tamilConsonants.clear();
//   tamilKaagunita.clear();
//   tamilNumbers.clear();
// }
