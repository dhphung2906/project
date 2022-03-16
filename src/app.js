// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';
import { useState } from 'react';


function App() {

  // const[Name, setName] = useState({id: 1,
  // name: 'Leanne Graham'
  // })

  // const handleUpdate = () => {
  // setName({"id": 2,
  // name: 'Ervin Howell',
  // })

    
  // }
  return (
    <div className="App">
      <PersonAdd/>
      <PersonList/>
      <PersonRemove/>
      {/* <li>{JSON.stringify(Name)}</li>
      <button onClick={handleUpdate}>Update</button> */}
    </div>
  )

  // 
  
  // const data = [
  //   {
  //     id: "1",
  //     name: "Jane",
  //     lastName: "Doe",
  //     age: "25"
  //   },
  //   {
  //     id: "2",
  //     name: "James",
  //     lastName: "Doe",
  //     age: "40"
  //   },
  //   {
  //     id: "3",
  //     name: "Alexa",
  //     lastName: "Doe",
  //     age: "27"
  //   },
  //   {
  //     id: "4",
  //     name: "Jane",
  //     lastName: "Brown",
  //     age: "40"
  //   }
  // ];

  // const [peopleInfo, setPeopleInfo] = useState([
  //   {
  //     id: "",
  //     first: "",
  //     last: "",
  //     age: ""
  //   }
  // ]);

  // console.log(peopleInfo);
  // return (
  //   <div className="App">
  //     <table>
  //       <tr>
  //         {data.map((item) => {
  //           return (
  //             <div
  //               key={item.id}
  //               style={{
  //                 display: "flex",
  //                 width: "150px"
  //               }}
  //             >
  //               <input
  //                 onChange={() => {
  //                   setPeopleInfo({
  //                     id: item.id,
  //                     first: item.first,
  //                     last: item.last,
  //                     age: item.age
  //                   });
  //                 }}
  //                 value={peopleInfo}
  //                 style={{ margin: "20px" }}
  //                 type="checkbox"
  //               />
  //               <td style={{ margin: "20px" }}>{item.name}</td>
  //               <td style={{ margin: "20px" }}>{item.lastName}</td>
  //               <td style={{ margin: "20px" }}>{item.age}</td>
  //             </div>
  //           );
  //         })}
  //       </tr>
  //     </table>
  //   </div>
  // );


}



export default App;
