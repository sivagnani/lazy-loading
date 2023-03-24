import { listItems } from "../model/model";

export interface IHelloWorldState {
    items: listItems[];
    hasMore: boolean;
    size: number;
}
  