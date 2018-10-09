import {Table, Column, Model, ForeignKey, DataType, BelongsTo} from 'sequelize-typescript';
import Gym from './gym'
 
@Table
export default class Route extends Model<Route> {

  constructor(values?: any, options?: any) {
    super(values, options);
}

  @Column(DataType.STRING)
  name: string;
 
  @Column(DataType.STRING)
  grade: string;
  
  @Column(DataType.STRING)
  description: string;

  @Column(DataType.TEXT("long"))
  photo: Text;

  @ForeignKey(() => Gym)
  @Column
  gymId: number;

  @BelongsTo(() => Gym)
    location: Gym;
}