import { useState, useEffect } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

function Player({ url }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const showLoader = url && !isVideoLoaded;
  const playerSize = isVideoLoaded ? '100%' : 0;

  useEffect(() => {
    if (!url) {
      setIsVideoLoaded(false);
    }
  }, [url]);

  return (
    <>
      {showLoader && <h2>Відео завантажується...</h2>}
      {url && (
        <PlayerWrapper>
          <StyledPlayer
            url={url}
            width={playerSize}
            height={playerSize}
            onReady={() => setIsVideoLoaded(true)}
            controls
          />
        </PlayerWrapper>
      )}
    </>
  );
}

// class OldPlayer extends Component {
//   state = {
//     isVideoLoaded: false,
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.url !== this.props.url) {
//       // console.log('New url');
//       this.setState({ isVideoLoaded: false });
//     }
//   }

//   render() {
//     const { isVideoLoaded } = this.state;
//     const { url } = this.props;
//     const showLoader = url && !isVideoLoaded;
//     const playerSize = isVideoLoaded ? '100%' : 0;

//     return (
//       <>
//         {showLoader && <h2>Відео завантажується...</h2>}
//         {url && (
//           <PlayerWrapper>
//             <StyledPlayer
//               url={url}
//               width={playerSize}
//               height={playerSize}
//               onReady={() => this.setState({ isVideoLoaded: true })}
//               controls
//             />
//           </PlayerWrapper>
//         )}
//       </>
//     );
//   }
// }

export default Player;
