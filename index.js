//console.log("Đây là website sinh nhật của hvy 💝")

//window.alert("Chúc chị sinh nhật vui vẻ nho")

const envelope = document.getElementById("outer-envelope");
const btn = document.getElementById("envelope-btn");

btn.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

const overlay = document.getElementById("backgroundBlind");

const letters = document.getElementById("lettersJS");
const showBtn = document.getElementById("wish-button");
const closeLettersBtn = document.getElementById("closeLetters");
const giftBtn = document.getElementById("gift-btn");

const backgroundGift = document.getElementById("gift");
const closeGiftBtn = document.getElementById("closeGift");

// Ấn vào nút nhận thư để lá thư xuất hiện
showBtn.addEventListener("click", () => {
  letters.style.display = "flex";
  overlay.style.display = "flex";
  closeLettersBtn.style.display = "flex";
});

// Thoát khỏi lá thư
closeLettersBtn.addEventListener("click", () => {
  letters.style.display = "none";
  overlay.style.display = "none";
});

// Ân vào nhận quà để những phần quà xuất hiện và xóa hết lá thư
giftBtn.addEventListener("click", () => {
  letters.style.display = "none";
  overlay.style.display = "none";
  backgroundGift.style.display = "flex";
  closeGiftBtn.style.display = "flex";
});

// Thoát khỏi phần nhận quà
closeGiftBtn.addEventListener("click", () => {
  backgroundGift.style.display = "none";
  overlay.style.display = "none";
});
