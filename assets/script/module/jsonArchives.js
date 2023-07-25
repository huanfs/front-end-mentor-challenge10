
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