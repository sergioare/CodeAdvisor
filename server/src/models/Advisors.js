
class Advisors {
    constructor(
        id, Nickname, Firstname, Lastname, Contact, Img, Residence, Language, Price, Score, About, Specialty, TechSkills
        ) {
            this.id         = id,
            this.Nickname   = Nickname,
            this.Firstname  = Firstname,
            this.Lastname   = Lastname,
            this.Contact    = Contact,
            this.Img        = Img,
            this.Residence  = Residence,
            this.Language   = Language,
            this.Price      = Price,
            this.Score      = Score,
            this.About      = About,
            this.Specialty  = Specialty,
            this.TechSkills = TechSkills
    }
}

module.exports = Advisors;
