import React from 'react';
import { Row, Col, Typography, Button, Card, Space } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import techImage from '../assets/tech.avif';
import googleLogo from '../assets/google.png';
import metaLogo from '../assets/meta.svg';
import vscLogo from '../assets/vsc.svg';
import epicLogo from '../assets/epic.svg';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Slider from '../components/Slider';


const { Title, Paragraph } = Typography;

const MainPage: React.FC = () => {

    useEffect(() => {
    AOS.init({ once: true }); 
  }, []);


  return (
    <>
    <Header/>
    <div className="px-8 lg:px-20 py-12" data-aos="fade-up" data-aos-duration="1000">
      <Row align="middle" justify="space-between" className="min-h-[80vh]">
        <Col xs={24} md={12}>
          <Title className="font-urbanist !text-4xl lg:!text-6xl !font-bold !leading-tight">
            Build Your Team with Top 1% Tech Talent
          </Title>
          <Paragraph className="font-urbanis!text-lg max-w-[500px]">
            Accelerate your digital transformation with highly skilled developers, engineers, and designers.
          </Paragraph>
          <Button type="primary" size="large" className="mt-4">
            <Link to={"/Contacts"}>Let's Talk</Link>
          </Button>
        </Col>
        <Col xs={0} md={10}>
          <img
            src={techImage}
            alt="Tech Talent"
            className="w-full rounded-xl shadow-lg"
          />
        </Col>
      </Row>
      <section className="mt-32" data-aos="fade-up" data-aos-duration="1000">
        <Title level={2}>Our Services</Title>
        <Slider/>
      </section>
      <section className="mt-32" data-aos="fade-up" data-aos-duration="1000">
        <Title level={2}>Trusted by Global Companies</Title>
        <Row gutter={[24, 24]} justify="center" className="mt-8 max-widht-1000">
            <Col xs={12} sm={6}>
              <Card bordered={false} className="text-center shadow-none">
                <img
                  src={googleLogo}
                  className="mx-auto"
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card bordered={false} className="text-center shadow-none">
                <img
                  src={metaLogo}
                  className="mx-auto"
                  width={100}
                  height={100}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card bordered={false} className="text-center shadow-none">
                <img
                  src={vscLogo}
                  className="mx-auto"
                  width={100}
                  height={100}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card bordered={false} className="text-center shadow-none">
                <img
                  src={epicLogo}
                  className="mx-auto"
                  width={100}
                  height={100}
                />
              </Card>
            </Col>
        </Row>
      </section>
      <section className="mt-36 bg-gray-100 p-10 rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
        <Row justify="space-between" align="middle">
          <Col xs={24} md={16}>
            <Title level={3}>Ready to scale your team with elite tech talent?</Title>
            <Paragraph>
              Get in touch with us today and start building the future of your company.
            </Paragraph>
          </Col>
          <Col xs={24} md={6} className="text-right">
            <Space wrap>
              <Button type="primary" size="large"><Link to={"/Contacts"}>Contact Us</Link></Button>
              <Button size="large">Learn More</Button>
            </Space>
          </Col>
        </Row>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default MainPage;
