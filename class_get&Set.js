class person {
  constructor(firstanme, lastname) {
    this.firstanme = firstanme;
    this.lastname = lastname;
  }

  get fullname() {
    return `${this.firstanme} ${this.lastname}`;
  }
   set fullname(fullname){
    const [firstanme,lastname] = fullname.split(" ")
    this.firstanme = firstanme;
    this.lastname = lastname;
  }
}


const p1 = new person ("prince","singh")


console.log(p1.fullname=("rahul singh"));


