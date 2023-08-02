

function Body(props) {
    const { avatar_url, login, name, location, followers, bio, following, public_repos, twitter_username, company, blog, created_at } = props.user;
    const data = new Date(created_at);
    const dateformat = data.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <div style={{ backgroundColor: props.gb ? "#1E2A47" : "#fff", color: props.gb ? "#fff" : "#1E2A47" }} className="bo">
            <div className="body">
            <div>
                <img className="bodyimg" src={
                    avatar_url} alt="" />
            </div>
            <div className="body-1" >
                <div >
                    <div className="bdyoct">
                        <div className="olo">
                        <span className="octh1">{name}</span><br/>
                        <span className="octspn2">@{login}</span>
                        </div>
                        <span className="octspan1">{dateformat}</span>
                    </div>
                </div>
            </div>
            </div>
            <div className="newboi"> 
                <span className="octspan3">{bio}</span>

                <div className="rep" style={{ backgroundColor: props.gb ? "#1E2A47" : "#fff", color: props.gb ? "#fff" : "#1E2A47" }}>
                    <div className="nwrep"style={{ backgroundColor: props.gb ? "#1E2A47" : "#f6f8FF", color: props.gb ? "#fff" : "#1E2A47" }}>
                    <div className="repobody">
                        <span className="repo">Repos</span>
                        <span className="repnumber">{public_repos}</span>
                    </div>
                    <div className="repobody">
                        <span className="repo">Followers</span>
                        <span className="repnumber">{followers}</span>
                    </div>
                    <div className="repobody">
                        <span className="repo">Following</span>
                        <span className="repnumber">{following}</span>
                    </div>
                    </div>
                </div>
                <div className="social" >
                    <div className="socialall">
                        <img src="https://gh-user-sa.qudusayo.me/static/media/icon-location.f11c5487a9922cbad40a27e8cc1cfaee.svg" alt="" className="socialimg" />
                        < span className="socialtxt">{location}</span>
                    </div>
                    <div className="socialall">
                        <img src="https://gh-user-sa.qudusayo.me/static/media/icon-twitter.f6a2a695fbb260b28a9fd67dd4179ea5.svg" alt="" className="socialimg" />
                        < span className="socialtxt">{twitter_username}</span>
                    </div>
                    <div className="socialall">
                        <img src="https://gh-user-sa.qudusayo.me/static/media/icon-website.b7923f6c1dae9717c079c60d8a5c82e5.svg" alt="" className="socialimg" />
                        < span className="socialtxt">{blog}</span>
                    </div>
                    <div className="socialall">
                        <img src="https://gh-user-sa.qudusayo.me/static/media/icon-company.6f78ffb334b191c8ed54d0c2a6f7cc25.svg" alt="" className="socialimg" />
                        < span className="socialtxt">{company}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body