import RyogaeTenbin from '../assets/image/ryougaeSticker.png';
import Kensyakuki from '../assets/image/kensyakukiSticker.png';
import Hakarun from '../assets/image/hakarun9.png';

const WoodenDesk = () => {
  return (
    <div className='wooden-desk'>
      <img
        src={RyogaeTenbin}
        alt='両替天びんのステッカー'
        style={{
          position: 'absolute',
          top: '-15%',
          left: '0px',
          transform: 'rotate(-30deg)',
          width: '30%',
        }}
      />
      <img
        src={Kensyakuki}
        alt='検尺機のステッカー'
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '0px',
          transform: 'rotate(30deg)',
          width: '30%',
        }}
      />
      <img
        src={Hakarun}
        alt='はかるんのステッカー'
        style={{
          position: 'absolute',
          top: '35%',
          left: '-10%',
          transform: 'rotate(30deg)',
          width: '30%',
        }}
      />
    </div>
  );
};

export default WoodenDesk;
