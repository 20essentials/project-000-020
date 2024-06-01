const d = document;

d.addEventListener("mousemove", e => {
  let $soap = d.querySelector(".soap");
  $soap.style.left = (e.pageX) + "px";
  $soap.style.top = (e.pageY) + "px";

  let $i = d.createElement("i");
  $i.style.left = (e.pageX) + "px";
  $i.style.top = (e.pageY) + "px";
  $i.style.scale = `${Math.random() * 2 + 1}`;
  let getRandomPosition = () => {
    return `${Math.random() * 400 - 200}px`;
  }
  $i.style.setProperty("--x", getRandomPosition());
  $i.style.setProperty("--y", getRandomPosition());
  d.body.appendChild($i)

  setTimeout(() => {
    d.body.removeChild($i);
  }, 2000)
});

console.log("Based in ->", "https://youtu.be/KOIcGgJX3ow?si=I544OXrFgLaWO-3F");