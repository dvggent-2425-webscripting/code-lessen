# Wie is het molletje? | REMASTERED

In deze oefening maken we de oefening uit week 1, genaamd "Wie is het molletje?" opnieuw, maar op een **dynamische en flexibele** manier door het gebruik van **objecten**. De HTML & CSS krijgen jullie opnieuw aangeleverd.

Het is nu aan jullie om via JavaScript alle kandidaten in de DOM te renderen en vervolgens een klik-event op te vangen op de button, waarna de mol wordt onthuld.

## Stappenplan

### 1. Maak een array van kandidaten aan

Maak zelf een array van objecten met onderstaande gegevens. Elk object moet een `firstName`, `lastName` & `imageUrl` propertie hebben:

- Bernard, Balcaen, images/bernard.png
- Charlotte, De Mol, images/charlotte.png
- Gillian, Folens, images/gillian.png
- Karolien, Van Der Kelen, images/karolien.png
- Lynn, Thissen, images/lynn.png
- Marta (Coco), Corbillo Colom, images/marta.png
- Michaël, Moens, images/michael.png
- Philippe, Weiler, images/philippe.png
- Senne, van der Zweep, images/senne.png
- Stéphanie, Bensaad, images/stephanie.png

### 2. Sla de mol op in een variabele

Maak een variabele aan waarin je het object van de mol uit de bovenstaande array plaatst.

### 3. Genereer de kandidaten in de DOM

Gebruik de candidates array om voor elk object een HTML-element aan te maken.

- Loop over de array. **Tip**: gebruik een loop die je automatisch info geeft over de positie (=index) van het element in de array.
- Maak een `<article>`-element per kandidaat
- Voeg de klasse `candidate` toe.
- Voeg een `ID` toe aan elk kandidaat-element in het formaat: `candidate-INDEX`, waarbij INDEX de index in de array is. **Tip** Je kan hier automatisch aan geraken door de juiste soort loop te gebruiken.
- Gebruik `.innerHTML` om de afbeelding en naam van de kandidaat in te voegen. De HTML structuur moet uiteindelijk hetzelfde zijn als bij de oefening in week 1.
- Voeg elk gegenereerd element toe aan de container met id `candidates`.

### 4. Voeg een event listener toe aan de knop

- Zoek de knop met de klasse `reveal`.
- Voeg een `click` event listener toe die de `functie revealAnswer()` aanroept.

### 5.Zoek en markeer de mol

Schrijf deze code in de `functie revealAnswer()`

- Zoek de index van het mol-object in de candidates array. Gebruik hiervoor de findIndex() methode [MDN: findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
- Selecteer het juiste kandidaat-element in de DOM door een `querySelector` te schrijven die zoekt op het ID `candidate-INDEX` (waarbij INDEX staat voor het juiste index-cijfer).
- Voeg de klasse `molletje` toe aan dit element.
- Toon een alert die zeg "FIRSTNAME LASTNAME is het molletje", waarbij je "FIRSTNAME" en "LASTNAME" vervangt door de correct voor- en familienaam.

## Belangrijke Opmerkingen

- De structuur van de DOM moet identiek zijn aan de vorige oefening, maar dit keer moet alles via JavaScript worden gegenereerd.
- Het ID-attribuut van elke kandidaat moet beginnen met `candidate-` gevolgd door de index. Dit ID is noodzakelijk om het juiste mol-element op te halen in de `revealAnswer functie`.
