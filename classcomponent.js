// import { Component } from "react";

// class main extends Component{
   
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//            <div>
//             <h1>Hii everyone{this.props.age}</h1>
//            </div>
//         )
//     }
// }
// class kumar extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//              <main age="21"/>
//             </div>
//         )
//     }
// }

// export default kumar;

import { Component } from "react";

class app extends Component{
    constructor(props){

    }
    render(){
        return(
            <div>
                <h1>Hai{this.props}</h1>
            </div>
        )
    }
}
class main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <app/>
        )
    }
}

export default main;