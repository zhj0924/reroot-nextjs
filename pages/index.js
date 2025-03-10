import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Landing.module.scss";
import Layout, { siteTitle } from "../components/Layout";
import StartButton from "../components/startButton";
import Card from "../components/Card";
import LaunchIcon from "@mui/icons-material/Launch";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useUser } from "@auth0/nextjs-auth0";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Nav from "react-bootstrap/Nav";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";

export default function Landing() {
  const { user, error, isLoading } = useUser();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Layout landing>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container fluid="xxl">
        {/* Section 1 */}
        <div
          className={`${styles.sec1Cover} d-flex align-items-center flex-column`}
        >
          <Row className="text-end w-100 p-3">
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={`${user.name}`} src={`${user.picture}`} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={"profile"} onClick={handleCloseNavMenu}>
                    <Link href="/profile" passHref>
                      <Typography textAlign="center">
                        <a>Profile</a>
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem key={"logout"} onClick={handleCloseNavMenu}>
                    <Link href="/api/auth/logout" passHref>
                      <Typography textAlign="center">
                        <a>Logout</a>
                      </Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link href="/api/auth/login" passHref>
                <Nav.Link>
                  <span className={`${styles.sec1Link}`}>REGISTER / LOGIN</span>
                </Nav.Link>
              </Link>
            )}
          </Row>
          <Row className={`${styles.sec1Title} mx-0 w-100`}>reRoot</Row>
          <Row className={`${styles.sec1Subtitle} mx-0 w-100`}>
            Where to live?
          </Row>
          <Row className={`${styles.sec1Button} mt-auto`}>
            <StartButton to="/survey" outline>
              Start Survey
            </StartButton>
          </Row>
        </div>

        {/* Section 2 */}
        <Row className={`${styles.sec2Cover} d-flex justify-content-center`}>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Stack gap={0} bsPrefix={`${styles.sec2Content} text-center`}>
              <div className={`${styles.sec2Title}`}>
                Where in the United States you live is <b>important</b>.
              </div>
              <div className={`${styles.sec2Subtitle}`}>
                Where you live can determine your...
              </div>
              <Row direction="horizontal">
                <Col sm={3}>
                  <Image
                    src="/img/landing-health.svg"
                    alt="health"
                    width={90}
                    height={90}
                  />
                  <p className={`${styles.sec2Text}`}>health & wellbeing</p>
                </Col>
                <Col sm={3}>
                  <Image
                    src="/img/landing-money.svg"
                    alt="money"
                    width={90}
                    height={90}
                  />
                  <p className={`${styles.sec2Text}`}>money & education</p>
                </Col>
                <Col sm={3}>
                  <Image
                    src="/img/landing-friends.svg"
                    alt="friends"
                    width={90}
                    height={90}
                  />
                  <p className={`${styles.sec2Text}`}>friends & community</p>
                </Col>
                <Col sm={3}>
                  <Image
                    src="/img/landing-rights.svg"
                    alt="rights"
                    width={90}
                    height={90}
                  />
                  <p className={`${styles.sec2Text}`}>rights & power</p>
                </Col>
              </Row>
              <div className={`${styles.sec2BottomText}`}>
                <span>reRoot</span> is a <b>FREE</b> tool to explore which
                places will be good for you.
              </div>
            </Stack>
          </Col>
          <Col></Col>
        </Row>

        {/* Section 3 */}
        <Row className={`${styles.sec3Cover} align-items-center mx-0`}>
          <div className={`${styles.sec3Banner} text-center`}>
            <div className={`${styles.sec3Text} py-3`}>
              Made in collaboration with...
            </div>
            <div className={`px-5 py-2`}>
              <Stack gap={4} direction="horizontal">
                <Image
                  src="/img/org-census.png"
                  alt="census"
                  height={100}
                  width={300}
                />
                <Image
                  src="/img/org-top.png"
                  alt="top"
                  height={100}
                  width={570}
                />
                <Image
                  src="/img/org-harvard.png"
                  alt="harvard"
                  height={100}
                  width={360}
                />
                <Image
                  src="/img/org-meta.png"
                  alt="meta-lab"
                  height={100}
                  width={100}
                />
              </Stack>
            </div>
          </div>

          <Col>
            <div className={`${styles.sec3Title} pb-3`}>
              How reRoot Works...
            </div>
            <Row>
              <Col sm={4}>
                <Card src="/img/landing-step1.svg">
                  <p className={styles.sec3TopText}>1</p>
                  <div className={styles.sec3BottomText}>
                    <p> Take a 30-second survey</p> Telling us what you need
                  </div>
                </Card>
              </Col>
              <Col sm={4}>
                <Card src="/img/landing-step2.svg">
                  <p className={styles.sec3TopText}>2</p>
                  <div className={styles.sec3BottomText}>
                    <p>We search for places</p>
                    Using U.S. census data
                  </div>
                </Card>
              </Col>
              <Col sm={4}>
                <Card src="/img/landing-step3.svg">
                  <p className={styles.sec3TopText}>3</p>
                  <div className={styles.sec3BottomText}>
                    <p>Get custom results</p>
                    Matching you to places
                  </div>
                </Card>
              </Col>
              <Col className={`${styles.sec3SubTitle} py-3`}>
                Fast. Simple. Free.
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Section 4 */}
        <Row className={`${styles.sec4Cover} mx-0`}>
          <Col sm={{ offset: 4, span: 8 }} xs={12} className={styles.sec4Text}>
            <p className={`${styles.sec4Title} text-center`}>
              A diverse country means diverse needs.
            </p>
            <p className={`${styles.sec4Subtitle} text-center`}>
              <span>reRoot</span> puts America&apos;s underserved first and make
              sure their needs are met too.
            </p>
            <p className={`${styles.sec4Subtitle} text-center`}>
              <span>reRoot</span> optimizes search results based on four factors
              — DIAGRAM — and with support for more factors coming soon.
            </p>
            <Image
              className={`${styles.sec4Diagram}`}
              src="/img/landing-diagram.svg"
              alt="diagram"
              height={621}
              width={946}
            />
          </Col>
        </Row>

        <Row className={styles.secAction}>
          <Col className="text-center py-4">
            <StartButton to="/survey">Start Survey</StartButton>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
