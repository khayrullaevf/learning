const box = document.querySelector(".box");

const myData = fetch("https://restcountries.com/v3.1/all");

myData
  .then(function (response) {
    return response.json();
  })
  .then(function (datas) {
    datas.forEach((data) => {
      //   console.log(data.flags);

      const country = document.createElement("div");
      const name = document.createElement("h3");
      const flag = document.createElement("img");
      flag.src = data.flags.png;
      flag.alt = data.flags.alt;

      name.textContent = data.name.common;
      country.appendChild(flag);
      country.appendChild(name);
      box.appendChild(country);
    });
  })
  .catch((error) => {
    console.log(error);
  });
