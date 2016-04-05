O capitulo ensinou sobre:

$http -> Recurso utilizado para acessar APIs externas com ajax
e obter recursos


contatosAPI.js -> exemplo de service criado com factory
operadorasAPI.js -> exemplo de service criado com service


Tanto serviços factory como service recebe um function no parametro

Já os .values (que serve como utilitários ou configurações default) deve-se
passar um objeto!

Os .constant funcionam da mesma forma, porém os .constant podem ser injetados
em serviços do tipo provider e os .values não


serialGeneratorProvider -> exemplo da criacao de um service com provider
Os providers recebem uma function e o que será retornado é tudo q está
como $get, podendo ser uma function ou um objeto

Os .config -> Os config servem para configurar um serviço do tipo provider
