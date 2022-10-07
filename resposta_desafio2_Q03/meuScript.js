var res = document.querySelector('#resultado');
var res2 = document.querySelector('#resultado2');
var nome1 = document.querySelector('#nome1');
var idade1 = document.querySelector('#idade1');                    
var altura1 = document.querySelector('#altura1');
var peso1 = document.querySelector('#peso1');
var resto_final = document.querySelector('#resto_final');
var dados_form = [];
var pesoTotal,idadeMedia;
    function enviar(){
        if(nome1.value==0||idade1.value==0||altura1.value==0||peso1.value==0){
            alert('Preencha todos os campos do formulário')
        }else{
                dados_form = [
                    ...dados_form,
                    {
                        nome : nome1.value,
                        idade : Number(idade1.value),
                        altura : Number(altura1.value),
                        peso : Number(peso1.value)
                    }
                ];
                    nome1.value = ""; idade1.value = ""; altura1.value = ""; peso1.value = "";
                    nome1.focus();
                    console.log(`Esses são meus dados ${dados_form.length}`)
                        let item = document.createElement('tr');
                        res2.appendChild(item);
                        let itemNome = document.createElement('td');
                        item.appendChild(itemNome);
                        let itemIdade = document.createElement('td');
                        item.appendChild(itemIdade);
                        let itemAltura = document.createElement('td');
                        item.appendChild(itemAltura);
                        let itemPeso = document.createElement('td');
                        item.appendChild(itemPeso);
                    for(let i = 0 ; i<6;i++){ 
                        itemNome.innerHTML = dados_form[i].nome;
                        itemIdade.innerHTML = dados_form[i].idade;
                        itemAltura.innerHTML = dados_form[i].altura;
                        itemPeso.innerHTML = dados_form[i].peso;  
                    }
        }
    };
    var dados_formOrdenadosPeso;
    var dados_formOrdenadosAltura;  
    function finalizar(){
        //Pegando o pesso totaal dos tripulantes
            pesoTotal = (dados_form[0].peso+dados_form[1].peso+dados_form[2].peso+dados_form[3].peso+dados_form[4].peso+dados_form[5].peso);
        //Definindo idade média da tripulação
            idadeMedia = (dados_form[0].idade+dados_form[1].idade+dados_form[2].idade+dados_form[3].idade+dados_form[4].idade+dados_form[5].idade)/6
        //Definindo tripulante mais altos
           dados_formOrdenadosAltura = dados_form.sort(function(a,b){
                if(a.altura>b.altura){
                    return -1
                }else{
                    return true
                }
            });
            resto_final.innerHTML =`<br>Peso total dos Tripulantes: ${pesoTotal}`;
            resto_final.innerHTML+=`<br>Os dois mais altos são respectivamente: ${dados_formOrdenadosAltura[0].nome} com ${dados_formOrdenadosAltura[0].altura} mts & ${dados_formOrdenadosAltura[1].nome} com ${dados_formOrdenadosAltura[1].altura}mts.`
        //Definindo quem é o mais leve
            dados_formOrdenadosPeso = dados_form.sort(function(c,d){
                if(c.peso>d.peso){
                    return true
                }else{
                    return -1
                }
            });
        resto_final.innerHTML+=`<br>Idade média da tripulação : ${idadeMedia.toFixed(2)}`;
        resto_final.innerHTML+= `<br>O tripulante mais leve é : ${dados_formOrdenadosPeso[0].nome} com ${dados_formOrdenadosPeso[0].peso} kg,  e vai ocupar o último assento.`;
    }