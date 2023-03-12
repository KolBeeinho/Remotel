const GoogleMaps: React.FC = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          id="gmap_canvas"
          className="h-[70vw] w-[70vw] sm:h-[60vw] sm:w-[60vw] md:h-[50vw] md:w-[50vw] lg:h-[30vw] lg:w-[30vw]"
          src="https://maps.google.com/maps?q=Budapest,%20Margit%20u.%20100,%201165&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
      </div>
    </div>
  );
};
export default GoogleMaps;
