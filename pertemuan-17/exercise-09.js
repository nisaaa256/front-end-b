//1. Promise
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!")
        }, 2000)
    })
}

async function messages() {
    const msg = await helloWorld()
    console.log(msg)
}

messages()

//2. Fetch
  function ambilDataUser() {
      fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) => users.data.forEach(user => {console.log(user.email)}))
  }

//ambilDataUser()

//3. Async Await
  async function ambilDataUser() {
      try {
          const response = await fetch("https://reqres.in/api/users")
          const users = await response.json()
          users.data.forEach(user => {console.log(user.email)
          });
      }
      catch(error) {
          console.log(error)
      }
  }

//  ambilDataUser()

//4. Axios
async function ambilDataUser() {
     try {
         const response = await axios.get("https://reqres.in/api/users")
         response.data.data.forEach(user => {console.log(user.email)
         });
     }
     catch(error) {
         console.log(error)
     }
 }
    
ambilDataUser()