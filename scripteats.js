let comidaescolhida;
let teste1;
let comidavalor;
let ativar = 0;
console.log(teste1);
function SelecionarComida(comida) {
  let tentativa = `${teste1}`;
  let final = "." + tentativa;
  let nomedaclasse;
  let numero;
  nomedaclasse = comida.className;
  numero = nomedaclasse[5];
  console.log(tentativa);
  console.log(final);
  const teste = document.querySelector(final);
  if (teste !== null) {
    teste.classList.remove("selecionado");
    ativar--;
  }
  console.log(teste);
  console.log(comida);
  console.log(nomedaclasse);
  console.log(numero);
  let comidanomeclasse = `.nomeprato${numero}`;
  let comidavalores = `.preço${numero}`;
  const comidanome = document.querySelector(comidanomeclasse);
  const comidapreço = document.querySelector(comidavalores);
  comida.classList.add("selecionado");
  comidaescolhida = comidanome.innerHTML;
  comidavalor = comidapreço.innerHTML;
  console.log(comidaescolhida);
  console.log(comidavalor);
  console.log(comidaescolhida[4]);
  console.log(comida.className);
  teste1 = nomedaclasse;
  console.log(teste1);
  ativar++;
  console.log(ativar);
  mudança();
}

let bebidaescolhida;
console.log(bebidaescolhida);
let bebidavalor;
console.log(bebidavalor);
let teste2;
function SelecionarBebida(bebida) {
  let tentativa = `${teste2}`;
  let final = "." + tentativa;
  const teste = document.querySelector(final);
  if (teste !== null) {
    teste.classList.remove("selecionado");
    ativar--;
  }
  let nomedaclasse;
  let numero;
  nomedaclasse = bebida.className;
  numero = nomedaclasse[6];
  let bebidanomeclasse = `.nomebebida${numero}`;
  let bebidavalores = `.preco${numero}`;
  const bebidanome = document.querySelector(bebidanomeclasse);
  const bebidapreço = document.querySelector(bebidavalores);
  bebida.classList.add("selecionado");
  bebidaescolhida = bebidanome.innerHTML;
  bebidavalor = bebidapreço.innerHTML;
  console.log(bebidaescolhida);
  console.log(bebidavalor);
  teste2 = nomedaclasse;
  ativar++;
  console.log(ativar);
  mudança();
}

let sobremesaescolhida;
console.log(sobremesaescolhida);
let sobremesavalor;
console.log(sobremesavalor);
let teste3;
function SelecionarSobremesa(sobremesa) {
  let tentativa = `${teste3}`;
  let final = "." + tentativa;
  const teste = document.querySelector(final);
  if (teste !== null) {
    teste.classList.remove("selecionado");
    ativar--;
  }
  let nomedaclasse;
  let numero;
  nomedaclasse = sobremesa.className;
  numero = nomedaclasse[9];
  let sobremesanomeclasse = `.nomesobremesa${numero}`;
  let sobremesavalores = `.prec0${numero}`;
  const sobremesanome = document.querySelector(sobremesanomeclasse);
  const sobremesapreço = document.querySelector(sobremesavalores);
  sobremesa.classList.add("selecionado");
  sobremesaescolhida = sobremesanome.innerHTML;
  sobremesavalor = sobremesapreço.innerHTML;
  console.log(sobremesaescolhida);
  console.log(sobremesavalor);
  teste3 = nomedaclasse;
  ativar++;
  console.log(ativar);
  mudança();
  console.log(comidaescolhida);
  console.log(comidavalor);
  console.log(bebidaescolhida);
  console.log(bebidavalor);
  console.log(sobremesaescolhida);
  console.log(sobremesavalor);
}
function mudança() {
  if (ativar === 3) {
    const mudar = document.querySelector(".textofinal");
    const finalmudar = document.querySelector(".FinalDiv");
    mudar.innerHTML = "Fechar pedido";
    mudar.classList.add("selecionadobotao2");
    finalmudar.classList.add("selecionadobotao1");
  }
}

function enviarMensagem() {
  if (ativar === 3) {
    somar();
    let celular = 5599999999999;
    let nome = prompt("Qual é o seu nome?");
    let endereço = prompt("Qual é o seu endereço?");

    let texto = `Olá, gostaria de fazer o pedido:\n - Prato: ${comidaescolhida}\n - Bebida: ${bebidaescolhida}\n - Sobremesa: ${sobremesaescolhida}\n Total: R$ ${total}\n \n Nome: ${nome}\n Endereço: ${endereço}`;
    texto = window.encodeURIComponent(texto);

    window.open(
      "https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto,
      "_blank"
    );
  }
}

let total = 0;

function somar() {
  let x = comidavalor;
  x = x.replace("R$ ", "");
  x = x.split(".").join("");
  x = x.replace(",", ".");
  x = Number(x);
  console.log(typeof x);
  console.log(x);

  let y = bebidavalor;
  y = y.replace("R$ ", "");
  y = y.split(".").join("");
  y = y.replace(",", ".");
  y = Number(y);
  console.log(typeof y);
  console.log(y);

  let z = sobremesavalor;
  z = z.replace("R$ ", "");
  z = z.split(".").join("");
  z = z.replace(",", ".");
  z = Number(z);
  console.log(typeof z);
  console.log(z);

  total = x + y + z;
  total = total.toFixed(2);
  console.log(total);
}
