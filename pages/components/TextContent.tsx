import React from 'react';
import styled from 'styled-components';

interface Props {
  children: any;
}

const StyledTextContent = styled.div`
  line-height: 1.5rem;
`;

function TextContent({ children }: Props) {
  return <StyledTextContent>{children}</StyledTextContent>;
}

export default TextContent;
