import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  const [imageDefaultBackground, setImageDefaultBackground] = useState(
    "https://lh4.googleusercontent.com/proxy/GcVBBS6O_wbvkYe3ehEZ0BcKhH3ddT_b5-fAd8A61bM-pM6u5LOuGNHS6q5Mc67XrMxi52gmkk11w6MpbChpxoAhjVm2CWkQ92EnGQ=w3840-h2160-p-k-no-nd-mv"
  );

  const [backgroundImage, setBackgroundImage] = useState(
    imageDefaultBackground
  );
  const [defaultBackground, setDefaultBackground] = useState(false);

  useEffect(() => {
    if (defaultBackground) {
      setBackgroundImage(imageDefaultBackground);
      setDefaultBackground(false);
    }
  }, [defaultBackground, imageDefaultBackground]);
  return (
    <div
      className="container-all"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Content />
      <Footer
        backgroundImage={backgroundImage}
        setBackgroundImage={setBackgroundImage}
        setDefaultBackground={setDefaultBackground}
        setImageDefaultBackground={setImageDefaultBackground}
      />
    </div>
  )
}