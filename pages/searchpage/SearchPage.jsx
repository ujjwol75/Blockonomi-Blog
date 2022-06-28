// import React from 'react'
// import { Button, Overlay } from 'react-bootstrap'

// const SearchPage = () => {
//   return (
//     <div className='mainsearch'>
//         <div>
//         <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
//         Click me to see
//       </Button>
//       <Overlay target={target.current} show={show} placement="right">
//         {({ placement, arrowProps, show: _show, popper, ...props }) => (
//           <div
//             {...props}
//             style={{
              
//               backgroundColor: 'rgba(255, 100, 100, 0.85)',
             
//               color: 'green',
//               borderRadius: 3,
//               height:'100%',
//               width:'100%',
//               ...props.style,
//             }}
//           >
//             Simple tooltip
//           </div>
//         )}
//       </Overlay>
//         </div>
//         <input type="text" placeholder='Search...' />
//     </div>
//   )
// }

// export default SearchPage