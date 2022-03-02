const clockTitle = document.querySelector(".js-clock");

function getCountDown() {
  const xMasDate = new Date("2022-12-25");
  const currentDate = new Date();

  const distance = xMasDate.getTime() - currentDate.getTime();

  const day = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getCountDown();
setInterval(getCountDown, 1000);
