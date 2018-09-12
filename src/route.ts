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
}