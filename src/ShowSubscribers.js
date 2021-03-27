import Header from './Header';
import './ShowSubscribers.css';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// function App() {
//   var subscribers = [
//     {
//       id: 1,
//       name: "Shilpa",
//       phone: "9999999999"
//     },
//     {
//       id: 2,
//       name: "Srishti",
//       phone: "8888888888"
//     }
//   ];
//   return (
//     <div>
//       <Header heading="Phone Directory"/>
//       <button id="add-btn">Add</button>
//       <div className="sub-heading">
//         <span className="name-heading">Name</span>
//         <span className="number-heading">Phone</span>
//       </div>

// {
// subscribers.map(
//   function (sub) {
//     return <div key={sub.id} className="sub-heading">
//     <span className="name-heading">{sub.name}</span>
//     <span className="number-heading">{sub.phone}</span>
//     <button className="delete-btn" onClick={this.clickHandler.bind(this,"Delete Clicked")}>Delete</button>
//   </div>;
//   }
//   )
// }
      
//     </div>
//   );
// }



class ShowSubscribers extends Component{


  // constructor() {
  //   super();
  //   this.state = {
  //     subscribers: [
  //     ]
  //   }
  // }

  clickHandler(toDeleteSubscriberId) {
    // alert(message);
    this.props.deleteSubscriber(toDeleteSubscriberId);
    console.log('to be deleted id: '+toDeleteSubscriberId);
  }

  render() {

    // var subscribers = [
    //   {
    //     id: 1,
    //     name: "Shilpa",
    //     phone: "9999999999"
    //   },
    //   {
    //     id: 2,
    //     name: "Srishti",
    //     phone: "8888888888"
    //   }
    // ];

    return (
      <div>
        <Header heading="Phone Directory"/>
        <Link to="/add"><button id="add-btn">Add</button></Link>
        <div className="sub-heading">
          <span className="name-heading">Name</span>
          <span className="number-heading">Phone</span>
        </div>
  
  {
  this.props.subscribers.map(
    sub => {
      return <div key={sub.id} className="sub-heading">
      <span className="name-heading">{sub.name}</span>
      <span className="number-heading">{sub.phone}</span>
      <button className="delete-btn" onClick={this.clickHandler.bind(this,sub.id)}>Delete</button>
    </div>;
    }
    )
  }
   </div>
    );
  }
}

export default ShowSubscribers;

