import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Baloo Chettan 2', cursive;
    padding: 20px 60px;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  button:focus {
    outline: none;
  }
`;