// import React, { Component } from 'react';

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0,
//             name: ''
//         }
//     }

//     handleAdd(){
//     this.setState({ count: count + 1})
// }

//     handleInput(value){
//      this.setState({name: e.target.value})
// }

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//                  <input onChange={(e) => this.handleInput(e.target.value)}/>
//             </div>
//         )
//     }
// }

// export default Hooks;

import React, {useState, useEffect} from 'react';
import NameDisplay from './NameDisplay';

const Hooks = props => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(() => {
        console.log('UseEffect simulated a componentDidMount')
    }, []);

    useEffect(()=> {
        console.log('component did update')
    }, [count, name])

    return (
        <>
            <NameDisplay name={name}/>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>{count}</div>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default Hooks;