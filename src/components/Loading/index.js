import Lottie from 'react-lottie'
import preloader from './preloader.json'

const Loading = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: preloader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Lottie
      options={defaultOptions}
      height={'100%'}
      width={200}
    />
  )
}

export default Loading