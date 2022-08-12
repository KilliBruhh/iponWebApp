export class belts 
{
    id: null;
    Belt: string;
    image: string;
    kata: string;
    achieved: boolean;
    constructor(id:null, Belt:string, image:string, kata:string, achieved:boolean)
    {
        this.id = id;
        this.Belt = Belt;
        this.image = image;
        this.kata = kata;
        this.achieved = achieved;
    }
}