//Modification du body
let body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection ='column';
body.style.alignItems = 'center';

//Modification du h1
let h1 = document.querySelector('h1');
h1.style.margin = '0px'

//Insertion du tableau
let table = document.createElement('table');
table.style.borderCollapse = 'collapse';
body.appendChild(table);

//Insertion ligne
for(let i=0; i<9; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    //Insertion colone
    for(let j=0; j<9; j++){
        let td = document.createElement('td');
        td.style.height = '20px';
        td.style.width = '20px';
        td.style.border = '2px solid black'
        tr.appendChild(td);

        //insertion case noir 
        if ((i+j)% 2==0){
            td.style.backgroundColor = 'black'
        }

        //Insertion lettre et chiffre
        let lettre = "ABCDEFGH";
        let chiffre = "12345678";

        if (j === 0) {
            td.textContent = chiffre[i - 1]
            td.style.backgroundColor = 'white';
            td.style.border = 'white';
        }

        if (i === 0) {
            td.textContent = lettre [j - 1]
            td.style.backgroundColor = 'white';
            td.style.border = 'white';
            td.style.textAlign = 'center'
        }
    }
}


