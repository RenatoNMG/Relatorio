
        
        

        let limpeza;
        let conexao;
        let filtro;
        let funcionamento;
        let intro =  "A manutenção preventiva é crucial para garantir o bom funcionamento \ne a longevidade dos equipamentos. Ao realizar inspeções e ajustes regulares, \né possível identificar e corrigir problemas antes que se tornem falhas graves,\n evitando custos com reparos emergenciais. Além disso, ela melhora \na segurança, a eficiência operacional e reduz o tempo de inatividade. Em suma,\n a manutenção preventiva é um investimento estratégico que assegura\n a continuidade das operações, prolonga a vida útil dos sistemas e equipamentos\n e contribui para a economia a longo prazo."
        
        function limpes(){
            limpeza = "Feito"
            document.getElementById("limpe").style.color = "green";

        }
        function limpen(){
            limpeza = "Não Feito"
            document.getElementById("limpe").style.color = "red";

        }

        function conexaos(){
            conexao = "Feito"
            document.getElementById("cone").style.color = "green";

        }
        function conexaon(){
            conexao = "Não Feito"
            document.getElementById("cone").style.color = "red";

        }
        function filtros(){
            filtro = "Feito"
            document.getElementById("filtr").style.color = "green";
        }
        function filtron(){
            filtro = "Não Feito"
            document.getElementById("filtr").style.color = "red";
        }
        function funcs(){
            funcionamento = "Feito"
            document.getElementById("funciona").style.color = "green";
        }
        function funcn(){
            funcionamento = "Não Feito"
            document.getElementById("funciona").style.color = "red";

        }

        function relatorio(){
            

            let observacao  = document.getElementById("observ").value
            let local = document.getElementById("carregador").value;
            let carregador = "manutenção preventiva no Carregador: "+ local;

            let rel =  carregador +"\n\n\n"+intro +" \n\n1 Limpeza Externa: "+limpeza+"\n2 Reaperto Das Conexão: "+conexao+"\n3 Troca de Filtros: "+filtro+"\n4 Teste de funcionamento: "+funcionamento+ " \n\n Observação do Tecnico \n\n"+observacao;
            let blob = new Blob ([rel], {type:`text/plain`});
            let link = document.createElement(`a`);
            link.href = URL.createObjectURL(blob);
            link.download = `arquivo.txt`;
            
            link.click();

        }