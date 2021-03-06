# Stroke Response

![Home Page](./src/images/home-page.png)

## Description

A tool to help identify potential strokes, record valuable information at the time of the neurological event, increase the likelihood of need care sought, and lessen the burden of memory on individuals responding to a possible stroke.

## Technologies Used

- React
- React Router
- JSX
- JavaScript
- React-animate-css
- HTML
- CSS

## User Stories

#### MVP

- As a user I want to be able to access a stroke questionnaire, so that I can recognize a stroke in myself or others.
- As a user I want to be able to record answers to the stroke questionnaire, so that I have a detailed record of symptoms to show the doctors in the ER.
- As a user I want to be able to create an account, so that I have the option/ability to view previous event notes in follow-up care visits.
- As a user I want to be able to see my form response notes on a finished screen, so that I can just screenshot the response answers if the account creation feels like a hindrance or unnecessary.
- As a user I want to be able to see an about page that explains strokes and the background of the app, so that I can learn more about strokes, and have reassurance for the validity of the app.
- As a user I want to be able to only see event logs associated with my username if I’m logged in, so that I don't have to dig for my event logs.

#### Stretch

- As a user I want to be able to see the time I started the form, so that I do not have to rely on just myself to record important information.
- As a user I want to be able to Update and Destroy old event logs, so that I have agency over my personal information and can add notes to the log if I remember something important later that I didn’t think to write down.
- As a user I want the ability to edit my account information or delete my account, so that I can still access information if I forget the password or delete my account if necessary.

## Wireframes

![Wireframe1](./src/images/wireframe1.png)
![Wireframe2](./src/images/wireframe2.png)
![Wireframe3](./src/images/wireframe3.png)
![Wireframe4](./src/images/wireframe4.png)
![Wireframe5](./src/images/wireframe5.png)
![Wireframe6](./src/images/wireframe6.png)
![Wireframe7](./src/images/wireframe7.png)
![Wireframe8](./src/images/wireframe8.png)

## Getting Started

### Navigate to the working app

- The working app can be found at [Stroke Response](https://stroke-response.netlify.app/).
- Click the large red circle to start logging a stroke event.
- Click 'About' in the navigation bar to learn more about the app.

## Run your own Stroke Response app

- Fork and clone this repository to your own local repository (terminal) using the SSH or HTML key `git clone`
- Navigate into the new directory `cd stroke_react`
- Open the cloned files in Visual Studo code editor. ` code .`
- Check out your branch of choice `git checkout -b dev`
  -run `npm i` to download dependencies.
- run `npm start`
- This will automatically open http://localhost:3000/ in your web browser and display the stroke response app.

## Major Hurdles

- Log in upon account creation.
- Live Assessment of form results.
- useContext.

## Future Directions

In the future, I would like users to be able to update their event log to include the outcome. By recording the data we are currently, we have the ability to research correlations in onset time, and symptom frequency. Outcome data would allow for valuable research of the Cincinnati Prehospital Stroke Scale itself.

## Working in Tandem With:

- https://github.com/katlynhutson/stroke_django
- https://stroke-response-api.herokuapp.com/data/
