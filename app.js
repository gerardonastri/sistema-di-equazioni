const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");

const d = document.querySelector("#d");
const e = document.querySelector("#e");
const f = document.querySelector("#f");

const g = document.querySelector("#g");
const h = document.querySelector("#h");
const i = document.querySelector("#i");

const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const determinante =
    a.value * e.value * i.value +
    b.value * f.value * g.value +
    c.value * d.value * h.value -
    c.value * e.value * g.value -
    b.value * d.value * i.value -
    a.value * f.value * h.value;

  if (determinante !== 0) {
    //mettiamo i coefficienti noti al posto delle x
    newa = n1;
    newd = n2;
    newg = n3;

    //calcoliamo il determinante delle x
    const determinante2 =
      newa.value * e.value * i.value +
      b.value * f.value * newg.value +
      c.value * newd.value * h.value -
      c.value * e.value * newg.value -
      b.value * newd.value * i.value -
      newa.value * f.value * h.value;

    //calcoliamo x
    const x = determinante2 / determinante;

    //mettiamo i coefficienti noti al posto delle x
    newb = n1;
    newe = n2;
    newh = n3;

    //calcoliamo il determinante delle y
    const determinante3 =
      a.value * newe.value * i.value +
      newb.value * f.value * g.value +
      c.value * d.value * newh.value -
      c.value * newe.value * g.value -
      newb.value * d.value * i.value -
      a.value * f.value * newh.value;

    //calcoliamo y
    const y = determinante3 / determinante;

    //mettiamo i coefficienti noti al posto delle x
    newc = n1;
    newf = n2;
    newi = n3;

    //calcoliamo il determinante delle y
    const determinante4 =
      a.value * e.value * newi.value +
      b.value * newf.value * g.value +
      newc.value * d.value * h.value -
      newc.value * e.value * g.value -
      b.value * d.value * newi.value -
      a.value * newf.value * h.value;

    //calcoliamo z
    const z = determinante4 / determinante;

    console.log(x, y, z);
    const risultato = document.querySelector(".risultato");
    risultato.innerHTML = `Le soluzioni sono: x = ${x}, y = ${y}, z = ${z}`;
  }
});
