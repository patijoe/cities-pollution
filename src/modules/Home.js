import React from "react";
import styled from "styled-components";

export default function Home(props) {
    const {citiesList} = props;
    console.log('------->>>>>>', citiesList);

    return( 
        <HomeSection>
        {citiesList &&
            citiesList.map((city) => {
                return (
                    <div key={city.id}>
                    <p>{city.id}</p>
                    <p>{city.name}</p>
                    <p>{city.level}</p>
                    </div>
                );
            })}
        </HomeSection>
    );
}

const HomeSection = styled.div`
  text-align: center;
  color: red;
`;
