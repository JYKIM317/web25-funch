import Ping from './components/Ping';
import SunSvg from '@components/svgs/SunSvg';
import FunchSvg from '@components/svgs/FunchSvg';
import DeemedLink from '@components/layout/DeemedLink';

const HomePage = () => {
  return (
    <>
      <h1>
        <span>FUNCH</span>
        <Ping />
      </h1>
      <div>
        <p className="funch-bold24">helloworld</p>
        <p className="funch-bold16 text-content-brand-base">helloworld</p>
        <p className="funch-bold14 text-content-brand-weak">helloworld</p>
        <p className="funch-bold12">helloworld</p>
        <p className="funch-medium16">helloworld</p>
        <p className="funch-medium14">helloworld</p>
        <p className="funch-medium12">helloworld</p>
        <DeemedLink name="전체보기" url="/categories" />
        <button className="bg-red">
          <SunSvg />
          <FunchSvg />
        </button>
      </div>
    </>
  );
};

export default HomePage;
