import { Card, Row, Col, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const iconDummyLink = "https://picsum.photos/100/100";
const objectiveSelectionOptions: {
  key: string;
  icon: string;
  text: string;
  description: string;
  link: string;
}[] = [
  {
    icon: iconDummyLink,
    text: "",
    description: "Learn about my benefits",
    key: "learnBenefits",
    link: "/",
  },
  {
    icon: iconDummyLink,
    text: "",
    description: "Model how to maximize my benefits",
    key: "maximizeBenefits",
    link: "/calculator",
  },
];

export const ObjectiveSelectionStep = () => {
  return (
    <>
      <Row gutter={4} align="middle" justify="center" style={{minHeight: '80vh'}}>
        {objectiveSelectionOptions.map((step) => (
          <Col xs={24} xl={4}>
            <Link to={step.link}>
              <Card hoverable style={{height: 100}}>
                <Meta
                  title={step.text}
                  description={step.description}
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
