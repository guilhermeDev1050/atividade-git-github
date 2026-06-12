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
