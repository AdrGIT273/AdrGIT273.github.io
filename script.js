


let i =0 ;
let a = 412
do 
{

    console.log("otrzymałem a równe", a)
}
while (  a>1444)


do 
{

    console.log("otrzymałem i równe", i )
}
while (  i < 2)







let List = ["Jak wita się mleko",
    "Jak nazywa się lina wyprodukowana w usa",
    "jaka dziewczyna najczęściej kopie swoje ciuchy",
    "Jaki jest najlepszy nauczyciel","Przeniosłem swoją pracę doktosrką do:","Gdzie tańczą konie"
];
let odpowiedzi = ["Mlekovita","trampolina","kopciuszek","nieobecny","tmp","na balkonie"];

let num; // globe
function losuj() {
    if(List.length === 0) {
        document.getElementById("quest").innerText = "Brak więcej pytań! TWÓJ WYNIK TO " + i;
        return;
    }

    num = Math.floor(Math.random() * List.length);
    document.getElementById("quest").innerText = List[num];
}

function check() {
    const odp = document.getElementById("answer").value;

    if (odp.toLowerCase() === odpowiedzi[num].toLowerCase()) {
        i++;
        document.getElementById("quest").innerText = "Poprawna odpowiedź!";
    } else {
        document.getElementById("quest").innerText = "Zła odpowiedź!";
        
    }

    // Wyczyść pole input
    document.getElementById("answer").value = "";

    // Usuń pytanie i odpowiedź z listy
    List.splice(num, 1);
    odpowiedzi.splice(num, 1);

}


