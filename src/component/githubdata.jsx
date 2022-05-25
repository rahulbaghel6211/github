import axios from 'axios';

const  githubuser=(q='rahulbaghel6211',page=1)=>{
   return(

    axios("https://api.github.com/search/users",{
        method:'get',
        params:{
            q,
            per_page:5,
            page
        }
    })
   )
}
export { githubuser };