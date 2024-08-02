onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        showAlert();
    }, 1000);
};

function showAlert() {
    alert("Hai Nurzulaikha, I am very sorry for making it complicated. I still love you. Hope you are not turned off after that text. Actually nampak stupid jugak I tulis panjang gitu tapi dah terlambat dah nak delete so begitu lah. I LOVE YOU!! (click ok tau i have something for you)");
}
