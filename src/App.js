import React, { useRef, useState, useCallback } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Image from './components/Image/Image';
import loadingImg from './components/Image/loading.gif';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { createClient } from 'pexels';
/* ------------- PEXELS API CONFIG ------------------ */

const PEXELS_API_KEY = '563492ad6f91700001000001613c9cd81c434f058d0faa4ad2c2e616';

const client = createClient(PEXELS_API_KEY);



/* ------------- APP ------------------ */


function App() {
/* ------------- HOOKS ------------------ */
  const [inputField, setInputField] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [route, setRoute] = useState("home")
  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState({});
  const input = useRef();


/* ------------- PARTICLES JS CONFIG ------------------ */
  const particlesOptions = {
    particles: {
        links: {
            distance: 150,
            enable: true,
        },
        move: {
            enable: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 50,
        },
    },
  };
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      // await console.log(container);
  }, []);

/* ------------- FUNCTIONS ------------------ */
  const ChangeInput = (event) => {
    setInputField(event.target.value);
  }
  const requestImage = async (query, page) => {
    setImageUrl(loadingImg);
    const resp = await client.photos.search({ query, page: page, per_page: 1 });
    if ( resp.photos.length ) {
      setImageUrl(resp.photos[0].src.large2x);
      return true;
    }
    setImageUrl("None");
    return false
  }
  const SubmitButton = () => {
    if ( inputField !== '' ) {
      input.current.blur();
      input.current.value = "";
      if ( requestImage(inputField, 1) ) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: user.id
          })
        }).then(resp => resp.json())
        .then(entry => {
          setUser(Object.assign(user, {entries: entry}));
        });
      }
    }
  }
  const changeRoute = (loc) => {
    if ( loc === 'home' ) {
      setIsSigned(true);
    }
    else {
      setIsSigned(false);
    }
    setRoute(loc);
  }

  const loadUser = data => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    
    });
    setIsSigned(true);
  }
/* ------------- RENDERING ------------------ */
  return (
    <div className="App">
      <Particles
          className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
      />
      <Navigation changeRoute={changeRoute} isSigned={isSigned} route={route}/>
      {
      route === 'home' && isSigned
      ?<div>
        <div className="container">
          <Logo />
          <div>
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm ChangeInput={ChangeInput} SubmitButton={SubmitButton} input={input}/>
          </div>
        </div>
        <Image imageUrl = {imageUrl}/>
      </div>
      :route==='register'?<Register changeRoute={changeRoute} loadUser={loadUser}/>:<SignIn changeRoute={changeRoute } loadUser={loadUser}/>
    }
    </div>
  );
}

export default App;
