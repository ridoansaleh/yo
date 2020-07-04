import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Content,
  ProfileWrapper,
  ImageProfile,
  Name,
  Description,
  Socials,
  Icon,
} from "../styles/_profileStyle";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Web Profile - Ridoan Saleh Nasution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Content>
          <ProfileWrapper>
            <ImageProfile src="/photo.png" alt="Profile Photo" />
            <Name>Ridoan Saleh Nasution</Name>
          </ProfileWrapper>
          <Description>
            I'm a professional web developer who currently focus on Frontend to
            convert UI Design to HTML + CSS with pixel perfect in mind. On top
            of it, i also integrate REST API / GraphQL endpoint to the UI by
            following the business requirements.
          </Description>
          <Description>
            My skills are not limited on Frontend. I also able to work on
            Backend especially by using tools like: Node.Js, PHP, Python, MySQL,
            MongoDB etc.
          </Description>
          <Socials>
            <a
              href="https://www.linkedin.com/in/ridoan-saleh-n-32897385/"
              target="_blank"
            >
              <Icon
                src="/socials/icons8-linkedin-48.png"
                alt="LinkedIn Account"
              />
            </a>
            <a href="https://github.com/ridoansaleh" target="_blank">
              <Icon src="/socials/icons8-github-48.png" alt="Github Account" />
            </a>
            <a
              href="https://stackoverflow.com/users/4501402/ridoansaleh"
              target="_blank"
            >
              <Icon
                src="/socials/icons8-stack-overflow-48.png"
                alt="Stack Overflow Account"
              />
            </a>
          </Socials>
        </Content>
      </Container>
    </div>
  );
}
