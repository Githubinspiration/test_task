// import { useContext } from "react";
// // import Context from "src/contexts/context";
// import Context from "../contexts";

// const Routes = () => {
// //   const newname = useContext(TaskContexts);
//   const user = useContext(Context);

//   return (
//     <>
//         <div>{ `user ${user}`}</div>
//         <h1> Hello  </h1>
//     </>
//   );
// };
// export default Routes;



import { useRoutes } from "react-router-dom";
import PublicRoutes from './public';

const Routes =() => useRoutes([PublicRoutes]);
export default Routes;
