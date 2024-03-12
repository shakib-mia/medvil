import Appointment from '@/components/Appointment/Appointment';
import Articles from '@/components/Articles/Articles';
import ContactUs from '@/components/ContactUs/ContactUs';
import Feedback from '@/components/Feedback/Feedback';
import Header from '@/components/Header/Header';
import HealthySmiles from '@/components/HealthySmiles/HealthySmiles';
import Layouts from '@/components/Layouts/Layouts';
import Services from '@/components/Services/Services';
import Specialists from '@/components/Specialists/Specialists';
import Sponsors from '@/components/Sponsors/Sponsors';
import WhyChoose from '@/components/WhyChoose/WhyChoose';
import { RouteHistoryContext } from '@/contexts/RouteHistoryContext';
import { useContext } from 'react';

export default function Home() {
  // const { routes } = useContext(RouteHistoryContext);
  // console.log(routes);

  return (
    <Layouts>
      <Header />
      <Sponsors />
      <Services />
      <HealthySmiles />
      <WhyChoose />
      <Specialists />
      <Appointment />
      <Feedback />
      <Articles />
      <ContactUs />
    </Layouts>
  );
}
