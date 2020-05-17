import React, { useState, useEffect } from 'react';
import styled from "styled-components";

function Search() {

  return (
    <div>
      <Title>LoL Search</Title>
      <InputStyle>
        <Input></Input>
      </InputStyle>

      <TierPicture></TierPicture>
    </div>
  )


}

const Title = styled.div`
  font-size : 30px;
  font-weight: bolder;
  color:rgb(110, 105, 105);
  text-align: center;
`;

const Input = () => {
  return (
    <input type="text" placeholder="소환사 이름" />
    // ,<div>검색</div>
  )
}

const InputStyle = styled.div`
  text-align: center;
`;

const TierPicture = () => {
  return (
    <img src="https://w.namu.la/s/898f819011a834679616105fac44b4b86fa9253620d53695d789b60391515cddd42023f1f6df4391481c0eab7dc4024ea54c7dcd8a4e5d3c9134b81c2e0a6f7d406ac01ed546e9fe236dc6ef040a8cdfef6c566018b0010ce0839583334d0d87"
      alt="챌린저" width="100" height="100" align="center" border="0" />
  )
}

export default Search;
