# Make: Wie is het molletje?

In deze oefening hebben we al wat code klaargezet: de HTML & CSS zijn klaar. Overloop volgende stappen om de pagina af te werken:

1. Laad de JavaScript file in
2. Maak een variabele aan waarin je de naam van de mol kan opslaan.
3. Wanneer je op de button "Onthul nu" klikt, moet De Mol worden aangeduid. Dit doe je op volgende manier:
   - Haal eerst het juiste element uit het document. **Tip**: Zoek op ID.
   - Daarna voeg je er de class `.molletje` aan toe. **Tip**: gebruik de `.add()` method op de `element.classList()` property, vb:
     ```
     myElement.classList.add("my-class-name");
     ```
4. Voeg ook een alert toe met de boodschap: "XXX is het molletje", waarbij je `XXX` vervangt door de volledige naam van de mol. **Tip** Je kan een query uitvoeren op een element dat je al vast hebt. Daarna kan je gebruik maken van de `.innerText` property om de volledige naam uit te lezen.
