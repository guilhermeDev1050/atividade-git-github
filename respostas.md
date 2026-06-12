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
