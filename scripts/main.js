const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("ページタイトルに含めたいので、あなたの名前を教えてね！")
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}さんへ、Mozillaのご紹介`;
}

const storedName = localStorage.getItem("name");
if (storedName) {
    myHeading.textContent = `${storedName}さんへ、Mozillaのご紹介`;
}

myButton.onclick = () => {
    setUserName();
};
