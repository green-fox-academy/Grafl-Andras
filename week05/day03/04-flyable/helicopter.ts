import {Flyable} from './flyable';
import {Vehicle} from './vehicle';
'use strict';

export class Helicopter extends Vehicle implements Flyable{
    land(){};
    fly(){};
    takeOff(){};
}