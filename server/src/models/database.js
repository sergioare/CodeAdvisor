
class Data {
    constructor(id, name, data, image ) {
        this.id = id;
        this.data = data;
        this.name = name;
        this.image = image;
    }
}
class Autor{
    constructor( id, name, img, ocupation, about, linkedin, gitHub, email, phone ){
        this.id         = id
        this.name       = name;
        this.img        = img;
        this.ocupation  = ocupation;
        this.about      = about;
        this.linkedin   = linkedin;
        this.gitHub     = gitHub;
        this.email      = email;
        this.phone      = phone;
    }
}

class Reviewrs{
    constructor( id, name, img, testimonial, ranking ){
        this.id         = id
        this.name       = name;
        this.img        = img;
        this.testimonial  = testimonial;
        this.ranking        = ranking;
    }
}
module.exports = {
    Data,
    Autor,
    Reviewrs
};
