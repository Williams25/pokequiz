import styled, { keyframes } from 'styled-components'

const animationAlternativeError = keyframes`
	0% {
		transform:  rotate(-5deg) translate(5px, -5px);
	}
	100% {
		transform:  rotate(5deg) translate(-5px, 5px);
	}
`

const animationAlternative = keyframes`
	0% {
		transform:  scale(.9);
		background-image: linear-gradient(
			265deg,
			rgba(255, 255, 255, 0.5),
			${({ theme }) => theme.colors.mainBg}
		);
	}
	100% {
		transform:  scale(1.1);
		background-image: linear-gradient(
			265deg,
			rgba(255, 255, 255, 0.1),
			${({ theme }) => theme.colors.mainBg}
		);
	}
`

const AlternativesForm = styled.form`
	label {
		&[data-selected="true"] {
			background-color: ${({ theme }) => theme.colors.primary};

			&[data-status="SUCCESS"] {
				background-color: ${({ theme }) => theme.colors.success};
				animation: 350ms ${animationAlternative} infinite;
				animation-direction: alternate;
			}

			&[data-status="ERROR"] {
				background-color: ${({ theme }) => theme.colors.wrong};
				animation: 200ms ${animationAlternativeError} infinite;
				animation-direction: alternate;
			}
		}
		&:focus {
			opacity: 1;
		}
	}
	button {
		margin-top: 24px;
	}
`

export default AlternativesForm