import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'typescript';

  theString = "das ist ein String";
  theNumber = 1234567890;
  theBoolean = true;

  theUndefined = undefined;
  theNull = null;

  theTypeless: undefined | string;

  theArray: (number | string)[] = [1, 2];

  noteType: "200" | "404" = "404";

  theArrays: [string, 200 | 404] = ["200", 404];

  person: {
    readonly name: string | number; // readonly = nur lesbar, nicht änderbar
    age: number;
    position?: string; // ? = nicht unbedingt notwendig
  } = {
      name: "Nadja",
      age: 27,
      // position: "boss",
    }

  constructor() {
    this.theTypeless = "Jetzt hat die Variable einen Wert";

    this.theArray = [1, "4"];

    this.add(1, 2);

    this.noteType = "200";

    this.theArrays = ["402", 404];

    this.person.name = 12;
  }

  add(a: number, b: number): number {
    return a + b;
  }
}
