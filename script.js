const messages = [
  "Cậu có chắc không?",
  "Thật sự chắc chắn phải không?",
  "Cậu có chắc chắn không?",
  "Pookie ơi, làm ơn...",
  "Hãy nghĩ xem!",
  "Nếu bạn nói không, tôi sẽ rất buồn...",
  "Tôi sẽ rất buồn...",
  "Tôi sẽ rất rất rất buồn...",
  "Được rồi, tôi sẽ ngừng hỏi...",
  "Đùa thôi, hãy nói đồng ý đi! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
