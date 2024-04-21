import React from "react";

const typedCorrentlyStyle = {
  backgroundColor: "#00c448",
};

const getTypedWords = (words, player) => {
  let typedWords = words.slice(0, player.currentWordIndex);
  typedWords = typedWords.join(" ");
  return <span style={typedCorrentlyStyle}>{typedWords} </span>;
};

const currentStyle = {
  textDecoration: "underline",
};

const getCurrentWord = (words, player) => {
  return <span style={currentStyle}>{words[player.currentWordIndex]}</span>;
};

const getWordsToBeTyped = (words, player) => {
  let wordsToBeTyped = words.slice(player.currentWordIndex + 1, words.length);
  wordsToBeTyped = wordsToBeTyped.join(" ");
  return <span> {wordsToBeTyped}</span>;
};

const DisplayWords = ({ words, player }) => {
  return (
    <div className="col">
      {getTypedWords(words, player)}
      {getCurrentWord(words, player)}
      {getWordsToBeTyped(words, player)}
    </div>
  );
};

export default DisplayWords;
