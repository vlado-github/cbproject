import {Table, Column, Model, HasMany, DataType, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';
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

  @CreatedAt
  creationDate: Date;
 
  @UpdatedAt
  updatedOn: Date;
  
  @DeletedAt
  deletionDate: Date;

  @HasMany(() => Route)
  routes: Route[];
  
}
