import {useState, useEffect} from "react";
import Menu from "../../containers/Menu";
import ServiceCard from "../../components/ServiceCard";

import EventCard from "../../components/EventCard";
import PeopleCard from "../../components/PeopleCard";

import "./style.scss";
import EventList from "../../containers/Events";
import Slider from "../../containers/Slider";
import Logo from "../../components/Logo";
import Form from "../../containers/Form";
import Modal from "../../containers/Modal";
import ModalEvent from "../../containers/ModalEvent";
import { useData } from "../../contexts/DataContext";

const Page = () => {
  const [last, setLast] = useState(undefined);
  const {data} = useData();
  useEffect(() => {
    if (data) {
      setLast(data.last);
    }
  }, [data]);
  return <>
    <header>
      <Menu />
    </header>
    <main>
      <section className="SliderContainer">
        {data ? <Slider /> : <p>loading</p>}
      </section>
      <section id="our-services" className="ServicesContainer">
        <h2 className="Title">Our services</h2>
        <p>We organize tailor-made events all over the world</p>
        <div className="ListContainer">
          <ServiceCard imageSrc="/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png">
            <h3>Corporate events</h3>
            A corporate event allows you to bring your teams together for a
            friendly moment in order to enhance your company by projecting a
            dynamic image. We offer to organize your dinners and corporate
            events for you
          </ServiceCard>
          <ServiceCard imageSrc="/images/hall-expo.png">
            <h3>Conferences</h3>
            77 events offers to organize your event, whatever its size, by
            adapting to your request and your needs. As event specialists, we
            will know how to find the perfect venue as well as innovative
            solutions to capture your audience and make this event a success
          </ServiceCard>
          <ServiceCard imageSrc="/images/sophia-sideri-LFXMtUuAKK8-unsplash1.png">
            <h3>Digital experience</h3>
            Our agency, expert in immersive content, offers consulting services
            to companies, for the use of virtual reality, augmented reality and
            mixed reality from event animation to technological watch to the
            development of innovative training modules
          </ServiceCard>
        </div>
      </section>
      <section id="our-achievements" className="EventsContainer">
        <h2 className="">Our achievements</h2>
        <EventList />
      </section>
      <section id="our-team" className="PeoplesContainer">
        <h2 className="Title">Our team</h2>
        <p>A team of experts dedicated to organizing your events</p>
        <div className="ListContainer">
          <PeopleCard
            imageSrc="/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png"
            name="Samira"
            position="CEO"
          />
          <PeopleCard
            imageSrc="/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png"
            name="Jean-baptiste"
            position="Marketing Director"
          />
          <PeopleCard
            imageSrc="/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.png"
            name="Alice"
            position="CXO"
          />
          <PeopleCard
            imageSrc="/images/jonas-kakaroto-KIPqvvTOC1s-unsplash.png"
            name="Luís"
            position="Event Host"
          />
          <PeopleCard
            imageSrc="/images/amy-hirschi-b3AYk8HKCl0-unsplash1.png"
            name="Christine"
            position="VP Animation"
          />
          <PeopleCard
            imageSrc="/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png"
            name="Isabelle"
            position="VP Communication"
          />
        </div>
      </section>
      <div className="FormContainer" id="contact">
        <h2 className="Title">Contact</h2>
        <Modal
          Content={
            <div className="ModalMessage--success">
              <div>Message sent!</div>
              <p>
                Thank you for your message, we will try to respond to you as
                soon as possible
              </p>
            </div>
          }
        >
          {({ setIsOpened }) => (
            <Form
              onSuccess={() => setIsOpened(true)}
              onError={() => null}
            />
          )}
        </Modal>
      </div>
    </main>
    <footer className="row">
      <div className="col presta">
        <h3>Our latest event</h3>
        {last &&
        <Modal key={last.id} Content={<ModalEvent event={last.id} />}>
          {({ setIsOpened }) => (
              <EventCard
                  onClick={() => setIsOpened(true)}
                  imageSrc={last.cover}
                  title={last.title}
                  date={new Date(last.date)}
                  label={last.type}
              />
          )}
        </Modal>
        }
      </div>
      <div className="col contact">
        <h3>Contact us</h3>
        <address>45 avenue de la République, 75000 Paris</address>
        <div>01 23 45 67 89</div>
        <div>contact@77events.com</div>
      </div>
      <div className="col description">
        <Logo size="large" />
        <p>
          An event agency offers specialized services in the design and
          organization of various events such as festive events, sporting and
          cultural events, professional events
        </p>
      </div>
    </footer>
  </>
}

export default Page;