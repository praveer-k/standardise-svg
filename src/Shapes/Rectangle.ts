import { Shape } from './Shape';

export class Rectangle implements Shape{
    name: string;
    constructor(){
        this.name = 'rectangle';
    }
    public convertToPath(obj: any): any{
        return this;
    }
    public getBox(): any{
        return this;
    }
}