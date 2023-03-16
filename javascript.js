const APILink = 'https://type.fit/api/quotes';
const title = document.getElementById('title');
const quoteBtn = document.getElementsByClassName("randomQuote")[0];

quoteBtn.addEventListener("click", updateContent);

updateContent();
function updateContent() {
    fetch(APILink)
        .then(res => res.json())
        .then(data => {
            let randomNum = getRandomId(data.length);
            title.innerText = `ADVICE #${randomNum}`;
            document.getElementById('quote').innerText = `"${data[randomNum].text}"`;
        });
}
function getRandomId(x) {
    return Math.floor(Math.random() * x);
}