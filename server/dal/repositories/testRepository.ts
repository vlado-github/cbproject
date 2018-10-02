import models from '../models';    
export class TestRepository { 
    
    save (obj) {
        models.sequelize.sync()
            .then(() => models.Route.create(obj,{
                include: [{
                  association: models.Route.Gym,
                }]
              }))
            .then(jane => {
                console.log(jane.toJSON());
            })
    }

}