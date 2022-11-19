import styled from 'styled-components'

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	font-size: 15px;
	font-family: 'Open Sans Condensed';
	color: #fff;
	background-color:black ;
	padding: 10px 30px;
	border: 2px solid ;
	box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
	border-radius: 50px;
	transition: 1000ms;
	transform: translateY(0);
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;

	&:hover {
		transition: 1000ms;
		padding: 10px 50px;
		transform: translateY(-0px);
		background-color:rgb(173, 229, 245);
		color: #000305;
		border: solid 2px #1a1a1b;
	}
`

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
    color:#0a0b0b;
	}
`

export const InvertedButton = styled(BaseButton)`
	background-color: rgb(215, 234, 239);
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`
