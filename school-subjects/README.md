<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->







React Skolski Predmeti Aplikacija

Opis:
Ova aplikacija je kreirana kao deo zadatka za prikaz skolskih predmeta. 
Aplikacija omogucava pregled svih predmeta, 
pretragu predmeta u realnom vremenu, 
login funkcionalnost, 
kao i CRUD operacije za predmete i jedan dodatni entitet.

Kako Pokrenuti:

Preuzimanje Koda

Preuzmite ZIP arhivu koja sadrzi kod aplikacije.

Instalacija:

Otvorite terminal i navigirajte do direktorijuma sa aplikacijom. 

Instalirajte sve zavisnosti koristeci:

npm install

Pokretanje Aplikacije

Pokrenite aplikaciju koristeci:

npm start
Otvorice se u vasem pregledacu na adresi http://localhost:3000.

Zadaci:

Zadatak 1: Prikazivanje skolskih predmeta

Opis: Kreirana je React aplikacija za prikaz svih skolskih predmeta sa mogucnoscu "live" pretrage.
Tehnologije: React(bez MUI).
Kako radi: Predmeti se ucitavaju iz prethodne aplikacije (E-Dnevnik) i prikazuju se na stranici. Korisnici mogu pretrazivati predmete u realnom vremenu pomocu input polja.

Zadatak 2: Izgled Stranice

Opis: Implementiran je izgled stranice za prikaz predmeta prema specifikacijama iz slike.
Tehnologije: CSS za stilizaciju stranice.
Kako Izgleda: Stranica je dizajnirana prema zadatim specifikacijama. 
Stilizacija je radjena koristeci CSS.

Zadatak 3: Login Funkcionalnost i Rutiranje
Opis: Implementiran je sistem za prijavu i rutiranje pomocu react-router-dom.
Tehnologije: React, react-router-dom.
Kako Radi: Korisnici se mogu prijaviti na aplikaciju i samo ulogovani korisnici mogu pristupiti funkcionalnostima aplikacije. 
Rutiranje je omoguceno za navigaciju izmedju razlicitih stranica aplikacije.

Zadatak 4: CRUD Operacije

Opis: Implementirane su CRUD operacije za predmete i jedan dodatni entitet (Nastavnici).
Tehnologije: React, CSS, MUI.
Funkcionalnosti:
Prikaz: Lista svih predmeta i nastavnika.
Pretraga: Pretrazivanje predmeta i nastavnika.
Brisanje: Opcija za brisanje predmeta i nastavnika.
Izmena: Opcija za izmenu postojecih predmeta i nastavnika.
Dodavanje: Opcija za dodavanje novih predmeta i nastavnika.

Koriscenje:
Navigacija: Pomocu menija ili navigacionih linkova mozete pristupiti razlicitim stranicama aplikacije.
Pretraga: Koristite pretragu za filtriranje predmeta u realnom vremenu.
Login: Prijavite se da biste pristupili svim funkcionalnostima aplikacije.
CRUD Operacije: Koristite ponudjene opcije za upravljanje entitetima u aplikaciji.