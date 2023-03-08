/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/


const divItem = document.createElement('div');
divItem.classList.add('item');

const img1 = document.createElement('img');
img1.src = './imagens/leon.jpg';

const h2_1 = document.createElement('h2');
h2_1.innerHTML = 'O leão';

const p1 = document.createElement('p');
p1.innerHTML = 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.';

divItem.appendChild(img1);
divItem.appendChild(h2_1);
divItem.appendChild(p1);

const divItem2 = document.createElement('div');
divItem2.classList.add('item');

const img2 = document.createElement('img');
img2.src = './imagens/leopardo.jpg';

const h2_2 = document.createElement('h2');
h2_2.innerHTML = 'O leopardo';

const p2 = document.createElement('p');
p2.innerHTML = 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).';

divItem2.appendChild(img2);
divItem2.appendChild(h2_2);
divItem2.appendChild(p2);

const divItem3 = document.createElement('div');
divItem3.classList.add('item');

const img3 = document.createElement('img');
img3.src = './imagens/pantera-negra.jpg';

const h2_3 = document.createElement('h2');
h2_3.innerHTML = 'A pantera negra';

const p3 = document.createElement('p');
p3.innerHTML = 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.';

divItem3.appendChild(img3);
divItem3.appendChild(h2_3);
divItem3.appendChild(p3);

const divItem4 = document.createElement('div');
divItem4.classList.add('item');

const img4 = document.createElement('img');
img4.src = './imagens/jaguar.jpg';

const h2_4 = document.createElement('h2');
h2_4.innerHTML = 'O jaguar';

const p4 = document.createElement('p');
p4.innerHTML = 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).';

divItem4.appendChild(img4);
divItem4.appendChild(h2_4);
divItem4.appendChild(p4);

const divItem5 = document.createElement('div');
divItem5.classList.add('item');

const img5 = document.createElement('img');
img5.src = './imagens/chita.jpg';

const h2_5 = document.createElement('h2');
h2_5.innerHTML = 'O guepardo';

const p5 = document.createElement('p');
p5.innerHTML = 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.';

divItem5.appendChild(img5);
divItem5.appendChild(h2_5);
divItem5.appendChild(p5);


document.body.appendChild(divItem);
document.body.appendChild(divItem2);
document.body.appendChild(divItem3);
document.body.appendChild(divItem4);
document.body.appendChild(divItem5);



//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let itemsList = document.querySelectorAll('.item');

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {

    // Verifica qual o valor que é retornado pelo Switch
    //console.log(switchValue.checked);

    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, está selecionado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */
        body.classList.add('body-dark');
        h1.classList.add('h1-dark');

        /*  1) Utilizando For..Of  for (let item of itemsList) {  item.classList.add('items-dark')  item.classList.add('items-text-dark')     } */    

        //2) Percorrendo com o ForEach (Recomendado)
        itemsList.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
        });

        /* 3) Alterando os elementos específicos ('h2' e 'p') ao invés de colocar a classe na div pai
         
        itemsList.forEach(item => {
             item.classList.add('items-dark');
 
             //1 maneira: Alterandos os elementos específicos pelo index/posição no DOM
             item.children[1].classList.add('items-text-dark') //[1] equivale ao 'h2'
             item.children[2].classList.add('items-text-dark') //[2] equivale ao 'p'
 
             // 2 maneira: Capturando pelo seletor (Recomendado) 
             item.querySelector('h2').classList.add('items-text-dark')
             item.querySelector('p').classList.add('items-text-dark')
         }); */


    } else { //Caso seja false, ou seja, não está selecionado


        /* Remove as classes adicionadas anteiormente, assim, a página volta para o "modo-claro" */
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        itemsList.forEach(item => {
            item.classList.remove('items-dark');
            //Uma forma de alterar o texto (poem o elemento principal)
            item.classList.remove('items-text-dark');
        });
    }
}

