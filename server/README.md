# CodeAdvisor BACK

<p align="legth">
  <img height="200" src="image/README/logo_2.jpeg" />
</p>

welcome to this part of henry's final project (FP)
Here the entire part of the BACK was worked on, creating the database, the routes and all the behavior behind our page in data matters.

### Used technology:

* axios
* dotenv
* express
* firebase
* mercadopago
* next
* nodemailer
* morgan
* nodemon

### before:

to start in the git console it is located in the "server" folder,
and start the installation with "npm install"

## Starting

1. Fork the repository to have a copy of it on your accounts
2. Clone the repository on their computers to start working

__IMPORTANT:__ It is necessary to have at least the latest stable version of Node and NPM. Make sure you have it in order to correctly install the necessary dependencies to run the project.

To check which version you have installed:

```bash
node -v
npm -v
```

The dependencies that were used are in: package.jsom.

## dependencies:

- __@mailchimp/mailchimp_marketing__ --> ^3.0.80
- __axios__ -------------------------------------> ^1.3.2
- __cookie-parser__ ---------------------------> ^1.4.6
- __cors__ --------------------------------------> ^2.8.5
- __dotenv__ -----------------------------------> ^16.0.3
- __express__ -----------------------------------> ^4.18.2
- __firebase__ -----------------------------------> ^8.10.1
- __mercadopago__ ----------------------------> ^1.5.15
- __next__ ---------------------------------------> ^13.1.6
- __nodemailer__ -------------------------------> ^6.9.1
- __pg__ ------------------------------------------> ^8.9.0
- __sequelize__ ----------------------------------> "^6.28.0"

> __IMPORTANT:__ More current versions could have different configurations compared to the versions we have been working on during the project.

## BoilerPlate

In this folder create a file called: `.env` that has the following form:

```env
    AUTH_DOMAIN         ="empty"
    API_KEY             ="empty"
    PROJECT_ID          ="empty"
    STORAGE_BUCKET      ="empty"
    MESSAGING_SENDER_ID ="empty"
    APP_ID              ="empty"
    MEASUREMENT_ID      ="empty"
    PORT                ="3002"
    HOST                ="localhost"
    HOST_URL            ="http://localhost:3002"

    VERCEL_URL          ="empty_url"

    MERCADOPAGO_KEY     = APP_USR-
```

Replace `empty` with your own firebase credentials to connect to it. if you don't have an account you need to create one, you also have to create a deploy with `vercel` and add the `.env` file to it and place the url created in vercel in `empty_url`. This file will be ignored on github upload, as it contains sensitive information (credentials)..

## statement

The general idea is to create a `BACK` for our application: [CodeAdvisor](https://code-advisor-hy1v.vercel.app) with all the functions and data calls in an area external to the main application:

## Routes created in the BACK

the `URL` of the back will be in local `http://localhost:3002` and by vercel `https://example-back.vercel.app`

- ### __rutas user__:

    - [__GET__]() ==> __URL/User/__
        - Obtener un listado de User
        - Devuelve solo los datos necesarios para la ruta principal
    - [__POST__]() =>  __URL/User/__
        - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de User por body
        - Crea un nuevo User en la base de datos, relacionado a su registro por id
    - [__PUT__]() ==> __URL/User/:uId__
        - Recibe los datos recolectados desde el formulario controlado de la ruta de modificacion de User por body
        - Modifica solo los datos enviados en la base de datos sin afectar los otros

    Advisor
    - [__POST__]() => __URL/User/:uId/Advisor__
       - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de User_Advisor por body
        - Crea un nuevo Advisor en la base de datos, relacionado a su User por id
    - [__PUT__]() ==> __URL/User/:uId/Advisor/:aId__
        - Recibe los datos recolectados desde el formulario controlado de la ruta de modificacion de User_Advisor por body
        - Modifica solo los datos enviados en la base de datos sin afectar los otros

    MyCart
    - [__GET__]() ==> __URL/User/:uId/MyCart__

- ### __rutas advisor__:

    - [__GET__]() ==> __URL/Advisor/__
    - [__GET__]() ==> __URL/Advisor/aId__

    Reviwers
    - [__GET__]() ==> __URL/Advisor/aId/Reviwers/__
    - [__POST__]() => __URL/Advisor/aId/Reviwers/__
    - [__PUT__]() ==> __URL/Advisor/aId/Reviwers/rId__

    Schedules
    - [__GET__]() ==> __URL/Advisor/aId/Schedules/__
    - [__POST__]() => __URL/Advisor/aId/Schedules/__
    - [__PUT__]() ==> __URL/Advisor/aId/Schedules/rId__

    MyWallet
    - [__GET__]() ==> __URL/Advisor/aId/MyWallet/__
    - [__PUT__]() ==> __URL/Advisor/__
- ### __rutas payment__:

    - [__GET__]() ==> __URL/payment/__
    - [__POST__]() => __URL/payment/__
    - [__PUT__]() ==> __URL/payment/__
- ### __rutas data__:
    Autores
    - [__GET__]() ==> __URL/data/Autores/__

    CommunityComments
    - [__GET__]() ==> __URL/data/CommunityComments/__
    - [__POST__]() => __URL/data/CommunityComments/__
    - [__PUT__]() ==> __URL/data/CommunityComments/__

    TechSkills
    - [__GET__]() ==> __URL/data/TechSkills/__
    - [__GET__]() ==> __URL/data/TechSkills/:tId__

    Contacts
    - [__GET__]() ==> __URL/data/Contacts/__
    - [__POST__]() => __URL/data/Contacts/__

    Specialty
    - [__GET__]() ==> __URL/data/Specialty/__

    XD(rutas que seran eliminadas pronto)
    - [__GET__]() ==> __URL/data/XD/__
    - [__GET__]() ==> __URL/data/XD/:id__
    - [__POST__]() => __URL/data/XD/__
    - [__PUT__]() ==> __URL/data/XD/:id__

## Base de datos __`firebase`__

### Collections in firebase are structured as follows:

`[ *data* ]` => coleciones,

`[ ]-id` => id de un documento

`*` => valor dentro de un documento

- [ User ]-id
    - [ Advisor ]
    - [ MyCart ]
    - Nickname 
    - Img 
    - status
    - statusAdvisor 
    - statusMyCart

- [ Advisor ]-id
    - [ MyWallet ]
    - [ Reviwers ]
    - [ Schedules ]
    - About
    - Contact
    - Firstname
    - Img
    - Language
    - Lastname
    - Price
    - Residence
    - Score
    - Specialty
    - TechSkills
    - status
    - statusMyWallet
    - statusReviwers
    - statusSchedules

- [ Autores ]- id
    - about
    - email
    - gitHub
    - img
    - linkedin
    - name
    - ocupation
    - status

- [ CommunityComments ]-id
    - img
    - name
    - ranking
    - status
    - testimonial

- [ TechSkills ] -id
    - Description
    - Image
    - Name
    - status

- [ Reviwers ] -id
    - Img
    - Name
    - Reviwer
    - score
    - status

- [ Schedules ] -id
    - TechSkills
    - Student
    - Meet
    - Start
    - End
    - status

- [ MyWallet ]
    - userName
    - TechSkills
    - myPayment
    - status

- [ MyCart ]
    - advisorName
    - TechSkills
    - myPurchase
    - status



The relationship between `collections` is by id reference, so it is necessary to call the id of where and what is being called or changing data.
## Backend


__IMPORTANT__: You can modify the filtering, ordering and paging provided by BACK , under your own knowledge.
