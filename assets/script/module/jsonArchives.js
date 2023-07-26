
//OBJETOS JSON
const stepOne = {
    "title": "Personal info",
    "description": "Please, provide your name, your email address, and your phone number.",
    "form": {
      "method": "get",
      "inputs": [
        {
          "label": "Name",
          "type": "text",
          "id": "Name",
          "placeholder": "E. S. Durmontd"
        },
        {
          "label": "Email addtress",
          "type": "text",
          "id": "Email-address",
          "placeholder": "mailmailmail@mail.com"
        },
        {
          "label": "Phone number",
          "type": "text",
          "id": "Phone-number",
          "placeholder": "+55(79)99999-9999"
        }
      ]
    }
  } 

  const stepTwo = {
    "title": "Select your plan",
    "description": "You have a option the option of monthly or yearly billing",
    "plans": [
      {
        "icon": "assets/images/icon-arcade.svg",
        "title": "Arcade",
        "price": "$9/mo"
      },
      {
        "icon": "assets/images/icon-advanced.svg",
        "title": "Advanced",
        "price": "$12/mo"
      },
      {
        "icon": "assets/images/icon-pro.svg",
        "title": "Pro",
        "price": "$15/mo"
      }
    ],
    "selection": [
      {
        "label": "monthly"
      },
      {
        "label": "yearly"
      }
    ]
  };

  const stepThree = {
    "title": "Pick add-ons",
    "description": "add-ons helps enhance your gaming experiences",
    "div": {
      "id": "aditionals",
      "div": [
        {
          "class": "adds",
          "input": {
            "class": "checkMark",
            "type": "checkbox"
          },
          "div": {
            "class": "add-descrip",
            "h4": "online service",
            "p": "access to multiplayer games"
          },
          "p": {
            "class": "price",
            "$t": "+$1/mo"
          }
        },
        {
          "class": "adds",
          "input": {
            "class": "checkMark",
            "type": "checkbox"
          },
          "div": {
            "class": "add-descrip",
            "h4": "larger storage",
            "p": "extra 1gb cloud storage"
          },
          "p": {
            "class": "price",
            "$t": "+$2/mo"
          }
        },
        {
          "class": "adds",
          "input": {
            "class": "checkMark",
            "type": "checkbox"
          },
          "div": {
            "class": "add-descrip",
            "h4": "customizable profile",
            "p":"custom theme on your profile"
          },
          "$t":"+$3/mo"
        }
      ]
    }
  }

  const stepFour = {
    "h1": "Finishing Up",
    "p": "double check everything looks OK before confirming.",
    "div": {
      "@id": "finish",
      "div": [
        {
          "@id": "selected-plan",
          "@class": "options",
          "h5": {
            "_text": "plano()",
            "span": ""
          },
          "span": {
            "@class": "valor",
            "_text": "12"
          }
        },
        {
          "@class": "options",
          "p": "ideia",
          "span": {
            "@class": "valor",
            "_text": "12"
          }
        },
        {
          "@class": "options",
          "p": "carro",
          "span": {
            "@class": "valor",
            "_text": "12"
          }
        }
      ]
    },
    "div2": {
      "@id": "total",
      "p1": "total",
      "p2": {
        "_text":"valor total"
      }
    }
  }