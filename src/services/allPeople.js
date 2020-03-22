const PEOPLESERVER = "https://us-central1-react-mspm.cloudfunctions.net/api/people"


 export  function allGetFunction ()
{
    return fetch(PEOPLESERVER)
    .then(resp=>{
        console.error("Server status:",resp.status)
        return resp.json();
    })
}

