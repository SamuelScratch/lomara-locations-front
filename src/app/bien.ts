export class Bien {
    id! : number;
    nom! : string;
    adresse! : string;
    code_postal! : string;
    description! : string;
    vignette! : string;
    images! : Image[];
}
export class Image {
    id! : number;
    data_image! : string;
    maison_id! : number;
}