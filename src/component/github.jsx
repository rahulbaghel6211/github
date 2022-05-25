import { Githubcard } from './githubcard';
import { githubuser } from './githubdata';

const{useState,useEffect}=require('react')
function Github(){
    const [loading,setLoading]=useState(false);
    const [error,seterror]=useState(false);
    const[query,setQuery]=useState("masai");
    const [data,setdata]=useState([]);
    const[page,setPage]=useState(1);
    useEffect(()=>{

        githubuser(query,page)
        .then(res=>{
            setLoading(false);
            setdata(res.data);
    
        })
        .catch(err=>{
            setLoading(false);
            seterror(true)
            console.log(err)
        })
    },[query,page])
    const handleClick=(query)=>setQuery(query)
    // const handlePageChange=page=>setPage(page)
    console.log(data);
    console.log(query);
    return(
        <div>
            <h2>Github user</h2>
            {loading &&<div>...loading</div>}
            {error &&<div>...error</div>}
           <SearchBox handleClick={handleClick}/>
            {/* <button onClick={()=>setloading(!loading)}>TOGGLE</button> */}
            {data?.items?.map((item)=>(
            <Githubcard key={item.id}{...item}/>
            ))}
            <div>
                <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
                <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
        </div>
    )
}
const SearchBox=({handleClick})=>{
    const[text,setText]=useState("");
    return(
        <div>
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button onClick={()=>handleClick(text)}>SEARCH</button>
        </div>
    )
}
export { Github };
