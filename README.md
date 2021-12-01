# Vaccine Control
<p align="center">API created for the Women Can Code project challenge. The goal is to develop an application for personal vaccine control using node.js</p>


### Routes

| Verbo        | Recurso                    | Descrição                              |
| ------------ | -------------------------- | -------------------------------------- |
| GET          | `/vaccines`                 | Retornar todas as vacinas cadastradas  |
| GET          | `/vaccines/:id`             | Retornar apenas uma vacina específica  |
| POST         | `/vaccines`                | Cadastrar uma nova vacina              |
| PATCH        | `/vaccines/:id/vaccinated`  | Marcar se tomou a vacina               |
