# Translitera - Phonetic Typing in Some Indian Languages


# Translitera - Phonetic Typing in Some Indian Languages

## Introduction

There are 22 official languages in India, and a number of them have been specified in the Unicode standard, and their hex codes are available at the website http://www.unicode.org/charts/. Software to phonetically convert Indian language text written in English, into a representation in that language itself, is interesting to work on, and that is what is attempted in this code. 

There are several transliteration tools for converting from English text to Indian languages. However, I have found that some of them are platform specific, working only on Windows, or on Linux systems. Have not come across a browser based solution, which can hopefully work equally on all platforms - Windows, Mac and Linux. This is an attempt towards such a tool. 

You can download the code at https://github.com/amarnaths0005/Translitera

You can try this online at https://amarnaths0005.github.io/Translitera/

The following picture shows a screenshot.

![Image of Translitera](https://github.com/amarnaths0005/Translitera/blob/main/translitera.png)


## Requirements of this Software
This software is intended to take as input Indian language text, written in roman script, English script, and then produce output into the script of language of choice. More specifically, the language scripts can be one of Assamese, Bengali, Devanagari, Gujarati, Gurmukhi, Kannada, Malayalam, Odia, Tamil or Telugu. This software is to work on a browser, and is to be a HTML5 application which uses JavaScript. The output is to be displayed in the client machine, using a font installed on that machine. This output can then be copied to the clipboard, and be pasted into a text processor like Notepad or Word.

## Scheme of Solution
The steps of a solution strategy are outlined below:
1. At the outset, character maps are setup for each of the languages being addressed - Assamese, Bengali, Devanagari, Gujarati, Gurmukhi, Kannada, Malayalam, Odia, Tamil and Telugu. The character maps of Assamese and Bengali are the nearly identical, with differences in two letters, so these two languages have the same character map. These character maps are defined in a set of JavaScript files - `bengali.js`, `devanagari.js`, `gujarati.js`, `gurmukhi.js`, `kannada.js`, `malayalam.js`, `oriya.js`, `tamil.js` and `telugu.js`. These are all loaded at the beginning of the file. These maps are defined for vowels, consonants, dependent vowel signs (called Kaagunita in Kannada), and numbers. In addition to what are called Anusvaara, Visarga, Viraama and other few miscellaneous symbols. 

2. The input text which may be in the form of several lines is split into individual lines using the JavaScript function `split()` which works on strings. This enables us to process each line separately.

3. Within each line, the text portion is separated from the numbers, and these are processed separately. Processing of numbers is quite a straightforward activity. Each number in the original text is replaced by the corresponding number in the specific language set. 

4. Now, the most important part is the processing of text, individual words. The main JavaScript tool used in this is the Regex. A number of regexes are setup, to extract relevant portions of the text, and also to split each word into parts which can then be individually processed. For example, a long word like `mahaabhaarata` is split into these parts `ma`, `haa`, `bhaa`, `ra`, `ta`. The regex which splits a big word into smaller manageable parts is `/[bcdfghjklmnpqrstvwxyz~&|,.?\'-]{0,}[aeiou^]{0,}/`. One can assume, that most words in Indian languages can be split up into parts each of which ends in a vowel. Then a set of regexs are used for converting two characters like `Th`, `Dh`, `th`, `dh`, and others as just single characters, so that the corresponding part can be handled in the function `handlePartOfLength2()`. Therefore, we can say that this main regex results in a substring which, in most cases, begins with a consonant, and ends in a vowel. 

5. Once these individual parts are available, they can be independently processed. These parts are classified as those parts which have only one letter, parts which have two letters, parts with three letters, and parts which have more than 3 letters. These are processed in JavaScript functions `handlePartOfLength1()`, `handlePartOfLength2()`, `handlePartOfLength3()`, `handlePartOfLengthGreaterThan3()`. Handling of these functions can be done in two main ways - one in which each language is handled in a separate file, and one in which all languages are processed in the same file. We have adopted the second approach in this solution. Adopting such a strategy necessitates the use of a number of `if` statements for handling the special characteristics of each language.

6. For Assamese, Bengali, Gujarati, Gurmukhi and Odia languages, if no other dependent vowel signs are specified, then an implicit `a` is implied. This is to be handled in the code. Otherwise, a Viraama is to be applied to the letter. In the `handlePartOfLength1()`, the conditions where this single letter is an Anusvaara, Visarga, Danda are also to be handled. Also the Gurmukhi Tippi and Addak are to be handled here.

7. In the function `handlePartOfLength2()`, one thing to be handled are the Chillu letters which come in Malayalam. Another thing to be handled is the Bengali character Khanda Ta. There are some special cases to be handled in Gurmukhi (for the Addak) and Tamil languages. Then comes the general case of handling two characters. The cases to be handled are when both the characters are consonants, or both are vowels, or when the first is a consonant and the second is a vowel.

8. The function `handlePartOfLength3()` is somewhat big. First to be checked is the presence of two successive consonant characters in the Gurmukhi language. This is done using the regex `/([bcdfghjklmnpqrstvwxyz])\1+/`; this needs to be replaced with an Addak and a single consonant character. Then comes the check for Anusvaara, Visarga, Avagraha in the three character set. Then come the cases where the second character is a consonant and third character is a vowel; here again, the cases where the third character is an `a` or not. 

9. Then comes the function `handlePartOfLengthGreaterThan3()`, which, though is a rare occurrence, needs to be handled. Here again, some special cases are handled. 

10. All of these above functions, including splitting of the original text into lines, splitting each line into words, splitting each word into parts of 1, 2, 3, or more characters each, transliterating each part, and assembling the whole text back again, are contained in a JavaScript file `script.js`.

11. The HTML consists of two text areas, one each for input and output, and some buttons. The associated CSS file takes care of styling. 

12. To give the user a feel for how it is to type in English, and view in his or her preferred language, several sample texts in the different languages are also provided in this app. 

13. Though the facility of directly saving to a file is not provided, we have provided the facility to copy the input text, or output text to the Clipboard. These can then be pasted into a Notepad or Word file, for further use.

14. Since I am not sure of the performance of this code for large pieces of text, I have restricted the maximum number of characters in the input textarea to 4000, which I feel is sufficient for most of your work. Should you need more length, I suggest you do your work in parts, with each part within the 4000 character limit. And then join all parts in your Notepad or Word file. 

## More on the Code

1. The first thing done is the setting up of the different maps. For example, for the Kannada language, these are the maps - `kannadaVowels`, `kannadaConsonants`, `kannadaKaagunita` and `kannadaNumbers`. Similar maps are set up for the other languages also. There are these JavaScript files - `bengali.js, devanagari.js, gujarati.js, gurmukhi.js, kannada.js, malayalam.js, oriya.js, tamil.js, telugu.js`. A sample of the `kannadaVowels` map is shown here 

```
 kannadaVowels.set("a", "\u0C85");
 kannadaVowels.set("A", "\u0C86"); // Also aa
 kannadaVowels.set("i", "\u0C87");
 kannadaVowels.set("I", "\u0C88"); // Also ee
 kannadaVowels.set("u", "\u0C89");
 kannadaVowels.set("U", "\u0C8A");
```

In addition there are certain symbols like `anusvaara`, `visarga`, `viraama`. These are also set up for each language. 

2. Then, the given text is split into lines, and further, each line is split into words using the spaces between words.

3. Then the regular expression `const regex27 = /[bcdfghjklmnpqrstvwxyz~&|,.?\'-]{0,}[aeiou^]{0,}/gi;` is used to split each word into its constituent parts which can be independently transliterated. This split is done in this line 

```
let splitParts = splitNos[j].match(regex27);
```

4. The function `transliterateEachPart()` is responsible for transliterating each of the parts of a word. The following extract of this function does the task of updating the result string in the chosen language.

```
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
```

With this extract, there are four functions `handlePartOfLength1()`, `handlePartOfLength2()`, `handlePartOfLength3()`, `handlePartOfLengthGreaterThan3()`. These functions are responsible for handling parts of the lengths specified in the name of the function. The result is appended to the main transliteration result. 

5. For example, in the function `handlePartOfLength1()`, the most important lines are 

```
result += vowels.get(updatedPart[0]);
```
and 
```
result += consonants.get(updatedPart[0]);
```

Special cases for some of the languages are also handled in this function. Similar are the other functions which handle parts of length 2, 3 and more than 3. 

6. The entire transliteration code is in the file `script.js`. This file also contains functions which respond to button clicks on the screen, and also update the DOM with the final transliteration result. 

## Points to Note
- My familiarity with Indian languages is limited to only these languages - Kannada, Devanagari, and Tamil and Telugu to some extent. Since there are a large number of words in each language, I have verified each language to the extent of the sample passages of text that are provided here. There may be cases in each of the JavaScript functions that are yet to be handled, which I am currently not aware of. If you come across any text which results in a `undefined` or a `NaN` appearing on the output screen, please send me a mail with the text, along with expected output, to the email id mentioned on top of the `script.js` JavaScript file. I will make all attempts to handle it in the next version. 

- Or, since this is a publicly hosted on Github, feel free to fork this repository, and extend the code on your own. 

- I have used some special characters to replace some string patterns via regexes, and therefore you will not be able to view special characters in the output. I suggest that you take the output from here into Notepad, and then add those special characters there, and save it for further use. Use this app only for converting normal words from English text to your language.

- One more thing. This software is weak in handling two successive vowels. Simply because I have still not figured out how to distinguish an independent vowel from a dependent vowel extension (Kaagunita), when two vowels come one after the other. For this, I suggest you to include a space between two successive vowels, get the transliteration done here, take this output to Notepad, and then remove the space in Notepad. This is a suggested workaround. 

- There are certain words like `nirRuti` which do not get transliterated properly. If you find more such words, please send me those words, and I will think of a possible resolution. 

- In summary, this is not necessarily a perfect piece of code, and is subject to modifications in future. For all the sample text passages provided, I hope and feel that the output is acceptable. 

- There are two places where modifications can be made - one in the input text, and another in the code which handles it. Try changing the input text, and see whether the output changes, to something which is acceptable, before attempting to change the JavaScript code. 

## Closure
An attempt has been made here to provide a simple transliteration tool from English to some Indian languages. It is hoped that you find this tool useful for drafting small letters on your own, or preparing small reports, statements. Please send your feedback to the email mentioned on top of the JavaScript file `script.js`. Thank you. 

