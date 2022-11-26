const data = [
    {
    "exams": [
      {
        "id": 1,
        "title": "Prova Node",
        "description": "Venha fazer essa prova maravilhosa e mostre seus conhecimentos",
        "asset": "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
      }
    ],
    "questions": [
      {
        "id": 1,
        "examId": 1,
        "description": "Qual das opções abaixo é o repositório de projetos Node.js ?",
        "orderNumber": 1
      },
      {
        "id": 2,
        "examId": 1,
        "description": "Quais são os tipos de dado em Node.js ?",
        "orderNumber": 3
      },
      {
        "id": 3,
        "examId": 1,
        "description": "Os módulos Node.js podem ser expostos usando ?",
        "orderNumber": 2
      }
    ],
    "alternatives": [
      {
        "id": 1,
        "questionId": 1,
        "description": "npm",
        "isCorrect": true
      },
      {
        "id": 2,
        "questionId": 1,
        "description": "gradle",
        "isCorrect": true
      },
      {
        "id": 3,
        "questionId": 1,
        "description": "maven",
        "isCorrect": false
      },
      {
        "id": 4,
        "questionId": 1,
        "description": "yarn",
        "isCorrect": false
      },
      {
        "id": 5,
        "questionId": 2,
        "description": "String, Number, Boolean, Undefined, Null, RegExp e Buffer",
        "isCorrect": true
      },
      {
        "id": 6,
        "questionId": 2,
        "description": "let",
        "isCorrect": true
      },
      {
        "id": 7,
        "questionId": 2,
        "description": "const",
        "isCorrect": false
      },
      {
        "id": 8,
        "questionId": 2,
        "description": "var",
        "isCorrect": false
      },
      {
        "id": 9,
        "questionId": 1,
        "description": "module.expose",
        "isCorrect": false
      },
      {
        "id": 10,
        "questionId": 1,
        "description": "module",
        "isCorrect": false
      },
      {
        "id": 11,
        "questionId": 1,
        "description": "module.exports",
        "isCorrect": true
      },
      {
        "id": 12,
        "questionId": 1,
        "description": "Todas as opções",
        "isCorrect": false
      }
    ]
  }
]

export default data;