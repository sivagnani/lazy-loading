import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import { IHelloWorldState } from './IHelloWorldState';
import { getItems } from '../services/service';
import InfiniteScroll from 'react-infinite-scroll-component';
import { listItems } from '../model/model';
export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
  constructor(props:IHelloWorldProps){
    super(props)
    this.state={
      items:[],
      hasMore:true,
      size:30
    }
  }
  componentDidMount(): void {
    getItems(0,this.state.size).then((listItems)=>{
      this.setState({
      items:listItems
    })
    console.log("hi");
  })
  }
  retrieveItems(){
    getItems(this.state.items.length/this.state.size,this.state.size).then((itemsRetrived:listItems[])=>{
      this.setState({
        items:[...this.state.items, ...itemsRetrived],
        hasMore:this.state.items.length>=100?false:true
      })
    })

  }
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
        <InfiniteScroll
          dataLength={1000}
          next={()=>console.log("hello")}
          hasMore={true} 
          loader={<h4>Loading...</h4>}    >
      {this.state.items.map((item, index) => (
        <div key={index}>{item.Title}</div>
      ))}
    </InfiniteScroll>
      </div>
      );
  }
}