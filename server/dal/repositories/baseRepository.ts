import { Read } from "./interfaces/readInterface";
import { Write } from "./interfaces/writeInterface";

export abstract class BaseRepository<T> implements Read<T>, Write<T>{
    private testName: string;
    constructor(testName: string) {
        this.testName = testName;
      }
    getAll(): Promise <T[]>{
        throw new Error("Method not implemented.");
    };
    getByID(id: number): Promise <T>{
        throw new Error("Method not implemented.");
    };
    save (obj: Object): Object{
        return obj;
    //     item.create(obj))
    //     .then(jane => {
    //       console.log(jane.toJSON());
    //     });
    //   } 
        
    //     item.create();
    }

//     let upisiTest = function (obj){
//         sequelize.sync()
//         .then(() => Route.create(obj))
//         .then(jane => {
//           console.log(jane.toJSON());
//         });
//       } 
}
