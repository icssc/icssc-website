import TestJSON from '../assets/data/test.json';


function Test(props) {
    const {title, desc} = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{desc}</h2>
        </div>
    )
}

export default function Tests(){
    return (
        <>
            {TestJSON.map(test => <Test {...test}/>)}
        </>
    )
}



// export default function Committees() {
//     return (
//       <>
//         <h1>Committees</h1>
//         <main role="main">
//           <section class="container u-content-space u-bg-arrow-wrapper">
//             <div class="text-center u-bg-arrow-bottom">
//               <p class="h5 mb-0">ICS Student Council has five committees to provide different ways for students to contribute to the community. </p>
//             </div>
//           </section>
//           {CommitteesJSON.map(committee => <Committee {...committee}/> )}
//         </main>
//       </>
//     )
// }