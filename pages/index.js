import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const HelloDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: lightblue;
`;

export default function Home() {
  return <HelloDiv>hello world Test</HelloDiv>;
}
