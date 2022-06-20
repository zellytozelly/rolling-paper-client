import React from "react";

interface ButtonProps{
  setShow: (show: boolean)=>void;
}

const ShareButton = ({setShow}:ButtonProps) => {
  const shareData = {
    title: "롤링 페이퍼",
    text: "롤링 페이퍼",
    url: `${window.URL}/rollingpaper`,
  };

  function copyToClipboard() {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = 'https://rolling-paper-client-blue.vercel.app/rollingpaper';
    t.select();
    document.execCommand('copy');
    setShow(true);
  }
  return (
    <div
      onClick={copyToClipboard}
      dangerouslySetInnerHTML={{
        __html: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#F05A39"/>
<path d="M39.363 32.8505V37.8668C39.363 39.1104 38.9451 40.1737 38.1095 41.0568C37.2738 41.9398 36.2675 42.3813 35.0907 42.3813H22.7484C21.5715 42.3813 20.5653 41.9398 19.7296 41.0568C18.8939 40.1737 18.4761 39.1104 18.4761 37.8668V24.8246C18.4761 23.581 18.8939 22.5177 19.7296 21.6346C20.5653 20.7515 21.5715 20.31 22.7484 20.31H33.1918C33.3303 20.31 33.444 20.357 33.533 20.4511C33.622 20.5451 33.6666 20.6653 33.6666 20.8116V21.8149C33.6666 21.9612 33.622 22.0813 33.533 22.1754C33.444 22.2695 33.3303 22.3165 33.1918 22.3165H22.7484C22.0957 22.3165 21.5369 22.5621 21.0721 23.0532C20.6073 23.5444 20.3749 24.1349 20.3749 24.8246V37.8668C20.3749 38.5565 20.6073 39.1469 21.0721 39.6381C21.5369 40.1293 22.0957 40.3749 22.7484 40.3749H35.0907C35.7434 40.3749 36.3021 40.1293 36.767 39.6381C37.2318 39.1469 37.4642 38.5565 37.4642 37.8668V32.8505C37.4642 32.7042 37.5087 32.584 37.5977 32.49C37.6867 32.3959 37.8004 32.3489 37.9389 32.3489H38.8883C39.0267 32.3489 39.1405 32.3959 39.2295 32.49C39.3185 32.584 39.363 32.7042 39.363 32.8505ZM45.0594 19.3068V27.3327C45.0594 27.6044 44.9655 27.8395 44.7776 28.0381C44.5897 28.2367 44.3671 28.3359 44.11 28.3359C43.8529 28.3359 43.6304 28.2367 43.4425 28.0381L40.8316 25.2792L31.1595 35.4997C31.0606 35.6042 30.9469 35.6565 30.8183 35.6565C30.6898 35.6565 30.576 35.6042 30.4771 35.4997L28.786 33.7127C28.6871 33.6082 28.6377 33.488 28.6377 33.3522C28.6377 33.2163 28.6871 33.0961 28.786 32.9916L38.4581 22.7711L35.8472 20.0122C35.6593 19.8136 35.5654 19.5785 35.5654 19.3068C35.5654 19.035 35.6593 18.7999 35.8472 18.6013C36.0351 18.4028 36.2576 18.3035 36.5148 18.3035H44.11C44.3671 18.3035 44.5897 18.4028 44.7776 18.6013C44.9655 18.7999 45.0594 19.035 45.0594 19.3068Z" fill="white"/>
</svg>
`,
      }}
    ></div>
  );
};

export default ShareButton;
