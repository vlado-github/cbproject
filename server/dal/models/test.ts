import Sequelize from 'sequelize';
import { sequelize } from '../dbcontext'

const Product = sequelize.define('product', {
    title: Sequelize.STRING
});
const User = sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING
});
const Address = sequelize.define('address', {
    type: Sequelize.STRING,
    line_1: Sequelize.STRING,
    line_2: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zip: Sequelize.STRING,
});

Product.User = Product.belongsTo(User);
User.Addresses = User.hasMany(Address);
// Also works for `hasOne`

export let proba = function () {
    sequelize.sync()
    .then(() => {
        Product.create({
            title: 'Chair',
            user: {
                first_name: 'Mick',
                last_name: 'Broadstone',
                addresses: [{
                    type: 'home',
                    line_1: '100 Main St.',
                    city: 'Austin',
                    state: 'TX',
                    zip: '78704'
                }]
            }
        }, {
                include: [{
                    association: Product.User,
                    include: [User.Addresses]
                }]
            });
        Product.create({
            title: 'Igor',
            userId: 2
        })
    }
    )
}

// user: User.findAll({
//     where: {
//       id: 2
//     }
//   })