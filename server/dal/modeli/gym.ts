import {Table, Column, Model, HasMany, DataType} from 'sequelize-typescript';
import { DataTypes } from 'sequelize'
import Route  from '../modeli/route';
import Base  from '../modeli/base';
 
@Table
export default class Gym extends Base {
 
  constructor(values?: any, options?: any) {
    super(values, options);
}


  @Column(DataType.STRING)
  name: string;
 
  @Column(DataType.STRING)
  city: string;
  
  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING)
  photo: string;

  @HasMany(() => Route)
  routes: Route[];
  
}
