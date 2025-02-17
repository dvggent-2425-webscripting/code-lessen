# Mysterieuze Knoppen Demo

In deze demo komen de volgende concepten aan bod:

- Het gebruik van `querySelector` en `querySelectorAll` om DOM elementen te selecteren
- Het werken met variabelen om DOM elementen op te slaan
- Het toepassen van eventListeners voor interactiviteit
- Het manipuleren van CSS classes met `classList` methodes (`add()`, `remove()`, `toggle()`)

## Functionaliteit

De demo bevat verschillende interactieve knoppen:

- Een "Magische Kleur" knop die klasse togglet
- Een "Toon Geheim" knop die verborgen tekst zichtbaar maakt
- Een "Verberg Geheim" knop die tekst weer verbergt
- Meerdere "Gloeiend Effect" knoppen die kunnen oplichten

## Projectstructuur

- **index.html**: Bevat de HTML structuur met knoppen en tekst
- **main.css**: Styling voor de knoppen en effecten
- **main.js**: JavaScript code voor de interactiviteit
- **background.css**: Achtergrond styling effecten

## Gebruikte Technieken

### DOM Selectie

```
document.querySelector("#unique-id")
document.querySelectorAll(".class")
```

### Event Handlers

```
myElement.addEventListener("click", function() {
	// code die uitgevoerd wordt bij klik
})
```

**Note**: binnen de accolades `{}` van de functie in de eventListener maken we gebruik van het keyword `this`. Dit is een referentie naar de variabele waarop we de listener toevoegen.

### ClassList Manipulatie

```
myElement.classList.add("my-class"); 		// Voegt de class toe
myElement.classList.remove("my-class");		// Verwijdert de class
myElement.classList.toggle("my-class");		// Schakelt de class aan/uit
```
