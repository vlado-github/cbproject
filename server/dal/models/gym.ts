import {Table, Column, Model, HasMany, DataType} from 'sequelize-typescript';
import Route  from './route';
 
@Table
export default class Gym extends Model<Gym>{
 
  constructor(values?: any, options?: any) {
    super(values, options);
}

  @Column(DataType.STRING)
  name: string;
 
  @Column(DataType.STRING)
  city: string;
  
  @Column(DataType.STRING)
  country: string;

  @Column(DataType.TEXT("long"))
  photo: Text;

  @HasMany(() => Route)
  routes: Route[];
  
}
