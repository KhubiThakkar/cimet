
export async function generateToken() {
  try {
    const response = await fetch(`http://localhost:3000/generate-token`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
    const data = await response.json();
    // console.log("data: ", data.token);
    return data.token;

  } catch (e) {
    console.error('Token generation failed: ', e);
    throw new Error('Token generation failed!');
  }
}

// export const useFetch = () => {
//   const [tokenState, setTokenState] = useState();
//   const generateToken = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/generate-token`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//       });
//       const data = await response.json();
//       console.log("I am here!");
//       console.log("data: ", data);
//       setTokenState(data);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return {
//     generateToken,
//     tokenState,
//   };
// };
