import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import React from 'react';


const NaverMapAPI=()=> {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
       <img classname = "MainBanner" src='img/MainBanner.png'></img>

  <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '80%',
        height: '600px',
        alignItems: 'center',
        justifyContent: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 'medium',
        borderColor: '#D8D8D8'
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율 
      />
    </div>
  );
}

const Home=()=> {
  return (
    <div>
    <RenderAfterNavermapsLoaded
      ncpClientId={'optd2y01e0'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
    </div>
  );
}
  


export default Home;