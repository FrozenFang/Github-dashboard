import './Header.scss';

function Header({data}) {
  if(data.length < 1){
    return(<p>loading..</p>);
  }
  return (
    <header className="header">
        <img src={data.avatar_url} alt=""/>
        <span className="header-member-name">{data.name}</span>
        <span className="header-member-date"><div>Member since </div>{data.created_at.substring(0, 10)}</span>
        <ul className="header-member-data">
          <li><div>Login</div>{data.login}</li>
          <li><div>Location</div>{data.location}</li>
          <li><div>e-mail</div>{data.email}</li>
          <li><div>Public repos</div>{data.public_repos}</li>
          <li><div>Github homepage</div><a href={data.html_url}>{data.login}</a></li>
        </ul>
    </header>
  );
}

export default Header;
