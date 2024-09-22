export const shareOnFacebook = (url) => {
    console.log("url mi pa", url);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
  };


  export const shareOnTwitter = (mission_name,mission_details, url) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(mission_name + ' - ' + mission_details)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  export const shareOnYoutube = (url) => {
   
    window.open(url, '_blank');
  };