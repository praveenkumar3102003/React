function ParentComponent(props){
    return(
        <div>
            <h1>Hello Everyone</h1>
            <ChildComponent place="Krishnagiri" regno="727823TUAD114"></ChildComponent>
            <Department dept="AI&DS"/>
        </div>
    )
}
function ChildComponent(props){
return(
    <div>
        <h2>I'm Praveen Kumar K and I'm from {props.place}</h2>
        <p> My regno is {props.regno}</p>
    </div>
)
}
function Department(props){
    return(
        <div>
            <h3 class="h">{props.dept}</h3>
            <p class="a">UGo Travels established in the 2023 in the month of November.And the CEO of this travels is Praveen Kumar who is passionate about Travelling to new place and he likes to explore new places.</p>
        </div>
    )
}

export default ParentComponent