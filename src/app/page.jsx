import Header from '@/components/Header/Header';
import HealthySmiles from '@/components/HealthySmiles/HealthySmiles';
import Layouts from '@/components/Layouts/Layouts';
import Services from '@/components/Services/Services';
import Sponsors from '@/components/Sponsors/Sponsors';

export default function Home() {
  return (
    <Layouts>
      <Header />
      <Sponsors />
      <Services />
      <HealthySmiles />
    </Layouts>
  );
}
