export class Route {
    name: string;
    grade: string;
    description: string;
    photo: Blob;
    gym: {
        id: number;
        name: string;
        city: string;
        country: string;
        photo: Blob;
    };
    constructor() {
        this.name = "";
        this.grade = "";
        this.description = "";
        this.photo = null;
        this.gym = {id: null, name: "", city: "",country: "", photo: null}
    }
}