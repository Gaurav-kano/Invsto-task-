import { useState } from "react";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import "./Home.css";

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-item: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  opacity: 70%;
  margin-left: 38%;
  font-size: 15px;
  transition: all 0.5s ease;
`;

const Text = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  opacity: 70%;
  font-size: 21px;
  transition: all 0.5s ease;
`;

const Boxtext = styled.span`
  color: ${(props) => props.theme.titleColor};
  margin-left: 35%;
  margin-bottom: 5%;
  font-size: 50px;
  font-weight: 600;
  font-family: "Cabin", sans-serif;
  opcaity: 89%;
`;

function Home(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Page>
        <Container>
          <div className="logo">
            <Toggle onClick={changeTheme}>{icon}</Toggle>
          </div>
          <div className="title">
            <Title>Simple, Traffic-based pricing</Title>
          </div>
          <TagLine>
            Sign-up for our 30-day trial. No credit card required.
          </TagLine>
        </Container>

        <div className="box">
          <Text>100k Pageviews</Text>
          <Boxtext>₹{value}</Boxtext>
          <Text>/per month</Text>

          <div className="slider">
            <Slider
              value={value}
              step={0.1}
              min={0}
              max={100}
              onChange={handleChange}
            />
          </div>

          <div className="switch">
            <Switch defaultChecked />
          </div>
          <button className="button">Start trial</button>
        </div>
      </Page>
    </div>
  );
}

export default Home;
