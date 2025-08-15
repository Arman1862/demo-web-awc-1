import "../components/Header.css";

export default function Header({ header_1, header_2 }) {
  return (
    <div className="mb-2 header d-flex flex-column align-items-center">
      {/* <div className="d-flex w-100 justify-content-between align-items-center">
        <img
          height={40}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3bd3c64716ae20a092376b21b87329f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=24fbccee&x-expires=1754809200&x-signature=IhSNYi3lrDUog2aXpeo%2BmdN1c1I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
          alt="logo sekolah"
          className="rounded-circle"
        />
        <img
          height={40}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3bd3c64716ae20a092376b21b87329f8~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=24fbccee&x-expires=1754809200&x-signature=IhSNYi3lrDUog2aXpeo%2BmdN1c1I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
          alt="logo kelas"
          className="rounded-circle"
        />
      </div> */}
      <div className="text-center">
        <div className="relative mb-0" id="header-1">
          <h1 className="display-4 fw-semibold text-white position-absolute w-100 mb-0 top-0 start-0 custom-text-blur-effect">
            {header_1}
          </h1>
          <h1 className="display-4 fw-semibold text-white mb-0 position-relative">
            {header_1}
          </h1>
        </div>
        <div className="relative" id="header-2">
          <h1 className="display-4 fw-semibold text-white position-absolute w-100 mb-0 top-0 start-0 custom-text-blur-effect">
            {header_2}
          </h1>
          <h1 className="display-4 fw-semibold text-white mb-0 position-relative">
            {header_2}
          </h1>
        </div>
      </div>
    </div>
  );
}