### Exercicio 1
Não senti dificuldades, mas não tenho como afirmar se as configurações estão corretas...

### Exercico 2
1. Acho que devo usar o git clone, instalar as dependecias e dar build no projeto
2. vou usar esse https://github.com/future4code/4eddit-sagan-5
3. ssh -i "aula-ec2.pem" ubuntu@ec2-35-175-104-65.compute-1.amazonaws.com
4. usei o git clone para pegar o projeto, depois usei o npm i para instalar as dependencias e o npm run build para para criar uma build do projeto e por fim o npm start para rodar o projeto
5. porta configurada 3000 e 3306
6. eu dei dei start na pasta errada, quando fui na pasta correta(build) tive o problema de ja estar em uso a porta 80, tive que usar o comando pd -a para mostrar os processos e usar o kill -9 para dar fim no python e depois disso funcionou corretamente.
7. quase a mesma coisa tirando o fato de eu usar o clone e o problema de rodar o comando para iniciar o server na pasta errada.