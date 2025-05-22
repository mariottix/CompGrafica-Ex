# CompGrafica

Cena 3D (Sem OrbitControls) 
Projeto que exibe uma cena 3D utilizando a biblioteca Three.js, sem a utilização do controle de câmera OrbitControls. Foi utilizado a função animate para rotar 360 graus.

Descrição: 
Este projeto cria uma cena 3D básica composta por um plano, um cubo, uma esfera e um cone.
- Todos os objetos possuem cores distintas e são animados com uma rotação contínua em torno do eixo Y. 
- A câmera está posicionada para visualizar toda a cena, mas não possui controles de interação, como o OrbitControls.  
- O renderizador adapta-se dinamicamente ao tamanho da janela do navegador, garantindo responsividade.

Arquivos index.html: Arquivo HTML que carrega a biblioteca Three.js via CDN e o script principal.  
main.js: Script que cria a cena, adiciona os objetos 3D, configura a câmera, anima os objetos e gerencia a responsividade.  
