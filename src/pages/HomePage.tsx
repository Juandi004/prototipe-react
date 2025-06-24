import React from 'react';
import { Row, Col, Typography, Button, Card, Space } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const MainPage: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="px-8 lg:px-20 py-12">
      <Row align="middle" justify="space-between" className="min-h-[80vh]">
        <Col xs={24} md={12}>
          <Title className="font-urbanist !text-4xl lg:!text-6xl !font-bold !leading-tight">
            Build Your Team with Top 1% Tech Talent
          </Title>
          <Paragraph className="font-urbanis!text-lg max-w-[500px]">
            Accelerate your digital transformation with highly skilled developers, engineers, and designers.
          </Paragraph>
          <Button type="primary" size="large" className="mt-4">Let’s Talk</Button>
        </Col>
        <Col xs={0} md={10}>
          <img
            src="https://via.placeholder.com/500x400"
            alt="Tech Talent"
            className="w-full rounded-xl shadow-lg"
          />
        </Col>
      </Row>
      <section className="mt-32">
        <Title level={2}>Our Services</Title>
        <Row gutter={[24, 24]}>
          {['Staff Augmentation', 'Dedicated Teams', 'Software Outsourcing'].map((service, i) => (
            <Col xs={24} sm={12} md={8} key={i}>
              <Card
                hoverable
                className="h-full shadow-md"
                cover={
                  <img
                    alt={service}
                    src={`https://via.placeholder.com/400x200?text=${encodeURIComponent(service)}`}
                  />
                }
              >
                <Card.Meta
                  title={service}
                  description="We provide expert teams and individuals to support your software development needs."
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      <section className="mt-32">
        <Title level={2}>Trusted by Global Companies</Title>
        <Row gutter={[24, 24]} justify="center">
          {['Google', 'HP', 'Rolls Royce', 'Pinterest'].map((client, i) => (
            <Col xs={12} sm={6} key={i}>
              <Card bordered={false} className="text-center shadow-none">
                <img
                  src={`https://via.placeholder.com/120x60?text=${encodeURIComponent(client)}`}
                  alt={client}
                  className="mx-auto"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      <section className="mt-36 bg-gray-100 p-10 rounded-2xl">
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
};

export default MainPage;
