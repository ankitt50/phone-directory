import Header from './Header';
import './App.css';
import React,{Component} from 'react';
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



class App extends Component{


  constructor() {
    super();
    this.state = {
      subscribers: [
      ]
    }
  }

  clickHandler(message) {
    alert(message);
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
        <button id="add-btn">Add</button>
        <div className="sub-heading">
          <span className="name-heading">Name</span>
          <span className="number-heading">Phone</span>
        </div>
  
  {
  this.state.subscribers.map(
    sub => {
      return <div key={sub.id} className="sub-heading">
      <span className="name-heading">{sub.name}</span>
      <span className="number-heading">{sub.phone}</span>
      <button className="delete-btn" onClick={this.clickHandler.bind(this,"Delete Clicked")}>Delete</button>
    </div>;
    }
    )
  }
   </div>
    );
  }
}

export default App;

