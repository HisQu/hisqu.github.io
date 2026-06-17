---
title: "Warum funktioniert meine Regex nicht?"
description: "Reguläre Ausdrücke sind das non plus ultra zur automatischen Extraktion aus Texten. Sie bieten aber auch eine Hürde: komplexe Syntax und unerwartete Fehler. Zur korrekten Anwendung bedarf es gewissen Versiertheit, wobei selbst Erfahrene gelegentlich nicht erklären können, wieso ein Ausdruck nicht passt. Paredros erklärt den Parsingprozess visuell und unterstützt das Debugging."
date: "2026-06-17T15:00:00"
authors: [ "dm" ]
location: "Jena"
image:
  src: "../../assets/blog/paredros_wordmark.png"
  alt: "Paredros Wortmarke"
readTime: "4 min"
category: "Tool"
featured: false
---


<figure class="quote">
  <blockquote>
    <p>L'historien de demain sera programmeur ou il ne sera plus.</p>
  </blockquote>
  <figcaption>
    Emanuel Le Roy Ladurie, <cite>Le territoire de l'historien</cite>, in: "Le Nouvel Observateur" (1968)
  </figcaption>
</figure>

Die schon vor 55 Jahren ausgesprochene Warnung Emanuel Le Roy Laduries ist heute aktueller denn je. Auch Historiker müssen sich heute der Herausforderung der Digitalisierung stellen! 

Ein bedeutender Teil des Forschungsprozesses ist das **Quellenstudium und die Extraktion der Daten** zur Weiterverarbeitung. Vorherrschende Ansätze sind Insellösungen, **komplizierte und wartungsaufwändige Skripte** mit undurchsichtigen Fallunterscheidungen oder statistische Ansätze, etwa mit **Large Language Models (LLMs)**. Beide leiden unter mangelnder Nachvollziehbarkeit (vgl. Piotrowski, 2012).

Ein methodisch überlegener Ansatz ist der Einsatz **formaler Grammatiken**. Sie erlauben es, die Struktur von regestenartigen Dokumenten **präzise und vollständig zu beschreiben** und mittels eines Parsers automatisiert **in strukturierte Daten zu überführen**. Doch trotz dieser Stärke hat sich die Methode in den DH kaum durchgesetzt. Die Gründe liegen in den **hohen konzeptionellen und technischen Hürden**: Die Entwicklung formaler Grammatiken erfordert Spezialwissen, und die existierenden Werkzeuge sind für die iterative und oft explorative Arbeitsweise in den Geisteswissenschaften ungeeignet. Insbesondere der Mangel an interaktivem, visuellem Feedback im Entwicklungs- und Debugging-Prozess steht der explorativen Arbeitsweise in den Geisteswissenschaften entgegen.

Um diese Lücke zu schließen, wurde die Entwicklungsumgebung "Paredros" (Zwilling, 2022) konzipiert. Sie senkt die Einstiegshürden für grammatikbasierte Verfahren, indem sie einen leistungsfähigen Parser-Generator mit einem interaktiven, visuellen Frontend kombiniert, das speziell für geisteswissenschaftliche Forschungsfragen entwickelt wurde.