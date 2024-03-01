import Header from '@/components/Header/Header';
import HealthySmiles from '@/components/HealthySmiles/HealthySmiles';
import Layouts from '@/components/Layouts/Layouts';
import Services from '@/components/Services/Services';
import Specialists from '@/components/Specialists/Specialists';
import Sponsors from '@/components/Sponsors/Sponsors';
import WhyChoose from '@/components/WhyChoose/WhyChoose';

export default function Home() {
  return (
    <Layouts>
      <Header />
      <Sponsors />
      <Services />
      <HealthySmiles />
      <WhyChoose />
      <Specialists />
    </Layouts>
  );
}
