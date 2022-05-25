import { Router } from "express";
import { corPrimaria, ingressos, maiorNumero, dobro, somar} from './services.js';
const server = Router();

server.get('/dia2/corprimaria/:cor' , (req, resp)  => {
    try{
        const { cor } = req.params;
        const primaria = corPrimaria(cor);
        resp.send({
            primaria: primaria
        });
    }   catch (err) {
        resp.send({
            erro: err.message
        })
    }
})



server.post('/dia2/ingressocinema', (req, resp)  => {
    try{
        const { qtdInteiras, qtdMeias, diaSemana, nacionalidade } = req.body;
        const total = ingressos(qtdInteiras, qtdMeias, diaSemana, nacionalidade);
        resp.send({
            total: total
        })
    }  catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere' , (req, resp)  => {
    try {
        const { texto, caractere } = req.params;
        const freq = frequenciaCaracter(texto, caractere);
        resp.send({
            freq: freq
        })
    }    catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/dia2/maiorNumero' , (req, resp) => {
    try {
        const numero = req.body;
        const maior = maiorNumero(numero);
        resp.send({
            maior: maior
        })
    }  catch (err) {
        resp.send({
            erro: err.message
        })
    }
})


server.get('/ping', (req, resp) => {
    resp.send('pong');
  })


server.get('/dobro/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
 
    const d = dobro(numero);
    
   
 
    resp.send({
        dobro: d
    });
 })
 
 server.get('/somar' , (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
 
    const x = somar( a, b);
 
    resp.send({
        soma: x
    })
 })
 
 server.post('/somar', (req, resp) => {
   try{
     const { valores: {a, b } } = req.body;
 
     const x = somar (a, b);
 
     
 
     resp.send({
         soma: x
     })
      } catch(err) {
          resp.status(404).send({
              erro: err.message
          })
      }
 })

 server.get('/tabuada' , (req, resp) => {
     try{
        let a = Number(req.query.a);
        
        
        const x = tabuada(numero);
     

        resp.send({
            tabuada: x
        })
     } catch(err) {
         resp.status(404).send({
             erro: err.message
         })
     }
 })

 export default server;

