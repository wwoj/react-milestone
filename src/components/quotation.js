import React, { Component } from "react";

export const quotationArray = [
  "Lepiej jest zapalić świecę, niż przeklinać ciemność.",
  "To smutne, że głupcy są tacy pewni siebie, a ludzie rozsądni tacy pełni wątpliwości.",
  "Rób, co możesz, w miejscu, jakim jesteś i z tym, co masz.",
  "Kiedyś – nie ma takiego dnia tygodnia.",
  "W życiu nie zawsze wygrywają najmądrzejsi, najpiękniejsi i najbardziej przebojowi. Wygrywają ci, którzy postanawiają wygrać.",
  "Nie należy lekceważyć drobnostek, bo od nich zależy doskonałość.",
  "Zdrowy rozsądek to rzecz, której każdy potrzebuje, mało kto posiada, a nikt nie wie, że mu brakuje.",
  "Przeciwności losu uczą mądrości, powodzenie ją odbiera.",
  "Prostota jest szczytem wyrafinowania.",
  "Ci, którzy nie pamiętają o przeszłości, są skazani na jej powtarzanie.",
  "Szczęście może przyjść przypadkowo, ale o rozum musimy postarać się sami.",
  "To, co zdobyliśmy z największym trudem, najbardziej kochamy.",
  "Mądrzy ludzie nie potrzebują rady, głupcy jej nie przyjmą."
];
export default class Quotation extends Component {
  render() {
    return (
      
        <h1 className="qoutation-class">{quotationArray[this.props.index]}</h1>
      
    );
  }
}
