import React, {Component} from 'react';

class TOC extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log('===>shouldComponentUpdate',
    newProps.data,
    this.props.data
    )
    if(this.props.data === newProps.data){
      return false;
    }
    return true;

  }
  render(){
      console.log('====>TOC render')
        var lists = [];
        var data = this.props.data
        var i = 0;
        while(i< data.length){
            lists.push(
              <li key={data[i].id}>
                  <a
                   href={"/content/"+data[i].id}
                   data-id={data[i].id}

                   // 속성 이용하는방법
                  //  onClick={function(e){
                     
                  //    e.preventDefault();
                  //    this.props.onChangePage(e.target.dataset.id);
                  //  }.bind(this)}

                  // 속성을 이용하지 않는 방법

                   onClick={function(id, e){
                     
                    e.preventDefault();
                    this.props.onChangePage(id);
                  }.bind(this, data[i].id)}

                   >{data[i].title}
                  </a>
              </li>)
            i+=1
        }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }
  

  export default TOC;