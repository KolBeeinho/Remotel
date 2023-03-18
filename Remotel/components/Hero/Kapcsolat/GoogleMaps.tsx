const GoogleMaps: React.FC = () => {
  return (
    <div className="mapouter select-none pb-4 md:pb-0">
      <div className="gmap_canvas">
        <iframe
          id="gmap_canvas"
          className="h-[80vw] w-[80vw] sm:h-[60vw] sm:w-[60vw] md:h-[40vw] md:w-[30vw] lg:h-[30vw] lg:w-[30vw]"
          src="https://maps.google.com/maps?q=Budapest,%20Margit%20u.%20100,%201165&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
      </div>
    </div>
  );
};
export default GoogleMaps;
