# Vaccine Control
<p align="center">API created for the Women Can Code project challenge. The goal is to develop an application for personal vaccine control using node.js</p>


### Routes

| Method       | Route                      | Description                            |
| ------------ | -------------------------- | -------------------------------------- |
| GET          | `/vaccines`                | Return all the vaccines resgistered    |
| GET          | `/vaccines/:id`            | Return only one especific vaccine      |
| POST         | `/vaccines`                | Register a new vaccine                 |
| PATCH        | `/vaccines/:id/vaccinated` | Mark as "taken" one vaccine            |
