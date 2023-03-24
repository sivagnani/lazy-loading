import { listItems } from "../model/model";
import {Web} from "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
let sp = Web("https://7zmht7.sharepoint.com/sites/SPFx");
export function getItems(page:number,size:number):Promise<listItems[]>{
        return sp.lists.getByTitle("items").items.select("Title").skip(page*size).top(size).get().then((items:listItems[])=>{
            console.log(items.length);
            return items
        });
    }

