import React from 'react';
import styled from '@emotion/styled';
import logo from '../../images/hrz-logo.png';


const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledLogo = styled.img({

})

export default function Logo() {
  return (
    <Wrapper>
      <StyledLogo
        src={logo}
        alt="Data ∩ Product"
        // This keeps the logo from flashing at full-width on fresh loads.
        style={{ maxWidth: '180px', shapeRendering: 'crispEdges' }}
      />
    </Wrapper>
  );
}