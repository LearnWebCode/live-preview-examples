let clickCount = 0
const clickSpan = document.querySelector("#click-count")

document.querySelector("#click-me").addEventListener("click", () => {
  clickCount++
  console.log(clickCount)
  clickSpan.innerHTML = clickCount
})
