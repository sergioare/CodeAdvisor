
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

class CommunityComments{
    constructor( id, name, img, testimonial, ranking ){
        this.id         = id
        this.name       = name;
        this.img        = img;
        this.testimonial  = testimonial;
        this.ranking        = ranking;
    }
}

class TechSkills{
    constructor(id, Name, Image, Description ){
        this.id             = id
        this.Name           = Name
        this.Image          = Image;
        this.Description    = Description   ;
    }
}

class Specialty{
    constructor(id, Description){
        this.id = id
        this.Description = Description
    }
}

module.exports = {
    Data,
    Autor,
    CommunityComments,
    TechSkills,
    Specialty
};
