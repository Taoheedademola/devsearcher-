
function Search(props) {
    return(
        <div style={{backgroundColor: props.gb ? "#1E2A47" : "#fff"}} className="search" >
            
            <img src="https://gh-user-sa.qudusayo.me/static/media/icon-search.0cc0c98424cc75d5e1dfbb9e3abb6785.svg" alt="" className="searchimg" />
            <input style={{backgroundColor: props.gb ? "#1E2A47" : "#fff", color: props.gb ? "#fff" : "#1E2A47"}} type="text" onChange={props.onchange} value={props.value} className="searchinput" placeholder="search GitHub username..." />
            <button onClick={props.onclick} className="searchbtn">Search</button>
        </div>
    )
}

export default Search 