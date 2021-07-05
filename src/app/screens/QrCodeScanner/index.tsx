import React, { useState, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import CustomButton from '@components/CustomButton';

import styles from './styles';

const {
  Constants: {
    FlashMode: { off: torchOff, torch: torchOn },
    BarCodeType: { qr }
  }
} = RNCamera;

function QrCodeScanner() {
  const [torch, setTorch] = useState(torchOff);
  const [QR, setQR] = useState('');
  const camRef = useRef<any>(null);

  const handleOnBarCodeRead = (scannerInfo: { data: string }) => {
    if (!QR) setQR(scannerInfo.data);
  };

  const handleToggleTorch = () => setTorch(torch === torchOff ? torchOn : torchOff);

  return (
    <RNCamera
      ref={camRef}
      style={styles.preview}
      flashMode={torch}
      captureAudio={false}
      barCodeTypes={[qr]}
      onBarCodeRead={handleOnBarCodeRead}>
      <CustomButton
        // TODO: Agregar estilos e icono
        // iconStyle={[styles.flashLightIcon, torch === torchOff && styles.flashLightIconOff]}
        // innerStyle={[styles.torchOn, torch === torchOff && styles.torchOff]}
        // icon={icLamp}
        onPress={handleToggleTorch}
      />
    </RNCamera>
  );
}

export default QrCodeScanner;
