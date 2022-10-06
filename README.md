# GRUPPE-REPOSITORY

| Navn                   | URL linken                    |
| ---------------------- | ----------------------------- |
| Emel Yilmaz            | https://github.com/Emel82     |
| Bjørnar Hatling Skåden | https://github.com/bjornarsk  |
| Victoria Wold          | https://github.com/victow11   |
| Simen Chan Amundsen    | https://github.com/Chamundsen |
| Gøran Kvitne           | https://github.com/gorankvi   |

Sammendrag av prosessen: Vi synes denne prosessen var ganske utfordrende og komplisert. Vi skulle gjerne hatt mer info og inføring i både Git og Github fra foreleser. Hvis vi ikke hadde hatt et medlem på gruppa som hadde litt erfaring med Github og hvordan å bruke det, hadde vi sannsynnligvis ikke kommet så langt. MVP Emel. Samlet i gruppen kommer vi fram til en en 3-er når det gjelder forståelse for Git og Github. Igjen hadde det vært veldig nyttig med innføring fra foreleser. Vi tror vi har fått det til, men sliter forstatt med hvordan vi bruker Github for å dele filer med hverandre. Spesielt det med Pull-Request forsto vi ikke helt.
Mvh Emel, Victoria, Gøran, Simen og Bjørnar :)

                                    FLAGGOPPGAVE

Vi har laget prosjektet på Github, noe som gjør det enklere for oss å organisere og prioritere arbeidet vårt. Vi har valgt board layout slik at man kan spore oppgavene sine med To do, In progress og Done columns. Det er lettere å bruke Basic Kanban template fordi vi lettere kan se oppgavene som står i To do, In progress og Done. Her kan du manuelt flytte fra en kolonne til en annen. I tillegg kan vi enkelt se hvem som har ansvar for hvilken oppgave. Vi koblet vårt repository med github-prosjektet, på denne måten kan alle Issues organiseres i prosject board.
Vi har delt inn flaggoppgave i deloppgaver som fordeles på gruppemedlemmer og registreres i Github projects og vi har gjort om disse oppgavene til Issues.
Vi har brukt div- element for å lage flaggene da div-element er som en box og det er lettere å justere flaggene. Siden div-element er block, brukte vi display: flex style for å justere flaggene horisontalt. For å utjevne avstanden mellom flaggene brukte vi justify-content: space-jevnt style. Vi brukte også flex-wrap: wrap style for at flaggene skulle stilles opp på den lille skjermen.

Tildeling av oppgaver: 

P-element og "style attributt - alle medlemmer

P-element og "id" og/eller "class" attributter - Victoria, Simen, Bjørnar

HTML5 canvas API - Gøran og Emel

1) p-elementet og “style” attributt
I denne oppgaven brukte vi inline CSS til å style et spesifikt HTML-element. Vi la til style attribute til hver HTML-tag, uten å bruke selectors.
Siden hver HTML-tag må styles individuelt, anbefales ikke denne CSS-typen. Det er tidkrevende å legge til CSS-regler til hvert HTML-element og kompliserer HTML-strukturen. Dessuten kan styling av flere elementer påvirke sidestørrelse og nedlastingstid. (Domantas, 2022). Siden det ikke er mulig å lage runde former med denne metoden, vil det ikke være mulig å produsere flere typer flagg.

2) p-elementet og “id” og/eller “class” attributter
I denne delen brukte vi internal CSS og vi la til <style>-taggen i <head>-delen av HTML-dokumentet. Vi har brukt class selector fordi id- selector brukes vanligvis for javascript. Siden vi legger koden i samme HTML-fil, kan det betraktes som en fordel at vi ikke trenger å laste opp mer enn én fil. Å legge til koden i HTML-dokumentet kan også betraktes som en ulempe da det øker størrelsen på siden og lastetiden.

3) HTML5 Canvas API
I den siste delen brukte vi canvas-elementet for å lage flagget. HTML <canvas>-elementet brukes til å tegne grafikk via JavaScript. <canvas>-elementet er bare en beholder for grafikk. Vi må bruke JavaScript for å faktisk tegne grafene. Canvas har flere metoder for å tegne bokser, sirkler, tekst og legge til bilder. (W3 schools, u.å.)
For å lage flaggene med denne metoden, la vi til <canvas>-elementet inne i div-elementet og ga det en id. Fordi vi må bruke denne ID-en i javascript. For å etablere koblingen mellom javascript-filen og html-filen, legger vi lenken til javascript-filen i <script>-elementet.

4) De første ukene i prosjektet startet vi med å lage våre egne flagg med de 3 forskjellige metodene. Vi misforsto oppgaven litt og skjønte litt sent at vi burde startet med å fordele oppgavene, og sammarbeide mer om de tre forskjellige flaggene og metodene. Vi burde helt i starten ha registrert "Github-projects" hvor vi lettere kunne følge med på hverandres endringer og fremgang i prosjektet. Dette er en god læring til neste prosjekt.

Kilder:
Domantas G. (2022, 05. April) Types of CSS: Inline, External and Internal Definitions and Differences Explained. Hostinger. Hentet fra: https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css
W3 schools. (u.å.) HTML Canvas Graphics. Hentet fra: https://www.w3schools.com/html/html5_canvas.asp
