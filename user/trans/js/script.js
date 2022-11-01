// HTML5 App for Phonetic typing and converting to some Indian Languages
// Written by Amarnath S, Bengaluru, India, November 2020
// Please report issues to amarnaths.0005@gmail.com

(function () {
  "option strict";

  let consonants;
  let vowels;
  let kaagunita;
  let numbers;
  let viraama;
  let anusvaara;
  let visarga;
  let avagraha;
  let danda;
  let doubleDanda;
  let chandraBindu;

  let inputPassage;
  let outputPassage;

  let inputTextPanel;
  let outputTextPanel;

  let sampleGenericPassage;

  let language;
  let optionLang;

  let bnTrans;
  let bnKannada1;
  let bnKannada2;
  let bnKannada3;
  let bnDevanagari;
  let bnAssamese;
  let bnBengali;
  let bnGujarati;
  let bnGurmukhi;
  let bnMalayalam;
  let bnOdia;
  let bnTamil;
  let bnTelugu;
  let bnCopyInpText;
  let bnCopyOutText;

  const regex1 = /aa/g;
  const regex2 = /ee/g;
  const regex3 = /oo/g;
  const regex4 = /kh/g;
  const regex5 = /gh/g;
  const regex6 = /ch/g;
  const regex7 = /jh/g;
  const regex8 = /ph/g;
  const regex9 = /bh/g;
  const regex10 = /sh/g;
  const regex11 = /Ch/g;
  const regex12 = /ai/g;
  const regex13 = /au/g;
  const regex14 = /ou/g;
  const regex15 = /Th/g;
  const regex16 = /Dh/g;
  const regex17 = /th/g;
  const regex18 = /dh/g;
  const regex19 = /Sh/g;
  const regex20 = /~g/g;
  const regex21 = /~j/g;
  const regex22 = /Ru/g;
  const regex23 = /RU/g;
  const regex24 = /eu/g;
  const regex25 = /~n/g;
  const regex26 = /~m/g;
  const regex27 = /[bcdfghjklmnpqrstvwxyz~&|,.?\'-]{0,}[aeiou^]{0,}/gi;
  const regex28 = /zh/g;
  const regex29 = /~M/g;
  const regex30 = /rx/g;
  const regex31 = /~n/g; // For Gurmukhi Addak

  window.onload = init;

  function init() {
    setupKannadaMaps();
    setupDevanagariMaps();
    setupTeluguMaps();
    setupBengaliMaps();
    setupOdiaMaps();
    setupTamilMaps();
    setupGujaratiMaps();
    setupGurmukhiMaps();
    setupMalayalamMaps();
    danda = devanagariDanda;
    doubleDanda = devanagariDoubleDanda;

    sampleGenericPassage = " namaskAra suprabhAta shubhadina shubharaatri";

    //sampleGenericPassage = "vishRuta";

    language = "Kannada";

    document.getElementById("inputEnglish").value = sampleGenericPassage;

    optionLang = document.getElementById("inpLang");
    optionLang.addEventListener("change", handleOption, false);

    bnTrans = document.getElementById("transliterate");
    bnTrans.addEventListener("click", transliteratePassage, false);

    bnKannada1 = document.getElementById("sampleKannada1");
    bnKannada1.addEventListener("click", showKannadaText1, false);

    bnKannada2 = document.getElementById("sampleKannada2");
    bnKannada2.addEventListener("click", showKannadaText2, false);

    bnKannada3 = document.getElementById("sampleKannada3");
    bnKannada3.addEventListener("click", showKannadaText3, false);

    bnDevanagari = document.getElementById("sampleDevanagari");
    bnDevanagari.addEventListener("click", showDevanagari, false);

    bnAssamese = document.getElementById("sampleAssamese");
    bnAssamese.addEventListener("click", showAssamese, false);

    bnBengali = document.getElementById("sampleBengali");
    bnBengali.addEventListener("click", showBengaliText, false);

    bnGujarati = document.getElementById("sampleGujarati");
    bnGujarati.addEventListener("click", showGujaratiText, false);

    bnGurmukhi = document.getElementById("sampleGurmukhi");
    bnGurmukhi.addEventListener("click", showGurmukhiText, false);

    bnMalayalam = document.getElementById("sampleMalayalam");
    bnMalayalam.addEventListener("click", showMalayalamText, false);

    bnOdia = document.getElementById("sampleOdia");
    bnOdia.addEventListener("click", showOdiaText, false);

    bnTamil = document.getElementById("sampleTamil");
    bnTamil.addEventListener("click", showTamilText, false);

    bnTelugu = document.getElementById("sampleTelugu");
    bnTelugu.addEventListener("click", showTeluguText, false);

    bnCopyInpText = document.getElementById("copyInpText");
    bnCopyInpText.addEventListener("click", copyInputText, false);

    bnCopyOutText = document.getElementById("copyOutText");
    bnCopyOutText.addEventListener("click", copyOutputText, false);

    inputTextPanel = document.getElementById("inputEnglish");
    inputPassage = inputTextPanel.value;

    optionLang.value = "kannada";
    outputTextPanel = document.getElementById("outputText");
    handleOption();
  }

  function handleOption() {
    if (optionLang.value === "kannada") {
      language = "Kannada";

      vowels = kannadaVowels;
      consonants = kannadaConsonants;
      kaagunita = kannadaKaagunita;
      numbers = kannadaNumbers;
      anusvaara = kannadaAnusvaara;
      visarga = kannadaVisarga;
      viraama = kannadaViraama;
      avagraha = kannadaAvagraha;
      chandraBindu = kannadaChandraBindu;

      transliteratePassage();
    } else if (optionLang.value === "devanagari") {
      language = "Devanagari";

      vowels = devanagariVowels;
      consonants = devanagariConsonants;
      kaagunita = devanagariKaagunita;
      numbers = devanagariNumbers;
      anusvaara = devanagariAnusvaara;
      visarga = devanagariVisarga;
      viraama = devanagariViraama;
      avagraha = devanagariAvagraha;
      chandraBindu = devanagariChandraBindu;

      transliteratePassage();
    } else if (optionLang.value === "telugu") {
      language = "Telugu";

      vowels = teluguVowels;
      consonants = teluguConsonants;
      kaagunita = teluguKaagunita;
      numbers = teluguNumbers;
      anusvaara = teluguAnusvaara;
      visarga = teluguVisarga;
      viraama = teluguViraama;
      avagraha = teluguAvagraha;
      chandraBindu = teluguChandraBindu;

      transliteratePassage();
    } else if (optionLang.value === "bengali") {
      language = "Bengali";

      vowels = bengaliVowels;
      consonants = bengaliConsonants;
      kaagunita = bengaliKaagunita;
      numbers = bengaliNumbers;
      anusvaara = bengaliAnusvaara;
      visarga = bengaliVisarga;
      viraama = bengaliViraama;
      avagraha = bengaliAvagraha;
      chandraBindu = bengaliChandraBindu;

      bengaliConsonants.set("r", "\u09B0");
      bengaliConsonants.set("x", "\u09B0");
      bengaliConsonants.set("v", "\u09AC");
      bengaliConsonants.set("w", "\u09AC");

      transliteratePassage();
    } else if (optionLang.value === "assamese") {
      language = "Assamese";

      vowels = bengaliVowels;
      consonants = bengaliConsonants;
      kaagunita = bengaliKaagunita;
      numbers = bengaliNumbers;
      anusvaara = bengaliAnusvaara;
      visarga = bengaliVisarga;
      viraama = bengaliViraama;
      avagraha = bengaliAvagraha;
      chandraBindu = bengaliChandraBindu;

      // The ra, va are different in Assamese and Bengali
      bengaliConsonants.set("r", assameseRa);
      bengaliConsonants.set("x", assameseRa);
      bengaliConsonants.set("v", assameseVa);
      bengaliConsonants.set("w", assameseVa);

      transliteratePassage();
    } else if (optionLang.value === "odia") {
      language = "Odia";

      vowels = odiaVowels;
      consonants = odiaConsonants;
      kaagunita = odiaKaagunita;
      numbers = odiaNumbers;
      anusvaara = odiaAnusvaara;
      visarga = odiaVisarga;
      viraama = odiaViraama;
      avagraha = odiaAvagraha;
      chandraBindu = odiaChandraBindu;

      transliteratePassage();
    } else if (optionLang.value === "tamil") {
      language = "Tamil";

      vowels = tamilVowels;
      consonants = tamilConsonants;
      kaagunita = tamilKaagunita;
      numbers = tamilNumbers;
      anusvaara = tamilAnusvaara;
      visarga = tamilVisarga;
      viraama = tamilViraama;
      avagraha = tamilAvagraha;
      chandraBindu = tamilChandraBindu;

      transliteratePassage();
    } else if (optionLang.value === "gujarati") {
      language = "Gujarati";

      vowels = gujaratiVowels;
      consonants = gujaratiConsonants;
      kaagunita = gujaratiKaagunita;
      numbers = gujaratiNumbers;
      anusvaara = gujaratiAnusvaara;
      visarga = gujaratiVisarga;
      viraama = gujaratiViraama;
      avagraha = gujaratiAvagraha;
      chandraBindu = gujaratiChandraBindu;

      transliteratePassage();
    } else if (optionLang.value === "gurmukhi") {
      language = "Gurmukhi";

      vowels = gurmukhiVowels;
      consonants = gurmukhiConsonants;
      kaagunita = gurmukhiKaagunita;
      numbers = gurmukhiNumbers;
      anusvaara = gurmukhiAnusvaara;
      visarga = gurmukhiVisarga;
      viraama = gurmukhiViraama;
      avagraha = gurmukhiAvagraha;
      chandraBindu = gurmukhiChandraBindu;

      transliteratePassage();
    } else if (optionLang.value === "malayalam") {
      language = "Malayalam";

      vowels = malayalamVowels;
      consonants = malayalamConsonants;
      kaagunita = malayalamKaagunita;
      numbers = malayalamNumbers;
      anusvaara = malayalamAnusvaara;
      visarga = malayalamVisarga;
      viraama = malayalamViraama;
      avagraha = malayalamAvagraha;
      chandraBindu = malayalamChandraBindu;

      transliteratePassage();
    }

    document.getElementById("outputTitle").innerHTML = language + " Output";
  }

  function transliteratePassage() {
    inputPassage = document.getElementById("inputEnglish").value;

    outputPassage = "";

    let lines = inputPassage.split("\n");

    for (let i = 0; i < lines.length; ++i) {
      let line = lines[i];
      let strgParts = line.split(" ");
      //console.log("----", strgParts);

      for (let j = 0; j < strgParts.length; ++j) {
        outputPassage += SplitIntoParts(strgParts[j]);
        outputPassage += " ";
      }
      outputPassage += "\n";
    }

    outputTextPanel.value = outputPassage;
  }

  function SplitIntoParts(strg) {
    // First find the numbers in the string
    let splitNos = strg.split(/(\d+)/);

    let transString = "";

    for (let j = 0; j < splitNos.length; ++j) {
      let isnum = /^\d+$/.test(splitNos[j]); // Check for number

      if (isnum) {
        // Handling of numbers
        let num = splitNos[j];
        for (let i = 0; i < num.length; ++i) {
          let no = num[i].toString();
          if (numbers.has(no)) {
            transString += numbers.get(no);
          } else {
            transString += no;
          }
        }
      } else {
        // Handling of non-numbers
        let splitParts = splitNos[j].match(regex27);
        //console.log(splitParts);

        for (let i = 0; i < splitParts.length - 1; ++i) {
          let isLastPart = i === splitParts.length - 2;
          let isFirstPart = i === 0;
          transString += transliterateEachPart(
            splitParts[i],
            isFirstPart,
            isLastPart
          );
        }
      }
    }
    return transString;
  }

  // Function to handle updated part of Length 1, like "H", "a", "|"
  function handlePartOfLength1(updatedPart, isFirstPart, isLastPart, result) {
    //console.log("Coming here Part 1", updatedPart, isFirstPart);
    if (updatedPart[0] == "R" && isFirstPart) {
      result += vowels.get("Ru");
    } else if (vowels.has(updatedPart[0])) {
      result += vowels.get(updatedPart[0]);
    } else if (consonants.has(updatedPart[0])) {
      if (
        (language === "Bengali" ||
          language === "Assamese" ||
          language === "Odia" ||
          language === "Gujarati" ||
          language === "Gurmukhi") &&
        isLastPart
      ) {
        // For Assamese, Bengali, Odia, Gujarati, Gurmukhi languages,
        //  the last consonant has an 'a' ending
        result += consonants.get(updatedPart[0]);
      } else {
        result += consonants.get(updatedPart[0]) + viraama;
      }
    } else if (updatedPart === "H") {
      result += visarga;
    } else if (updatedPart === "M") {
      result += anusvaara;
    } else if (updatedPart === "!") {
      result += danda;
    } else if (updatedPart === "[") {
      if (language === "Gurmukhi") {
        result += gurmukhiTippi;
      }
    } else if (updatedPart === "]") {
      if (language === "Gurmukhi") {
        result += gurmukhiAddak;
      }
    } else if (updatedPart === "=") {
      result += chandraBindu;
    } else {
      result += updatedPart;
    }
    return result;
  }

  // Function to handle updated part of Length 2, like "ta", "da", "ru", "Ba"
  function handlePartOfLength2(updatedPart, isFirstPart, result) {
    //console.log("Coming here Part 2", updatedPart, isFirstPart);

    if (language === "Malayalam") {
      if (updatedPart[1] === "^") {
        // Handle the Chillus
        if (updatedPart[0] === "N") {
          result += malayalamChilluNN;
        } else if (updatedPart[0] === "n") {
          result += malayalamChilluN;
        } else if (updatedPart[0] === "r") {
          result += malayalamChilluRR;
        } else if (updatedPart[0] === "l") {
          result += malayalamChilluL;
        } else if (updatedPart[0] === "L") {
          result += malayalamChilluLL;
        } else {
          result += malayalamChilluK;
        }
        return result;
      } else if (consonants.has(updatedPart[0]) && updatedPart[1] === "R") {
        result +=
          consonants.get(updatedPart[0]) + kaagunita.get(updatedPart[1]);
        return result;
      }
    }

    if (language === "Bengali") {
      if (updatedPart[0] === "t" && updatedPart[1] === "^") {
        result += bengaliKhandaTa;
        return result;
      }
    }

    if (updatedPart[0] === "[" || updatedPart[0] === "]") {
      // For Gurmukhi language and Tamil language
      if (updatedPart[0] === "[") {
        if (language === "Gurmukhi") {
          result += gurmukhiTippi;
        }
        if (language === "Tamil") {
          result += consonants.get("[");
          if (consonants.has(updatedPart[1])) {
            result += viraama + consonants.get(updatedPart[1]);
          } else if (kaagunita.has(updatedPart[1])) {
            result += kaagunita.get(updatedPart[1]);
          }
          return result;
        }
      } else if (updatedPart[0] === "]") {
        if (language === "Gurmukhi") {
          result += gurmukhiAddak;
        }
      }
      if (updatedPart[1] !== "a") {
        result += kaagunita.get(updatedPart[1]);
      }
    } else if (consonants.has(updatedPart[0])) {
      if (updatedPart[1] === "a") {
        result += consonants.get(updatedPart[0]);
      } else if (consonants.has(updatedPart[1])) {
        result +=
          consonants.get(updatedPart[0]) +
          viraama +
          consonants.get(updatedPart[1]) +
          viraama;
      } else {
        result +=
          consonants.get(updatedPart[0]) + kaagunita.get(updatedPart[1]);
      }
    } else if (updatedPart[0] === "|" && updatedPart[1] === "|") {
      result += doubleDanda;
    } else if (vowels.has(updatedPart[0])) {
      console.log("Should not come here Part 2");
    } else if (updatedPart[0] === "=") {
      result += chandraBindu;
      if (vowels.has(updatedPart[1])) {
        result += vowels.get(updatedPart[1]);
      } else if (consonants.has(updatedPart[1])) {
        result += consonants.get(updatedPart[1]) + viraama;
      }
    } else {
      console.log("Should not come here also Part 2");
    }
    return result;
  }

  // Function to handle updated part of Length 3, like "tri", "gge", "gra"
  function handlePartOfLength3(updatedPart, isFirstPart, result) {
    console.log("Coming here Part 3", updatedPart, isFirstPart);

    if (language === "Gurmukhi") {
      // Identify two consonants which come in pairs and replace
      // with Addak and one consonant

      // Match two repeated consonants
      let regex = /([bcdfghjklmnpqrstvwxyz])\1+/i;
      let updatedPart1 = updatedPart.match(regex);
      if (updatedPart1 !== null && updatedPart1.length === 2) {
        result += gurmukhiAddak + consonants.get(updatedPart1[0][0]);
        if (kaagunita.has(updatedPart[2])) {
          result += kaagunita.get(updatedPart[2]);
        }
        return result;
      }
    }

    // First handle the special cases of the first letter of this string
    if (
      updatedPart[0] === "M" ||
      updatedPart[0] === "&" ||
      updatedPart[0] === "H" ||
      updatedPart[0] === "[" ||
      updatedPart[0] === "]" ||
      updatedPart[0] === "="
    ) {
      if (updatedPart[0] === "M") {
        result += anusvaara;
      } else if (updatedPart[0] === "&") {
        result += avagraha;
      } else if (updatedPart[0] === "H") {
        result += visarga;
      } else if (updatedPart[0] === "[") {
        // ~n
        if (language === "Gurmukhi") {
          result += gurmukhiTippi;
        }
        if (language === "Tamil") {
          // Part starts with ~n
          result += consonants.get("[");
          if (consonants.has(updatedPart[1])) {
            result += viraama + consonants.get(updatedPart[1]);
          } else if (kaagunita.has(updatedPart[1])) {
            result += kaagunita.get(updatedPart[1]);
          }
          if (consonants.has(updatedPart[2])) {
            result += viraama + consonants.get(updatedPart[2]);
          } else if (kaagunita.has(updatedPart[2])) {
            result += kaagunita.get(updatedPart[2]);
          }
          return result;
        }
      } else if (updatedPart[0] === "]") {
        // ~m
        if (language === "Gurmukhi") {
          result += gurmukhiAddak;
        }
      } else if (updatedPart[0] === "=") {
        result += chandraBindu;
      }
      if (consonants.has(updatedPart[1])) {
        if (updatedPart[2] === "a") {
          result += consonants.get(updatedPart[1]);
        } else {
          result +=
            consonants.get(updatedPart[1]) + kaagunita.get(updatedPart[2]);
        }
      } else {
        console.log("Vowel in updatedPart[1] - Case 3 - to handle");
      }
    } else if (updatedPart[0] === "z" && isFirstPart) {
      result +=
        vowels.get("Ru") +
        consonants.get(updatedPart[1]) +
        kaagunita.get(updatedPart[2]);
    } else if (
      consonants.has(updatedPart[0]) &&
      consonants.has(updatedPart[1])
    ) {
      if (updatedPart[2] === "a") {
        result +=
          consonants.get(updatedPart[0]) +
          viraama +
          consonants.get(updatedPart[1]);
      } else if (consonants.has(updatedPart[2])) {
        result +=
          consonants.get(updatedPart[0]) +
          viraama +
          consonants.get(updatedPart[1]) +
          viraama +
          consonants.get(updatedPart[2]) +
          viraama;
      } else {
        result +=
          consonants.get(updatedPart[0]) +
          viraama +
          consonants.get(updatedPart[1]) +
          kaagunita.get(updatedPart[2]);
      }
    } else if (consonants.has(updatedPart[0]) && vowels.has(updatedPart[1])) {
      if (updatedPart[1] === "a") {
        result += consonants.get(updatedPart[0]) + vowels.get(updatedPart[2]);
      } else {
        result +=
          consonants.get(updatedPart[0]) +
          kaagunita.get(updatedPart[1]) +
          vowels.get(updatedPart[2]);
      }
    }
    return result;
  }

  function handlePartOfLengthGreaterThan3(updatedPart, result) {
    //console.log("Coming here Part 4", updatedPart);
    if (
      updatedPart[0] === "M" ||
      updatedPart[0] === "&" ||
      updatedPart[0] === "H" ||
      updatedPart[0] === "[" ||
      updatedPart[0] === "]"
    ) {
      if (updatedPart[0] === "M") {
        result += anusvaara;
      } else if (updatedPart[0] === "&") {
        result += avagraha;
      } else if (updatedPart[0] === "H") {
        result += visarga;
      } else if (updatedPart[0] === "[") {
        // ~n
        if (language === "Gurmukhi") {
          result += gurmukhiTippi;
        }
      } else if (updatedPart[0] === "]") {
        // ~m
        if (language === "Gurmukhi") {
          result += gurmukhiAddak;
        }
      }
      if (consonants.has(updatedPart[1]) && consonants.has(updatedPart[2])) {
        if (updatedPart[3] === "a") {
          result +=
            consonants.get(updatedPart[1]) +
            viraama +
            consonants.get(updatedPart[2]);
        } else {
          result +=
            consonants.get(updatedPart[1]) +
            viraama +
            consonants.get(updatedPart[2]) +
            kaagunita.get(updatedPart[3]);
        }
      }
    } else {
      for (let i = 0; i < updatedPart.length - 2; ++i) {
        result += consonants.get(updatedPart[i]) + viraama;
      }
      if (updatedPart[updatedPart.length - 1] === "a") {
        result += consonants.get(updatedPart[updatedPart.length - 2]);
      } else {
        result +=
          consonants.get(updatedPart[updatedPart.length - 2]) +
          kaagunita.get(updatedPart[updatedPart.length - 1]);
      }
    }
    return result;
  }

  function transliterateEachPart(part, isFirstPart, isLastPart) {
    let result = "";

    let updatedPart = part;
    updatedPart = updatedPart.replace(regex1, "A");
    updatedPart = updatedPart.replace(regex2, "I");
    updatedPart = updatedPart.replace(regex3, "U");
    updatedPart = updatedPart.replace(regex4, "K");
    updatedPart = updatedPart.replace(regex5, "G");
    updatedPart = updatedPart.replace(regex6, "c");
    updatedPart = updatedPart.replace(regex7, "J");
    updatedPart = updatedPart.replace(regex8, "P");
    updatedPart = updatedPart.replace(regex9, "B");
    updatedPart = updatedPart.replace(regex10, "S");
    updatedPart = updatedPart.replace(regex11, "C");
    updatedPart = updatedPart.replace(regex12, "!");
    updatedPart = updatedPart.replace(regex13, "@");
    updatedPart = updatedPart.replace(regex14, "@");
    updatedPart = updatedPart.replace(regex15, "#");
    updatedPart = updatedPart.replace(regex16, "$");
    updatedPart = updatedPart.replace(regex17, "%");
    updatedPart = updatedPart.replace(regex18, "^");
    updatedPart = updatedPart.replace(regex19, "*");
    updatedPart = updatedPart.replace(regex20, "<");
    updatedPart = updatedPart.replace(regex21, ">");

    if (language != "Tamil") {
      updatedPart = updatedPart.replace(regex22, "R");
    }
    updatedPart = updatedPart.replace(regex23, "x");

    if (language !== "Odia") {
      updatedPart = updatedPart.replace(regex24, "U");
    }

    updatedPart = updatedPart.replace(regex25, "[");
    updatedPart = updatedPart.replace(regex26, "]");
    updatedPart = updatedPart.replace(regex28, "z");
    updatedPart = updatedPart.replace(regex29, "=");
    updatedPart = updatedPart.replace(regex30, "x");

    if (updatedPart.length === 1) {
      result += handlePartOfLength1(
        updatedPart,
        isFirstPart,
        isLastPart,
        result
      );
    } else if (updatedPart.length === 2) {
      result += handlePartOfLength2(updatedPart, isFirstPart, result);
    } else if (updatedPart.length === 3) {
      result += handlePartOfLength3(updatedPart, isFirstPart, result);
    } else {
      // updatedPart.length > 3
      result += handlePartOfLengthGreaterThan3(updatedPart, result);
    }
    return result;
  }

  function copyInputText() {
    // Copy input text to clipboard
    inputTextPanel.select();
    inputTextPanel.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Input text copied to clipboard");
  }

  function copyOutputText() {
    // Copy output text to clipboard
    outputTextPanel.select();
    outputTextPanel.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Output text copied to clipboard");
  }

  function showKannadaText3() {
    let passage =
      "    Daa || guMDappanavara maMkutimmana kagga \n \n shree viShNu vishvaadimoola maayaalOla | \n dEva sarvEsha parabommaneMdu janaM || \n aavudanu kaaNadoDamaLtiyiM naMbihudO | \n aa vichitrake namiso - maMkutimma || 1 || \n\n jeeva jaDaroopa prapaMchavanadaavudO | \n aavarisikoMDumoLaneredumihudaMte || \n bhaavakoLapaDadaMte aLategaLavaDadaMte | \n aa vishEShake maNiyo - maMkutimma || 2 || \n \n ihudO illavO tiLiyagoDadoMdu vastu nija | \n mahimeyiM jagavaagi jeeva vEShadali || \n viharipudadoLLiteMbudu nisadavaadoDaa | \n gahana tattvake sharaNo - maMkutimma || 3 ||";

    optionLang.value = "kannada";
    language = "Kannada";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showKannadaText2() {
    let passage =
      "    shree kanakadaasara kRuti - tanu ninnadu \n \n tanu ninnadu jeevana ninnadu raMgaa | \n anudinadali baahO sukha duHkha ninnadayya ||  || \n \n savinuDi vEda puraaNa shaastraMgaLa kivigoTTu kELuva kathe ninnadu | \n navamOhanaaMgiyara roopava kaNNiMda eveyikkade nODO aa nOTa ninnadayya || 1 || \n \n oDagooDi gaMdha kastoori parimaLaMgaLa biDade lEpisikoMbuvudu ninnadu | \n ShaDurasadannakke nalidaaDuva jihve kaDuruchigoMDare aa ruchi ninnadayya || 2 || \n \n maayaapaashada baleyoLage silukiruva kaaya paMchEMdriyagaLu ninnavu | \n maayaarahita kaagineleyaadikEshava raaya neenillade nararu svataMtrarE || 3 ||";

    optionLang.value = "kannada";
    language = "Kannada";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showKannadaText1() {
    let passage =
      "  shree puraMdaradaasara jagadOddhaarana \n \n jagadOddhArana ADisidaLeshOde || \n \n jagadOddhArana maganeMdu tiLiyuta | \n suguNAMta raMganA ADisidaLeshOde || \n \n nigamakE silukada agaNita mahimana | \n magugaLa mANikyana ADisidaLeshOde || \n \n aNOraNIyana mahatO mahImana | \n apramEyanana ADisidaLeshOde || \n \n parama puruShana paravAsudEvana |\n puraMdara viThalana ADisidaLeshOde ||";

    optionLang.value = "kannada";
    language = "Kannada";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showDevanagari() {
    let passage =
      "      praarthanaa \n \n yaM brahmaa varuNEndra rudra marutaH stunvanti divyaiH stavaiH | \n vedaissaa~ggapadakramOpaniShadairgaayanti yaM saamagaaH | \n dhyaanaavasthita tadgatEna manasaa pashyanti yaM yOginaH | \n yasyaaMtaM na vidussuraaH suragaNaaH dEvaaya tasmai namaH || 1 || \n \n namastE satE tE jagatkaaraNaaya \n namastE chitE sarva lOkaashrayaaya | \n namo&dvaita tattvaaya mukti pradaaya \n namO brahmaNE vyaapiNE shaashvataaya || 2 ||\n \n tvamEkaM sharaNyaM tvamEkaM varENyaM \n tvamEkaM jagatpaalakaM svaprakaasham | \n tvamEkaM jagatkartRu maatRu prahatRu \n tvamEkaM paraM nishchalaM nirvikalpaM || 3 || \n \n vayaM tvaaM smaraamO vayaM tvaam bhajaamaH \n vayaM tvaaM jagatsaakShi roopaM namaamaH | \n sadEkaM nidhaanaM niraalambameeshaM \n bhavaambOdhi pOtaM sharaNyaM vrajaamaH || 4 || \n \n yO&ntaH pravishya mamavaachamimaaM prasuptaaM | \n sanjeeva yatyakhila shakti dharasvadhaamnaa | \n anyaaMshcha hasta charaNa shravaNa tvagaadeen | \n praaNaannamO bhagavatE puruShaaya tubhyaM || 5 || \n \n tvamEva maataa cha pitaa tvamEva \n tvamEva bandhushcha sakhaa tvamEva | \n tvamEva vidyaa draviNaM tvamEva \n tvamEva sarvaM mama dEvadEva || 6 || \n \n sarvE&pi sukhinassantu sarvE saMtu niraamayaaH \n sarvE bhadraaNi pashyantu maa kashchit duHkha bhaagbhavEt || 7 || \n \n || ma~ggalamastu ||";

    optionLang.value = "devanagari";
    language = "Devanagari";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showAssamese() {
    let passage =
      " a' mor aaponaar desh \n a' mor cikuni desh \n enekhan shuvala enekhan suphala \n enekhan maramar desh  \n \n a' mor sureeyaa maat  \n asamar suvadee maat \n pRuthiweer ka' to bicaari janamaTo \n nopowaa karileo paat \n \n a' mor opaja Thaai \n a' mor asamee aa i \n chaai l O~M ebaar mukhani tomaar \n he~Mpaah mor palowaa naai";

    optionLang.value = "assamese";
    language = "Assamese";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showBengaliText() {
    let passage =
      " vande maataram \n sujalaaM suphalaaM malayajasheetalaam \n shasya shaamalaaM maataram \n vande maataram \n \n shubhra jyot^snaa pulakita yaamineem \n phulla kusumita drumadalashobhineem \n suhaasumeeM sumadhurabhaashineem \n sukhadaaM baradaaM maataram \n vande maataram";

    optionLang.value = "bengali";
    language = "Bengali";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showGujaratiText() {
    let passage =
      "   vaiShNava jana to \n \n vaiShNava jana tO tEne kahiye \n  je peeDa paraaI jaaNe re \n para duHkhe upakaara kare to ye \n   mana abhimaana na aaNe re ||  || \n \n sakaLa lokamaaM sahune vaMde \n   niMdaa na kare kenI re \n vaaca kaaCha mana nishchala raakhe \n   dhana dhana jananI tenee re || 1 || \n \n samadRuShTi ne tRuShNaa tyaagee \n   para tree jene maata re \n  jihvaa thakee asatya na bole \n    paradhana nava jhaale haatha re || 2 ||\n \n moha maayaa vyaape nahi jene \n    dhRuDha vairaagya jenaa manamaaM re \n raama naama shu taaLee re laagee \n   sakaLa teeratha tenaa tanamaaM re || 3 || \n \n vaNa lobhee ne kapaTa rahita Che \n    kaama krodha nivaaryaaM re \n  bhaNe narasaiyo tenuM darshana karataaM \n    kuLa ekotera taaryaa re || 4 ||";

    optionLang.value = "gujarati";
    language = "Gujarati";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showGurmukhiText() {
    let passage =
      " deh sivaa baru mohi eehai subha karmana te kabahU~m na TareM || \n na DaroM ari so jab jaabi laroM nishchai kari apuni jeet karoM || \n aru sikh ho aapne hee man kou iha laalach ha u gun ta u ucharoM || \n jab aav kee a udh nidaan banai ati hee ran mai tab joojh maroM ||";

    optionLang.value = "gurmukhi";
    language = "Gurmukhi";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showMalayalamText() {
    let passage =
      " akhilaaNDa maNDalamaNiyicchorukki \n atinuLLilaananda deepaM koLutti \n paramaaNu poruLeeluM sphuraNamaay minnuM \n parama prakashamE sharaNaM nee nityaM \n \n suragOLa lakSha~g~gaLaNiyiTTu nir^thi \n aavikala souhruda bandhaM pular^thi \n atinokkeyadhara sootramiNakki \n kuTikoLLuM satyamE sharNaM neeyennuM \n \n duritangaL^ koothadumulakathil ninte \n paripoor^NNa tejassu viLayaaTikkaNmon^ \n oru jaati oru daivamEvam \n parishuddha vEdantaM saphalamaay teeraan^ ";

    passage =
      " va~jchibhoomipatE ciraM \n   sa~jjitaabhaM jayikkENaM \n dEvadEvan^ bhavaaneNuM \n   dEhasaukhyaM vaLar^ttENaM \n \n va~jchibhoomipatE ciraM \n tvaccaritamennuM bhoomau \n     viSrutamaayi viLa~g~ggENaM \n \n va~jchibhoomipatE ciraM \n mar^tyamanamEtuM bhavaal^ \n pattanamaayi bhavikkENaM \n \n va~jchibhoomipatE ciraM \n taavakamaaM kulaM mEnmEl^ \n     shreevaLar^nnullasikkENaM \n \n va~jchibhoomipatE ciraM \n maalakaRRi ciraM \n prajaapaalanaM ceytaruLENaM \n \n va~jchibhoomipatE ciraM \n   sa~jjitaabhaM jayikkENaM";

    optionLang.value = "malayalam";
    language = "Malayalam";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showOdiaText() {
    let passage =
      " bande utkaLa jananee \n    chaaru haasamaYI chaaru bhaaShamaYI \n jananee jananee jananee || \n \n poota payodhi bidhauta shareeraa \n    taaLatamaaLa sushobhita teeraa \n shubhrataTineekooLa sheekara sameeraa \n    jananee jananee jananee || 1 || \n \n ghana banabhoomi raajita a~gge \n    neeLa bhoodharamaaLaa saaje tara~gge \n  kaLa kaLa mukharita caaru biha~gge \n    jananee jananee jananee || 2 || \n \n sundarashaaLi sushobhita kShEtraa \n    j~jaanabijj~jaana pradarshita netraa \n yogee RuShigaNa uTaja pabitraa \n    jananee jananee jananee || 3 || \n \n suMdara maMdira maNDita deshaa \n    chaarukaLaabaLi shobhita beshaa \n puNya teerthacaYa poorNNa pradeshaa \n    jananee jananee jananee || 4 || \n \n utkaLa surabara darpita gehaa \n    arikuLa shoNita carccita dehaa \n bishvabhoomaNDaLa kRutabara snehaa \n    jananee jananee jananee || 5 || \n \n kabikuLamauLi sunandana bandyaa \n    bhubanabighoShita keertti anindyaa \n dhanye puNye cirasharaNye \n    jananee jananee jananee || 6 ||";

    optionLang.value = "odia";
    language = "Odia";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showTamilText() {
    let passage =
    //"  tiruppavai - shree aaNDaaL \n \n maargazhit thingaL madhi~niRai~nda ~nannaaLaal  \n ~neeraaDap poduveer pOduminO nErizhaiyeer |  \n cheermalkum aayppaaDich chelvach chiRumeergaaL \n koorvEl koDu~ndhozhilan ~na~ndagOpan kumaran || \n eraarnda kanni yachodai iLanchi~ngam   \n kaarmenich che~ggaN kadirmadhiyam pOlmukattaan || \n ~naaraayaNane ~namakke parai taruvaan \n paarOr pugazhap paDi~ndElO rembaavaay || 1 || \n\n vaiyaththu vaazhveergaaL ~naamum ~nampaavaikkuch \n cheyyu~g kirichaigaL keLeero | \n paaRkaDaluL paiyat thuyinRa paramanaDi paaDi \n ~neyyuNNom paaluNNom ~naatkaalai ~neeraaDi || \n maiyiTTu ezhudhom malariTTu ~naam muDiyom \n cheyyaadana cheyyom teekkuRaLai chenROdom | \n aiyamum pichchaiyum aa~ndanaiyum kai kaaTTi \n uyyumaa ReNNi uga~ndElO rempaavaay || 2 ||"; 
      "  tiruppAvai - shree aaNDaaL \n \n maargazhit thi~ggaL madhi~niRai~nda ~nannaaLaal \n ~neeraaDap pOduveer pOduminO ~nErizhaiyeer | \n cheermalkum aayppaaDich chelvach chiRumeergaaL \n koorvEl koDu~ndhozhilan ~na~ndagOpan kumaran || \n eraar~nda kaNNi yachOdai iLa~jchi~ggam \n kaarmEnich che~ggaN kadirmadhiyam pOlmukattaan || \n ~naaraayaNanE ~namakkE paRai taruvaan \n paarOr pugazhap paDi~ndElO rembaavaay || 1 || \n\n vaiyaththu vaazhveergaaL ~naamum ~nampaavaikkuch \n cheyyu~g kirichaigaL kELeerO | \n paaRkaDaluL paiyat thuyinRa paramanaDi paaDi \n ~neyyuNNOm paaluNNOm ~naaTkaalE ~neeraaDi ||  \n maiyiTTu ezhudhOm malariTTu ~naam muDiyOm \n cheyyaadana cheyyOm teekkuRaLai chenROdOm | \n aiyamum pichchaiyum aa~ndanaiyum kai kaaTTi \n uyyumaa ReNNi uga~ndElO rempaavaay || 2 ||";
    // Thanks to my friend Sudarsanan for pointing out mistakes in the sample Tamil text.

    optionLang.value = "tamil";
    language = "Tamil";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }

  function showTeluguText() {
    let passage =
      "  kaligenide naaku - aNNamayya keertanamu \n \n kaligenide naaku kaivalyamu \n   tolutanevvariki dorakanidi || \n \n jayapuruShOttama jaya peetaaMbara \n   jayajaya karuNaajalanidhi | \n daya yerxaMga nE dharmamu nerxaga naa \n   kriya yidi needivyakeertanamE || \n \n SaraNamu gOviMda SaraNamu kESava \n   SaraNu SaraNu Sreejanaardhana | \n parama merxaMganu bhakti yerxaMganu \n   niratamu naagati needaasyamE || \n \n namO naaraayaNaa namO lakShmeepati \n   namaH puMDareekanayanaa | \n amita SreevEMkaTaadhipa yide naa \n   kramamellanu neekaiMkaryamE || ";

    optionLang.value = "telugu";
    language = "Telugu";
    handleOption();
    inputTextPanel.value = passage;
    transliteratePassage();
  }
})();
