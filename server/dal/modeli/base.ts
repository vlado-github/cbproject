import {Table, Column, Model, HasMany, DataType} from 'sequelize-typescript';
import { DataTypes } from 'sequelize'
import Route  from './route';

@Table
export default abstract class Base extends Model<Base> {
  
  constructor(values?: any, options?: any) {
    super(values, options);
}

}
