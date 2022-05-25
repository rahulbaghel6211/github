
const Githubcard =({avatar_url ,login})=>{
    return(
        <div style={{display:"flex", gap:"1rem"}}>
            <img style={{width:"30px"}} src={avatar_url} alt="" />
        <div>{login}</div>

        </div>
    )
}
export { Githubcard };