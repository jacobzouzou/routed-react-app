import React, {useState, useEffect} from 'react';

const GithubUser = ({login}) => {
    const [data, setData]= useState(null);

    useEffect(()=>{
        fetch(`https://api.github.com/users/${login}`)
        .then(res=>res.json())
        .then(setData)// .then(resJson =>setData(resJson))
        .catch(console.error)
    },[login]);

    if(data){
        return (
            <div>
                <h1>{data.login}</h1>
                <img src={data.avatar_url} width={100}  alt=""/>
            </div>
        );
    }else{
        return null;
    }

};

export  function App() {
  return (
    <div className="App">
      <GithubUser login="moonhighway"/>
      <GithubUser login="eveporcello"/>
    </div>
  );
}

export default GithubUser