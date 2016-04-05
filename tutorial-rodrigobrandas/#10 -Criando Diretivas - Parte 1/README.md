O capitulo ensinou sobre:

Criação de diretivas.

Para a criação de uma diretiva devemos localizar o modulo, passar o nome da
diretiva e uma function, onde a mesmo retorna um directive definition object,
ou senha um objeto de configurações de diretivas.


templarUrl -> localiza o template
replace -> elimina o elemente da diretiva deixando apenas o template

tipos de restrição o restrict, e podem ser combinadas "AE":
A - Restrito ao atributo do elemento -> ex: <div ui-alert>
E - Restrito ao elemento ex: <ui-alert>
C - Restrito a classe do elemento ex:
M - Restrito ao comentário


Scope -> para saber em qual scope está necessário colocar {{$id}}

Por padrão, uma diretiva compartilha o mesmo scope de onde é utilizada
Para aumentar o potencial de reuso, podemos isolar seu scope, passando os
dados necessários por parâmetro.


##scope: {
##  title: "@title",
##  message: "=message" //O = faz com que os scopes sejam bidirecional
##}

O @ liga ao atributo da diretiva

O = faz com que os scopes sejam bidirecional, ou seja, o scope da diretiva e o
scope principal sejam interligados

Transclude -> Encapsula elementos dentro de uma diretiva, ou seja, é uma forma
de colocar informações dentro de uma diretiva, onde o desenvolvedor define um local

ex: .js -> colocar transclude: true
ex: templateUrl -> colocar o ng-transclude..
<div ng-transclude> aqui a mensagem do transclude></div>
