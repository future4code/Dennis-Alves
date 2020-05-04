### Exercício 1
a) ``id`` está declarado como um varchar(que é um conjunto de caracteres) de tamanho 255 e é a primary key.
``name`` está declarado como varchar do tamanho 255 e não pode ser nulo.
``birth_date`` está declarado como date sem tamanho definido e não pode ser nulo.
``gender`` está declarado como varchar do tamanho 6 e não pode ser nulo.
b) ``` SHOW DATABASES ``` mostra o conteudo do banco de dados e sua informações
```SHOW TABLES``` mostra as tabelas e sua informaçoes de um determinado banco de dados

### Exercício 2
a)
```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) erro ```Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'```
```entrada duplicada '002' para chave 'PRIMARY'``` significa que a entrada do campo primary key ja existe na tabela
c) erro ```Error Code: 1136. Column count doesn't match value count at row 1```
```A contagem de colunas não corresponde à contagem de valores na linha 1``` significa a passagem de parametros está incorreta por não ser igual a da tabela
d) erro ```Error Code: 1364. Field 'name' doesn't have a default value```
```Código de erro: 1364. O campo 'name' não tem um valor padrão``` está faltando parametros para ser passado para a tabela que no caso é ```name```
e) erro ```Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1```
```Código do erro: 1292. Valor incorreto da data: '1950' para a coluna 'birth_date' na linha 1``` o valor passado no parametro ```birth_date``` não está no formato correto
f) 
```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
### Exercício 3
a) ```SELECT id, name from Actor WHERE gender = "female";```
b) ```SELECT salary from Actor WHERE name = "Tony Ramos";```
c) ```SELECT * FROM Actor WHERE gender = "invalid";``` não retornou nada porque não tem nada com ```gender = "invalid```
d) ```SELECT id, name,salary from Actor WHERE salary <= "500000";```
e) ```SELECT id, nome from Actor WHERE id = "002";``` erro ```Error Code: 1054. Unknown column 'nome' in 'field list'```. ```Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'``` a declaração do parametro não conrresponde com a tabela. Correção: ```SELECT id, name from Actor WHERE id = "002";```

### Exercício 4
a) essa query mostra todo o conteudo de todas as linhas da tabela ```Actor``` onde a coluna ```name``` contenha algo que começe com a letra ```A``` ou ```J``` e a coluna onde a coluna ```salary``` seja maior que ```300000```
b)
```SQL
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000
```
c)
```SQL
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%") AND salary > 350000
```
d)
```SQL
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 and 900000
```

### Exercício 5
a)
```SQL
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lançamento DATE NOT NULL,
	avaliação  INTEGER NOT NULL
);
```
essa query cria uma tabela com o nome Filmes com as seguintes colunas:
`id` declarada do tipo `VARCHAR` tamanho `255` e é a chave primaria 
`nome` declarada do tipo `VARCHAR` tamanho `255` e não pode ser nulo
`sinopse` declarada do tipo `TEXT` e não pode ser nulo
`data_de_lançamento` declarada do tipo `DATE` e não pode ser nulo
`avaliação` declarada do tipo `INTEGER` e não pode ser nulo

b)
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

c)
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```
d)
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```
d)
```SQL
INSERT INTO Filmes (id, nome, sinopse, data_de_lançamento, avaliação)
VALUES(
  "004", 
  "O Auto da Compadecida",
  "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.",
  "2000-09-10", 
  9
);
```

### Exercício 6
a)
```SQL
SELECT id, nome, avaliação FROM Filmes WHERE id = "004";
```
b)
```SQL
SELECT * FROM Filmes WHERE nome = "Doce de mãe";
```
c)
```SQL
SELECT id, nome, sinopse FROM Filmes WHERE avaliação >= 7;
```

### Exercício 7
a)
```SQL
SELECT * FROM Filmes WHERE nome LIKE "%vida%";
```
b)
```SQL
SELECT * FROM Filmes WHERE nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";
```
c)
```SQL
SELECT * FROM Filmes WHERE data_de_lançamento < "2020-05-04";
```
d)
```SQL
SELECT * FROM Filmes WHERE data_de_lançamento < "2020-05-04" AND (nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%") AND avaliação > 7 ;
```
