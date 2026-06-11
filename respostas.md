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
