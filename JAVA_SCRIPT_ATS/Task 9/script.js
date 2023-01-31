/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    if (this.budget > 100000000) {
      return `True true, "${this.title}" was very expensive, it cost $${this.budget}`;
    } else {
      return `Expensive?! FALSE ! "${this.title}" was cheap to make, it cost only $${this.budget}}`;
    }
  }
}
const ironMan = new Movie("Iron Man", "Mr. Someone", 186000000);
const menInBlack = new Movie("Men in Black", "Mr. Somesomeallso", 90000000);
console.log(ironMan.wasExpensive());
console.log(menInBlack.wasExpensive());
