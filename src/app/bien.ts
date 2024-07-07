export class Bien {
    id! : number;
    nom! : string;
    adresse! : string;
    code_postal! : string;
    ville! : string;
    description! : string;
    texte_tarif! : string;
    vignette! : string;
    nb_personne! : number;
    images! : Image[];
    equipements! : Equipement[];
}
export class Image {
    id! : number;
    data_image! : string;
    maison_id! : number;
}

export class Equipement {
    id! : number;
    nom! : string;
    icone! : string;
}