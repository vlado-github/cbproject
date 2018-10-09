export class ClimbingRoute {
    name: string;
    grade: string;
    description: string;
    photo: Blob;
    gymId: number;
    gym: {
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
        this.gymId = null;
        this.gym = {name: "", city: "",country: "", photo: null}
    }
}