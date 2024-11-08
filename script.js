
        
        

        let limpeza;
        let conexao;
        let filtro;
        let funcionamento;
        let intro =  "      A manutenção preventiva é crucial para garantir o bom funcionamento e a longevidade \ndos equipamentos. Ao realizar inspeções e ajustes regulares, é possível identificar \ne corrigir problemas antes que se tornem falhas graves,evitando custos com reparos \nemergenciais. Além disso, ela melhora a segurança, a eficiência operacional e reduz o \ntempo de inatividade. Em suma,a manutenção preventiva é um investimento estratégico que \nassegura a continuidade das operações, prolonga a vida útil dos sistemas e equipamentos \ne contribui para a economia a longo prazo.";
        
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

            let rel =  carregador +"\n\n\n"+intro +" \n\n1 Limpeza Externa: "+limpeza+"\n\n2 Reaperto Das Conexão: "+conexao+"\n\n3 Troca de Filtros: "+filtro+"\n\n4 Teste de funcionamento: "+funcionamento+ " \n\n Observação do Tecnico \n\n"+observacao;
            let blob = new Blob ([rel], {type:`text/plain`});
            let link = document.createElement(`a`);
            link.href = URL.createObjectURL(blob);
            link.download = `arquivo.txt`;
            
            link.click();

        }
        function pdf(){

            
            let { jsPDF } = window.jspdf;
            let doc = new jsPDF;
            

            doc.setFontSize(11);            

            let observacao  = document.getElementById("observ").value
            let local = document.getElementById("carregador").value;
            let carregador = "  manutenção preventiva no Carregador: "+ local;

            let rel =  carregador +"\n\n\n"+intro +" \n\n1 Limpeza Externa: "+limpeza+"\n\n2 Reaperto Das Conexão: "+conexao+"\n\n3 Troca de Filtros: "+filtro+"\n\n4 Teste de funcionamento: "+funcionamento+ " \n\n Observação do Tecnico \n\n"+observacao;


            doc.text( rel,20 ,10);
            doc.save("olamundo.pdf");

           
        }

        