O capitulo ensinou sobre:

ex: {{contato.nome | uppercase}}

os filtros funcionam com a mesma lógica dos sistemas baseados em unix
o pipe '|' será aplicado para filtrar 'algo'.

Filtros:
uppercase: deixa letra em maisculo
lowercase: deixa letra em minusculo
date: aplica formatações em datas (com patterns ex: date:'dd/MM/yyyy')


filter: aplica filtros de buscas. Ex: no index.html
orderBy: ordena um array com base em critérios. Ex: index.html
currency: formata numeros para moeda padrão conforme i18n. (necessário importá-lo)
number: similar ao currency porém para formatação de números seja ele int ou double
limitTo: Limita um array ou uma String



Os filtros também pode ser aplicado no controller
ex: no controller do index.html
