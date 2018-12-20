# Ankiport

An app that lets you convert from Quizlet to Anki. Version 0.0.1 is now live at https://ankiport-app.appspot.com/! Just plug in a valid Quizlet URL, and it'll download an Anki `.apkg` with all the text content transferred over.

Ankiport is a pretty standard React app, originally bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The backend is a Flask API that lives [here](https://ankiport-api.appspot.com/); the code can be found [here](https://github.com/jahzielv/ankiport-api).

Many thanks to [Kerrick Staley](https://github.com/kerrickstaley) for writing [genanki](https://github.com/kerrickstaley/genanki), without which this project would not be possible!
