import Header from './Header';
import './App.css';
function App() {
  var subscribers = [
    {
      id: 1,
      name: "Shilpa",
      phone: "9999999999"
    },
    {
      id: 2,
      name: "Srishti",
      phone: "8888888888"
    }
  ];
  return (
    <div>
      <Header heading="Phone Directory"/>
      <button id="add-btn">Add</button>
      <div className="sub-heading">
        <span className="name-heading">Name</span>
        <span className="number-heading">Phone</span>
      </div>

{
subscribers.map(
  function (sub) {
    return <div key={sub.id} className="sub-heading">
    <span className="name-heading">{sub.name}</span>
    <span className="number-heading">{sub.phone}</span>
  </div>;
  }
  )
}
      
    </div>
  );
}

export default App;

