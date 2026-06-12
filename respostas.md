# Respostas dos Exercícios de Git, GitHub e GitFlow
**Estudante:** Guilherme
**Disciplina:** Engenharia da Qualidade e Confiabilidade
**Assunto:** Git, GitHub e GitFlow
**Professor:** Me. Sergio Souza Novak
**Data:** 11 de junho de 2026

---

## Parte 1: Fundamentos do Git

### Questão 1: Inicializando o Repositório

#### a) Execução dos comandos e saída do terminal:
Ao executar a inicialização do repositório em uma pasta vazia:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06> mkdir lanchonete-web
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06> cd lanchonete-web
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git init
Initialized empty Git repository in C:/Users/Lenovo/Documents/7 PERIODO/ENGENHARIA DE QUALIDADE E CONFIABILIDADE/ATIVIDADE-11.06/lanchonete-web/.git/
```

#### b) Criação dos arquivos iniciais:
Foram criados com sucesso os arquivos `index.html`, `style.css`, `cardapio.js` e `README.md`.

#### c) Saída do `git status` e explicação do status "Untracked files":
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md
	cardapio.js
	index.html
	style.css

nothing added to commit but untracked files present (use "git add" to track)
```

**Significado de "Untracked files":**
O status "Untracked files" (arquivos não rastreados) significa que esses arquivos existem no diretório de trabalho local, mas ainda não foram adicionados à área de preparação (*Staging Area*) do Git. Portanto, o Git não está monitorando as alterações desses arquivos e eles não serão incluídos no próximo commit, a menos que sejam explicitamente adicionados com o comando `git add`.

---

### Questão 2: Primeiro Commit: Preparando e Salvando

#### a) Adicionando o `README.md` individualmente e saída do `git status`:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git add README.md
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	cardapio.js
	index.html
	respostas.md
	style.css
```

**O que mudou:**
O arquivo `README.md` foi movido para a *Staging Area* (área de preparação), mudando seu status para "Changes to be committed" (alterações prontas para serem commitadas). Os outros arquivos permaneceram no estado "Untracked".

#### b) Adicionando os outros arquivos de uma vez:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git add .
```
Todos os arquivos (`index.html`, `style.css`, `cardapio.js`, `respostas.md`) foram movidos para a *Staging Area*.

#### c) Commit inicial:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git commit -m "feat: estrutura inicial do projeto"
[main (root-commit) 1d2dd60] feat: estrutura inicial do projeto
 5 files changed, 53 insertions(+)
 create mode 100644 README.md
 create mode 100644 cardapio.js
 create mode 100644 index.html
 create mode 100644 respostas.md
 create mode 100644 style.css
```
**Hash curto gerado:** `1d2dd60`

#### d) Execução do `git log --oneline` e descrição:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git log --oneline
1d2dd60 feat: estrutura inicial do projeto
```

**Descrição da saída:**
A saída do `git log --oneline` apresenta o histórico de commits do repositório de forma resumida, mostrando apenas uma linha para cada commit. Cada linha exibe o hash curto (os primeiros 7 caracteres do identificador SHA-1 do commit, ex: `1d2dd60`) e a mensagem de commit associada a ele.

---

### Questão 3: Modificando e Rastreando Arquivos

#### a) Execução do `git status` e diferença entre arquivo *Untracked* e *Modified*:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git status
On branch main
Your branch is based on 'origin/main', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   index.html
	modified:   respostas.md

no changes added to commit (use "git add" and/or "git commit -a")
```

**Diferença entre *Untracked* e *Modified*:**
- **Untracked (Não rastreado):** É um arquivo novo que nunca foi adicionado ao histórico do Git (ou seja, nunca passou pela área de preparação e nem foi commitado). O Git não sabe de sua existência no histórico e não monitora suas mudanças automáticas.
- **Modified (Modificado):** É um arquivo que já faz parte do histórico do Git (já foi rastreado e commitado em versões anteriores), mas sofreu alterações no diretório de trabalho local que ainda não foram salvas na área de preparação (*Staging Area*). O Git percebe que o conteúdo dele mudou em relação à versão do último commit.

#### b) Execução do `git diff` e explicação:
**Saída do comando (filtrada para o arquivo `index.html`):**
```diff
diff --git a/index.html b/index.html
index 903cc04..aa48b88 100644
--- a/index.html
+++ b/index.html
@@ -1 +1,65 @@
-<!-- index.html -->
+<!DOCTYPE html>
+<html lang="pt-BR">
+<head>
+    <meta charset="UTF-8">
+    <meta name="viewport" content="width=device-width, initial-scale=1.0">
+    <title>Lanchonete do Bairro</title>
+    <link rel="stylesheet" href="style.css">
+    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
+</head>
+...
```

**O que o comando mostra:**
O comando `git diff` mostra a diferença linha a linha entre os arquivos no diretório de trabalho local e a sua versão no último commit (ou na Staging Area). Linhas removidas são precedidas por um sinal de menos `-` e destacadas em vermelho, enquanto as linhas adicionadas são precedidas por um sinal de mais `+` e destacadas em verde.

#### c) Adicionando e commitando as alterações do `index.html`:
Comandos a serem executados:
```powershell
git add index.html
git commit -m "feat: adiciona estrutura basica do HTML"
```

---

### Questão 4: Histórico de Versões com git log

#### a) Execução do `git log` e identificação dos campos de cada commit:
**Saída do comando (histórico recente):**
```powershell
commit 24c79fcd0353bf5fa9633484a92446c239381b10
Author: guilhermeDev1050 <guilhermejunco@hotmail.com>
Date:   Thu Jun 11 21:14:53 2026 -0300

    feat: adiciona comportamento base ao cardapio

commit 3b51404de142785b4707ddc9d19fec6dbb61b1f9
Author: guilhermeDev1050 <guilhermejunco@hotmail.com>
Date:   Thu Jun 11 21:14:34 2026 -0300

    style: adiciona estilos basicos do site
```

**Campos identificados no último commit (`24c79fc`):**
- **Hash completo:** `24c79fcd0353bf5fa9633484a92446c239381b10` (o identificador SHA-1 único do commit).
- **Autor (Author):** `guilhermeDev1050 <guilhermejunco@hotmail.com>` (quem realizou a alteração).
- **Data (Date):** `Thu Jun 11 21:14:53 2026 -0300` (quando o commit foi gerado).
- **Mensagem:** `feat: adiciona comportamento base ao cardapio` (explicação breve do que foi feito).

#### b) Execução do `git log --oneline --graph` e significado do caractere `*`:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git log --oneline --graph
* 24c79fc feat: adiciona comportamento base ao cardapio
* 3b51404 style: adiciona estilos basicos do site
* f2e0da2 chore: atualiza respostas das questoes 1 a 3
* eaa1739 feat: adiciona estrutura basica do HTML
* 1d2dd60 feat: estrutura inicial do projeto
```

**Significado do caractere `*`:**
O caractere `*` (asterisco) na saída gráfica representa um **nó de commit** na linha do tempo (ramificação/branch) do histórico. Ele indica a posição daquele commit específico no fluxo linear ou ramificado do repositório.

#### c) Importância de mensagens de commit claras e descritivas:
Em um projeto profissional, mensagens de commit claras e descritivas são cruciais pelas seguintes razões:
1. **Rastreabilidade e Depuração:** Permite que desenvolvedores identifiquem rapidamente quando e por que uma alteração ou bug foi introduzido no sistema, facilitando a correção (`git revert` ou `git bisect`).
2. **Colaboração Eficiente:** Membros da equipe podem acompanhar a evolução do projeto sem a necessidade de ler o código de cada commit para entender o que foi feito.
3. **Geração Automatizada de Changelogs:** Facilita a criação automática de notas de lançamento (Release Notes) a partir do histórico de commits (especialmente usando padrões como o *Conventional Commits*).
4. **Documentação Histórica:** Funciona como uma documentação viva do projeto, explicando não apenas o "o que" mudou, mas o "porquê" mudou.

---

### Questão 5: Trabalhando com Branches: Nova Funcionalidade

#### a) Criação e mudança para a branch:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git checkout -b feature/pagina-promocoes
Switched to a new branch 'feature/pagina-promocoes'
```

#### b) Criação de `promocoes.html` e commit na branch:
Comandos executados:
```powershell
git add promocoes.html
git commit -m "feat: adiciona pagina de promocoes"
[feature/pagina-promocoes 5372708] feat: adiciona pagina de promocoes
 1 file changed, 232 insertions(+)
 create mode 100644 promocoes.html
```

#### c) Execução do `git branch` e explicação sobre o asterisco `*`:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git branch
* feature/pagina-promocoes
  main
```

**Explicação sobre o asterisco `*`:**
O asterisco `*` ao lado do nome de uma branch indica qual é a **branch atualmente ativa (checkout ativo)** no diretório de trabalho. Quaisquer modificações e commits realizados a partir desse momento serão registrados nessa branch ativa.

#### d) Retorno para a branch `main` e verificação da visibilidade do arquivo:
**Comando executado:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git checkout main
Switched to branch 'main'
```

**O que aconteceu com o arquivo `promocoes.html` e por quê:**
O arquivo `promocoes.html` **desapareceu** do diretório de trabalho local ao mudar de volta para a branch `main`. 

Isso ocorre porque o arquivo foi criado e commitado na branch isolada `feature/pagina-promocoes`. A branch `main` ainda se encontra no estado do seu último commit próprio (onde o arquivo `promocoes.html` não existia). O Git atualiza dinamicamente os arquivos na pasta física para refletir exatamente o estado do commit da branch em que estamos posicionados no momento.

---

### Questão 6: Integrando Branches com git merge

#### a) Execução do merge na branch `main`:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git merge feature/pagina-promocoes -m "Merge branch 'feature/pagina-promocoes'"
Merge made by the 'ort' strategy.
 promocoes.html | 232 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 232 insertions(+)
 create mode 100644 promocoes.html
```

#### b) Identificação da estratégia de merge:
A saída indica que o Git utilizou a estratégia **ort** (`Merge made by the 'ort' strategy.`).
*Nota:* Em repositórios onde a branch `main` não possui commits adicionais após a ramificação, o Git utilizaria a estratégia de **Fast-forward** (apenas movendo o ponteiro da `main` para a frente). No entanto, como realizamos commits de respostas na branch `main`, ocorreu uma divergência histórica e o Git realizou um merge de três vias clássico utilizando o algoritmo moderno **ORT** (padrão do Git para resoluções eficientes de mesclagem).

#### c) Execução do `git log --oneline --graph` e descrição visual do histórico após o merge:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git log --oneline --graph -n 10
*   0774765 Merge branch 'feature/pagina-promocoes'
|\  
| * 5372708 feat: adiciona pagina de promocoes
* | 85b3e31 chore: atualiza respostas da questao 5
|/  
* ff3ce4f chore: atualiza respostas da questao 4
...
```

**Descrição visual do histórico:**
O histórico agora mostra uma ramificação que se abre a partir do commit `24c79fc`. Do lado esquerdo, temos a linha de commits da branch `main` (incluindo o commit de respostas `85b3e31`). Do lado direito, temos a ramificação da feature com o commit `5372708`. No topo, as duas linhas se unem no commit de merge `0774765`, unificando a história.

#### d) Deleção da branch de feature e explicação da boa prática:
**Comando executado:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git branch -d feature/pagina-promocoes
Deleted branch feature/pagina-promocoes (was 5372708).
```

**Por que deletar branches concluídas é uma boa prática:**
1. **Organização do Repositório:** Evita o acúmulo desnecessário de branches antigas na lista local e remota, mantendo o repositório limpo e legível.
2. **Evita Confusões:** Reduz a chance de outro desenvolvedor trabalhar acidentalmente em uma branch obsoleta ou tentar mesclar código desatualizado.
3. **Foco no Desenvolvimento Ativo:** Facilita a visualização rápida de quais funcionalidades ainda estão ativamente em desenvolvimento e quais já foram finalizadas e consolidadas na branch principal.

---

### Questão 7: Desfazendo Erros com git revert

#### a) Commit com alteração incorreta no `style.css`:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git add style.css
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git commit -m "style: adiciona cor de fundo incorreta"
[main 3efad02] style: adiciona cor de fundo incorreta
 1 file changed, 3 insertions(+)
```

#### b) Identificação do hash do commit ruim com `git log --oneline`:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git log --oneline -n 3
3efad02 style: adiciona cor de fundo incorreta
ec223b2 chore: atualiza respostas da questao 6
0774765 Merge branch 'feature/pagina-promocoes'
```
**Hash identificado:** `3efad02`

#### c) Reversão do commit e explicações conceituais:
**Comando executado:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git revert 3efad02 --no-edit
[main c49d27f] Revert "style: adiciona cor de fundo incorreta"
 Date: Thu Jun 11 21:23:25 2026 -0300
 1 file changed, 3 deletions(-)
```

**Diferença entre `git revert` e `git reset`:**
- **`git revert`:** Cria um **novo commit** no histórico contendo exatamente a alteração inversa da do commit especificado (ou seja, ele "desfaz fazendo de novo"). Ele não apaga o commit ruim do histórico, preservando a linha do tempo intacta.
- **`git reset`:** Move o ponteiro da branch atual de volta para um commit anterior, **reescrevendo/apagando** o histórico a partir dali. Dependendo dos parâmetros (`--soft`, `--mixed`, `--hard`), ele também descarta ou altera as modificações no diretório de trabalho local.

**Por que o `revert` é mais seguro em projetos colaborativos?**
O `git revert` é muito mais seguro porque ele **não altera o histórico existente** (ele é puramente aditivo). Se usarmos `git reset` em commits que já foram enviados para o repositório remoto e compartilhados com outros desenvolvedores, criaremos divergências graves de histórico que exigirão um push forçado (`git push --force`), podendo sobrescrever o trabalho de outros membros da equipe e causar perda de dados. O `revert` permite que todos recebam a alteração de desfazimento normalmente através de um simples `git pull`.

---

### Questão 8: Repositório Remoto com GitHub

#### a) Criação do repositório no GitHub:
O repositório público foi criado no GitHub sob a URL: `https://github.com/guilhermeDev1050/atividade-git-github.git`.

#### b) Conexão do repositório local ao remoto e push:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git push -u origin main
branch 'main' set up to track 'origin/main'.
To https://github.com/guilhermeDev1050/atividade-git-github.git
 * [new branch]      main -> main
```
*Nota:* Como o repositório foi inicialmente clonado diretamente da URL fornecida, o vínculo do controle remoto `origin` já estava estabelecido por padrão.

#### c) Significado da flag `-u` no `git push`:
A flag `-u` (abreviação de `--set-upstream`) serve para associar (vincular) a branch local atual à sua correspondente no repositório remoto. 

Ao fazer isso uma única vez, o Git configura um rastreamento permanente entre a branch local (`main`) e a branch remota (`origin/main`). Nas próximas vezes em que for necessário enviar ou puxar atualizações dessa branch, basta executar simplesmente `git push` ou `git pull` sem a necessidade de especificar o nome do servidor remoto e da branch correspondente.

#### d) Alteração remota simulada e execução do `git pull`:
**Saída do comando `git pull`:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git pull
From https://github.com/guilhermeDev1050/atividade-git-github
   295455d..f760fa3  main       -> origin/main
Updating 295455d..f760fa3
Fast-forward
 README.md | 2 ++
 1 file changed, 2 insertions(+)
```

**O que o `git pull` fez:**
O comando `git pull` é a junção de dois comandos do Git: `git fetch` (que baixa as referências e commits mais recentes do repositório remoto sem alterar os arquivos locais) e `git merge` (que mescla esses commits baixados na branch ativa local). 

Na execução acima, ele detectou que a branch remota `origin/main` estava à frente por 1 commit (devido à modificação do arquivo `README.md` feita diretamente no GitHub). O Git baixou esses dados e aplicou uma estratégia de **Fast-forward**, movendo o ponteiro da branch local `main` para frente e atualizando o arquivo `README.md` no diretório físico com a alteração remota.

---

## Parte 2: GitFlow — Fluxo Profissional de Desenvolvimento

### Questão 9: Inicializando o GitFlow

#### b) Execução do `git flow init` e saída do terminal:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git flow init -d
Using default branch names.

Which branch should be used for bringing forth production releases?
   - main
Branch name for production releases: [main] 
Branch name for "next release" development: [develop] 

How to name your supporting branch prefixes?
Feature branches? [feature/] 
Bugfix branches? [bugfix/] 
Release branches? [release/] 
Hotfix branches? [hotfix/] 
Support branches? [support/] 
Version tag prefix? [] 
Hooks and filters directory? [C:/Users/Lenovo/Documents/7 PERIODO/ENGENHARIA DE QUALIDADE E CONFIABILIDADE/ATIVIDADE-11.06/lanchonete-web/.git/hooks] 
```

#### c) Execução do `git branch` e explicação sobre a nova branch:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git branch
* develop
  main
```

**Nova branch criada além da `main`:**
A nova branch criada foi a **`develop`**.

**Para que ela serve:**
A branch `develop` funciona como a ramificação de integração para novos recursos. É nela que todo o desenvolvimento de novas funcionalidades (features) é integrado e testado. Ela reflete o estado do código com as últimas alterações prontas para a próxima liberação (próxima release). Em resumo, a `main` é mantida estável apenas com código de produção, enquanto a `develop` serve como a "linha de frente" do desenvolvimento contínuo.

#### d) Envio da branch `develop` para o GitHub:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git push -u origin develop
remote: Create a pull request for 'develop' on GitHub by visiting:        
remote:      https://github.com/guilhermeDev1050/atividade-git-github/pull/new/develop        
branch 'develop' set up to track 'origin/develop'.
To https://github.com/guilhermeDev1050/atividade-git-github.git
 * [new branch]      develop -> develop
```

---

### Questão 10: Ciclo de Feature: Novo Cardápio Online

#### a) Inicialização da Feature e branch atual:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git flow feature start cardapio-interativo
Switched to a new branch 'feature/cardapio-interativo'
```
**Branch em que estamos agora:** `feature/cardapio-interativo`

#### b) Edição do arquivo `cardapio.js` e commits:
Realizamos dois commits durante o desenvolvimento da funcionalidade:
1. **Primeiro Commit:** `feat: adiciona array de produtos do cardapio`
2. **Segundo Commit:** `feat: implementa exibicao do cardapio no console`

#### c) Finalização da Feature:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git flow feature finish cardapio-interativo
Switched to branch 'develop'
Merge made by the 'ort' strategy.
 cardapio.js | 16 ++++++++++++++++
 1 file changed, 16 insertions(+)
 Deleted branch feature/cardapio-interativo (was 987749c).
```

**O que o comando fez automaticamente:**
1. Mesclou a branch da feature (`feature/cardapio-interativo`) na branch de integração (`develop`).
2. Deletou a branch da feature local (`feature/cardapio-interativo`).
3. Retornou o diretório de trabalho ativo (checkout) para a branch `develop`.

**Para qual branch o código foi enviado:**
O código foi mesclado localmente para a branch **`develop`**.

#### d) Histórico gráfico (`git log --oneline --graph`) e descrição do fluxo:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git log --oneline --graph -n 5
*   03b088b Merge branch 'feature/cardapio-interativo' into develop
|\  
| * 987749c feat: implementa exibicao do cardapio no console
| * 59d834d feat: adiciona array de produtos do cardapio
|/  
* 068daf1 chore: atualiza respostas da questao 9
```

**Descrição visual do fluxo:**
O fluxo de desenvolvimento da feature começou a partir da branch `develop` no commit `068daf1`. Uma nova linha de desenvolvimento (`feature/cardapio-interativo`) foi ramificada, onde foram adicionados os commits de desenvolvimento `59d834d` e `987749c`. Por fim, ao rodar o `finish`, o Git realizou um merge commit `03b088b` que uniu a branch de feature de volta à branch `develop`, encerrando o ciclo e apagando a branch temporária.

---

### Questão 11: Ciclo de Release: Preparando a Versão 1.0

#### a) Inicialização da Release:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git flow release start 1.0.0
Switched to a new branch 'release/1.0.0'
```

**Em qual branch o fluxo de release é criado:**
A branch criada é a **`release/1.0.0`**.

**A partir de qual branch ela nasce:**
Ela nasce a partir da branch **`develop`** (pois contém as novas features integradas e prontas para serem preparadas para produção).

#### b) Ajustes na branch de release e commit:
Atualizamos o arquivo `README.md` com as instruções de uso do projeto e adicionamos informações de contato no rodapé do `index.html`. Em seguida, realizamos o commit:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git add .
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git commit -m "chore: prepara release v1.0.0"
[release/1.0.0 81ac450] chore: prepara release v1.0.0
 2 files changed, 6 insertions(+), 2 deletions(-)
```

#### c) Finalização da Release:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git flow release finish -m "Release 1.0.0" 1.0.0
Switched to branch 'main'
Merge made by the 'ort' strategy.
Switched to branch 'develop'
Merge made by the 'ort' strategy.
Deleted branch release/1.0.0 (was 81ac450).
```

**O que ocorreu com as branches `main` e `develop` após esse comando:**
- **`main`:** Recebeu a mesclagem da branch de release (`release/1.0.0`), incorporando as novas funcionalidades e ajustes finos. Foi gerada a tag de versão `1.0.0` apontando para esse commit de merge na `main`.
- **`develop`:** Recebeu a mesclagem da branch de release (`release/1.0.0`) de volta (back-merge), garantindo que quaisquer ajustes e correções feitos de última hora na branch de release fossem integrados no fluxo contínuo de desenvolvimento.
- **`release/1.0.0`:** Foi excluída localmente.

#### d) Execução do `git tag` e papel da tag no GitFlow:
**Saída do comando:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git tag
1.0.0
```

**Função de uma tag no contexto do GitFlow:**
Uma tag serve como um **marcador de referência estático (um apelido amigável)** para um commit específico no histórico (geralmente na branch `main`). No GitFlow, as tags identificam marcos importantes e versões de lançamento oficiais do software (como releases estáveis e prontas para produção: ex. `1.0.0`, `1.0.1`, `2.0.0`). Elas facilitam a recuperação exata de qualquer versão histórica lançada do sistema sem precisar lidar com os hashes de commits do Git.

---

### Questão 12: Ciclo de Hotfix: Corrigindo Bug em Produção

#### a) Inicialização do Hotfix e por que ele nasce da branch `main`:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git flow hotfix start correcao-titulo
Switched to a new branch 'hotfix/correcao-titulo'
```

**Por que o hotfix nasce da `main` e não da `develop`:**
A branch `main` reflete exatamente o código que está rodando em **produção (ambiente ativo que os clientes acessam)**. A branch `develop` contém novos recursos inacabados que ainda não foram testados ou aprovados para publicação. 

Como um hotfix é uma **correção urgente de bugs críticos em produção**, ela deve ser criada diretamente a partir do código estável da `main`, permitindo corrigir o problema rapidamente e publicá-lo de imediato sem levar junto as alterações incompletas/instáveis da branch `develop`.

#### b) Correção do erro no `index.html` e commit:
Corrigimos o título da página no `index.html` e geramos o commit de correção:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git add index.html
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git commit -m "fix: corrige titulo da pagina principal"
[hotfix/correcao-titulo 7a34dfc] fix: corrige titulo da pagina principal
 1 file changed, 1 insertion(+), 1 deletion(-)
```

#### c) Finalização do hotfix, histórico completo e branches mescladas:
Comando executado:
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git flow hotfix finish correcao-titulo
Switched to branch 'main'
Merge made by the 'ort' strategy.
Switched to branch 'develop'
Merge made by the 'ort' strategy.
Deleted branch hotfix/correcao-titulo (was 7a34dfc).
```

**Saída do comando `git log --oneline --all --graph`:**
```powershell
PS C:\Users\Lenovo\Documents\7 PERIODO\ENGENHARIA DE QUALIDADE E CONFIABILIDADE\ATIVIDADE-11.06\lanchonete-web> git log --oneline --all --graph -n 10
*   d3b28d7 Merge tag 'correcao-titulo' into develop
|\  
| *   5c8df4e Merge branch 'hotfix/correcao-titulo'
| |\  
| | * 7a34dfc fix: corrige titulo da pagina principal
| |/  
* | 3977cbb chore: atualiza respostas da questao 11
* | 13f9ff9 Merge tag '1.0.0' into develop
|\| 
| *   688d461 Merge branch 'release/1.0.0'
```

**Para quais branches o hotfix foi mesclado:**
O hotfix foi mesclado para as duas branches principais:
1. **`main`:** Para atualizar imediatamente o código de produção com a correção do bug.
2. **`develop`:** Para garantir que a correção não seja perdida no desenvolvimento futuro e seja integrada no fluxo de trabalho contínuo.

#### d) Número da versão correto após esse hotfix segundo o SemVer e justificativa:
O número de versão correto é **`1.0.1`**.

**Justificativa:**
De acordo com a especificação do **Versionamento Semântico (SemVer 2.0.0)**, o formato da versão é composto por três números inteiros: `MAJOR.MINOR.PATCH` (ex: `1.0.0`):
1. Incrementa-se o **MAJOR** ao realizar alterações incompatíveis com versões anteriores (breaking changes).
2. Incrementa-se o **MINOR** ao adicionar novas funcionalidades de forma retrocompatível.
3. Incrementa-se o **PATCH** ao realizar correções de bugs retrocompatíveis.

Como o hotfix consiste exclusivamente em uma **correção de bug** pontual e retrocompatível no título da página principal, incrementamos apenas o número do **PATCH**, passando a versão de `1.0.0` para `1.0.1`.

---

### Questão 13: Reflexão Final: GitFlow na Prática

#### a) Diagrama completo do histórico de branches (Mermaid Gitgraph):

O diagrama a seguir representa graficamente o ciclo de vida completo do repositório da lanchonete, detalhando as ramificações (`main`, `develop`, `feature`, `release`, `hotfix`) e as mesclagens (merges) com setas:

```mermaid
gitGraph
  commit id: "1d2dd60 (Estrutura Inicial)"
  commit id: "eaa1739 (Estrutura HTML)"
  commit id: "3b51404 (Estilos CSS)"
  commit id: "24c79fc (Javascript Base)"
  
  branch feature-pagina-promocoes
  checkout feature-pagina-promocoes
  commit id: "5372708 (promocoes.html)"
  
  checkout main
  merge feature-pagina-promocoes id: "0774765 (Merge Feature)"
  commit id: "3efad02 (Erro Proposital)"
  commit id: "c49d27f (Revert Erro)"
  
  branch develop
  checkout develop
  commit id: "068daf1 (Respostas Q9)"
  
  branch feature-cardapio-interativo
  checkout feature-cardapio-interativo
  commit id: "59d834d (Produtos Array)"
  commit id: "987749c (Console Log)"
  
  checkout develop
  merge feature-cardapio-interativo id: "03b088b (Merge Feature JS)"
  commit id: "a49cec1 (Respostas Q10)"
  
  branch release-1.0.0
  checkout release-1.0.0
  commit id: "81ac450 (Ajustes README/HTML)"
  
  checkout main
  merge release-1.0.0 tag: "1.0.0"
  
  checkout develop
  merge release-1.0.0 id: "13f9ff9 (Backmerge Release)"
  commit id: "3977cbb (Respostas Q11)"
  
  checkout main
  branch hotfix-correcao-titulo
  checkout hotfix-correcao-titulo
  commit id: "7a34dfc (Fix Titulo)"
  
  checkout main
  merge hotfix-correcao-titulo tag: "1.0.1"
  
  checkout develop
  merge hotfix-correcao-titulo id: "d3b28d7 (Backmerge Hotfix)"
  commit id: "225ee10 (Respostas Q12)"
```

#### b) Indicação e complexidade do GitFlow em projetos:

- **Onde o GitFlow é MAIS indicado:** 
  O GitFlow é ideal para projetos de médio a grande porte que possuem **ciclos de lançamento estruturados e planejados (releases periódicas)**. É recomendado para equipes onde várias funcionalidades estão sendo desenvolvidas paralelamente, e onde é crucial manter uma separação rígida entre o que está em desenvolvimento ativo (`develop`), o que está sendo testado para lançamento (`release/`) e o que está estável em produção (`main`). Projetos como aplicativos móveis (que passam por aprovações em lojas) ou softwares empresariais com suporte a múltiplas versões legadas se beneficiam enormemente dessa estrutura.

- **Onde o GitFlow é DESNECESSARIAMENTE complexo:**
  O GitFlow torna-se um fardo em projetos pequenos, startups ou sistemas SaaS (Software as a Service) baseados em **entrega contínua (Continuous Deployment / Continuous Delivery)**. Em cenários onde cada commit aprovado vai diretamente para produção múltiplas vezes ao dia, manter branches como `release/` e `develop` cria um overhead operacional excessivo, com merges constantes que atrasam as entregas e aumentam a chance de conflitos. Nesses casos, fluxos simplificados como o **GitHub Flow** (apenas `main` e branches de feature curtas) são mais indicados.

#### c) Comparação: Histórico com GitFlow vs. Sem GitFlow:

- **Vantagem do GitFlow (exercícios 9–13):**
  **Segurança e Organização de Lançamento.** O GitFlow oferece um fluxo extremamente claro e seguro para preparar novas versões e corrigir bugs de produção. A existência das branches de `release` e `hotfix` permite testar e corrigir o software em isolamento total, sem congelar o desenvolvimento de novas features que continua acontecendo na branch `develop`.

- **Desvantagem do GitFlow (exercícios 9–13):**
  **Complexidade Operacional e Sobrecarga de Merges.** O histórico de commits torna-se muito mais ramificado e difícil de acompanhar visualmente à primeira vista. Há um número significativamente maior de comandos para rodar (inicializar features, finalizar features, finalizar releases, back-merges) e um risco aumentado de conflitos complexos de mesclagem ao sincronizar a `develop` de volta com a `main`. Em projetos ágeis, esse processo pode reduzir a velocidade de entrega do time.

---






