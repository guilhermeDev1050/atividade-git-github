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


