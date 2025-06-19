async function checkWordExists(word) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
    console.log(res);
    return res.ok;
  } catch {
    return false;
  }
}

export { checkWordExists } 