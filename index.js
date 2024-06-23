
function introduction(name) {
    console.log(`introduction called with name: ${name}`);
    const result = `Hi, my name is ${name}.`;
    console.log(`introduction result: ${result}`);
    return result;
  }

  function introductionWithLanguage(name, language) {
    console.log(`introductionWithLanguage called with name: ${name}, language: ${language}`);
    const result = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(`introductionWithLanguage result: ${result}`);
    return result;
  }
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`introductionWithLanguageOptional called with name: ${name}, language: ${language}`);
    const result = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(`introductionWithLanguageOptional result: ${result}`);
    return result;
  }
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`introductionWithLanguageOptional called with name: ${name}, language: ${language}`);
    const result = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(`introductionWithLanguageOptional result: ${result}`);
    return result;
  }
 