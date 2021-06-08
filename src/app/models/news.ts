import { Photo } from "./photo";
export class News {
    id:number;
    title:string;
    description:string;
    userId:number;
    categoryId:number;
    photos:Photo[];
}