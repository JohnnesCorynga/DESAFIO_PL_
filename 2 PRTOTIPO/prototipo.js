var dados_input = [
/*0*/   document.querySelector('#bateria1'),
/*1*/   document.querySelector('#bateria2'),
/*2*/   document.querySelector('#permicao1'), 
/*3*/   document.querySelector('#permicao2'),
/*4*/   document.querySelector('#combo1'), 
/*5*/   document.querySelector('#combo2'),
/*6*/   document.querySelector('#radio1'), 
/*7*/   document.querySelector('#radio2') 
    ] //criei uma array e enumerie
    var div_checklist = document.querySelector('#checklist')
    function verificar(){
        if(dados_input[0].checked==false&&dados_input[1].checked==false||dados_input[2].checked==false&&dados_input[3].checked==false||dados_input[4].checked==false&&dados_input[5].checked==false||dados_input[6].checked==false&&dados_input[7].checked==false){
            alert('ERROR. Verifique se marcou todos os campos!')
        }
        else if(dados_input[1].checked==true||dados_input[3].checked==true||dados_input[5].checked==true||dados_input[7].checked==true){
            div_checklist.innerHTML = 'Falha no Checklist'
        }//verificando se os input foram marcados com não
        else{
            div_checklist.innerHTML = 'Checklist realizado com sucesso'
        }
           
    }

    function verificar_requisitos(){
        var dadosInput2 = [
        /*0*/   document.querySelector('#nome1').value,
        /*1*/   new Date(document.querySelector('#data_nascimento').value),
        /*2*/   new Date(document.querySelector('#expe1').value)
        ]
        var requisitos = document.querySelector('#requisitos_tripulacao')
        var data_atual = new Date()
        var ano_atual = data_atual.getFullYear()//Pega somente o ano atual
        var ano_nascimento = dadosInput2[1].getFullYear()//pega somente o ano digitado no input
        var ano_ingresso = dadosInput2[2].getFullYear()
        var idade = ano_atual-ano_nascimento
        var experiencia = ano_atual-ano_ingresso
        
        if(dadosInput2[0]==0||dadosInput2[1]==0||dadosInput2[2]==0){
            alert('Verifique se os campos estão preenchidos corretamente!!')
        } 
        /*CÓDIGO PARA CANDIDATO APTO */  
        else if(idade>=25||experiencia>=5&&idade>17||idade>=21&&experiencia>=2){
            for(let i = 1; i <=1;i++){
                let item = document.createElement('tr')
                requisitos.appendChild(item)
                let item2 = document.createElement('td')
                let item3 = document.createElement('td')
                item.appendChild(item2)
                item.appendChild(item3)
                item2.innerHTML = `O condidato ${dadosInput2[0]}, nasceu em ${ano_nascimento} e tem ${idade} anos de idade, ingressou na empresa em ${ano_ingresso} e tem ${experiencia} anos de experiencias.`
                item3.innerHTML = `<strong>APTO.</strong>`
            }
        }
        /*CÓDIGO PARA CANDIDATO NÃO APTO */ 
        else{
           /* confirm('O Candidato informado está NÃO APTO!!Deseja informar outro condidato?')*/
            for(let i = 1; i <=1;i++){
            let item = document.createElement('tr')//cria um novo parametro "tr"
            requisitos.appendChild(item)//adiciona o no arametro no table
            let item2 = document.createElement('td')//cria um 2º item
            let item3 = document.createElement('td')//cria um 3º item
            item.appendChild(item2)//adiciona o 2º item dentro do 1º
            item.appendChild(item3)//adiciona o 3º item dentro do 1º
            item2.innerHTML = `O condidato ${dadosInput2[0]}, nasceu em ${ano_nascimento} e tem ${idade} anos de idade, ingressou na empresa em ${ano_ingresso} e tem ${experiencia} anos de experiencias.`
            item3.innerHTML = `<strong>NÃO APTO.</strong>`
            }
                          
        }           
    }
    
        var dados_input3= [
        /*0*/    document.querySelector('#nome_tri'),   
        /*1*/    document.querySelector('#idade_tri'),
        /*2*/    document.querySelector('#altura_tri'),
        /*3*/    document.querySelector('#peso_tri')      
        ]   
        var nome,idade,altura,peso
        var nomes = []
        var idades = []
        var pesos = []
        var alturas=[]
        var dados_salvos = []
    function adicionar(){
        nome = dados_input3[0].value
        idade = Number(dados_input3[1].value)
        altura = Number(dados_input3[2].value)
        peso = Number(dados_input3[3].value)
        var medidor = document.querySelector('#medidor_tri')
        var div_medidor = document.querySelector('#div_medidor')
        if(nome!=0||idade!=0||altura!=0||peso!=0){
            nomes.push(nome)
            idades.push(idade)
            alturas.push(altura)
            pesos.push(peso)
            for(let i =1;i<=1;i++){
                let item = document.createElement('option')
                medidor.appendChild(item)
                item.innerHTML = `${nome}, ${idade} anos, ${altura.toFixed(2)} mts de altura e ${peso.toFixed(2)} kg.`
                //alert('Tripulante salvo!')  
                }
                if(nomes.length==6){
                    if(document.querySelector('#botao_final').style.display == 'block'){
                        document.querySelector('#botao_final').style.display = 'none'
                    }else{
                        document.querySelector('#botao_final').style.display = 'block'
                    }
                    div_medidor.innerHTML = 'Tripulantes adicionados com sucesso!!!'
                }  
        }
        else{
            alert('ERROR] Verifique os campos e tente novamente!') 
        }
            nome.value=''
            nome.focus()
            
    }
        var res_final = document.querySelector('#res_final1')
        var menor_peso_nome,menor_peso_valor = pesos[0]
        var maior_altura,segunda_maior_altura 
    function finalizar(){
        //DEFININDO MENOR PESO
        if(pesos[0]<pesos[1]&&pesos[0]<pesos[2]&&pesos[0]<pesos[3]&&pesos[0]<pesos[4]&&pesos[0]<pesos[5]){
            menor_peso_valor = pesos[0]
            menor_peso_nome = nomes[0]
        }
        else if(pesos[1]<pesos[0]&&pesos[1]<pesos[2]&&pesos[1]<pesos[3]&&pesos[1]<pesos[4]&&pesos[1]<pesos[5]){
            menor_peso_valor = pesos[1]
            menor_peso_nome = nomes[1]
        }
        else if(pesos[2]<pesos[0]&&pesos[2]<pesos[1]&&pesos[2]<pesos[3]&&pesos[2]<pesos[4]&&pesos[2]<pesos[5]){
            menor_peso_valor = pesos[2]
            menor_peso_nome = nomes[2]
        }
        else if(pesos[3]<pesos[0]&&pesos[3]<pesos[1]&&pesos[3]<pesos[2]&&pesos[3]<pesos[4]&&pesos[3]<pesos[5]){
            menor_peso_valor = pesos[3]
            menor_peso_nome = nomes[3]
        }
        else if(pesos[4]<pesos[0]&&pesos[4]<pesos[1]&&pesos[4]<pesos[2]&&pesos[4]<pesos[3]&&pesos[4]<pesos[5]){
            menor_peso_valor = pesos[4]
            menor_peso_nome = nomes[4]
        }
        else{
            menor_peso_valor = pesos[5]
            menor_peso_nome = nomes[5]
        };
        //DEFININDO MAIOR ALTURA
         
      
         
        if(alturas.length==6){
            
        alturas.sort(function(a,b){
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        })
        }
        
        
        media_idades = (idades[0]+idades[1]+idades[2]+idades[3]+idades[4]+idades[5])/6
        soma_pesos= (pesos[0]+pesos[1]+pesos[2]+pesos[3]+pesos[4]+pesos[5])
        res_final.innerHTML += `<br>O peso total dos tripulantes é ${soma_pesos}`
        res_final.innerHTML += `<br>Os dois mais altos tem respectivamente ${alturas[5]} e ${alturas[4]} de altura, e ocuparam os primeiro ascentos.`
        res_final.innerHTML += `<br>A idade média da tripulação é: ${media_idades}.`
        res_final.innerHTML += `<br>O ocupante com menor peso é ${menor_peso_nome} com ${menor_peso_valor} kg e vai ocupar o último assento. `
    }
    

    