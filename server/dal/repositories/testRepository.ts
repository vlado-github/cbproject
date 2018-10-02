import models from '../models';
export class TestRepository {

    save(formObj) {
        models.sequelize.sync()
            .then(() => {
                //saving new Route with a new Gym
                if (formObj.gymId == "null") {
                    models.Route.create(formObj, { include: [models.Gym] });
                //saving new Route with existing Gym
                } else {
                    delete formObj.gym;
                    models.Route.create(formObj, { include: [models.Gym] });
                }
            }
            )
    }
}