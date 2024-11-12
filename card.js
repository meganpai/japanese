const vocabCard = document.getElementById('vocabCard');
const wordEn = vocabCard.querySelector(".word-en");
const wordJp = vocabCard.querySelector(".word-jp");
const wordRomaji = vocabCard.querySelector(".word-romaji")

const newVocab = function () {
    const num = Math.floor(Math.random() * vocab.length);
    wordEn.textContent = vocab[num].definition;
    wordJp.textContent = vocab[num].characters;
    wordRomaji.textContent = vocab[num].romaji;
};

const toggleLanguage = function () {
    wordEn.classList.toggle("hidden");
    wordJp.classList.toggle("hidden");
    wordRomaji.classList.toggle("hidden");
}

const showRomaji = function () {
    wordRomaji.classList.toggle("reveal");
}