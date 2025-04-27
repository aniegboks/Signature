import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

interface VercelInviteUserEmailProps {
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    invitedByEmail?: string;
    teamName?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const Greeting = ({
    username,
    userImage,
    invitedByUsername,
    invitedByEmail,
    teamName,
    teamImage,
    inviteLink,
    inviteFromIp,
    inviteFromLocation,
}: VercelInviteUserEmailProps) => {
    const previewText = `Join ${invitedByUsername} on Vercel`;

    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto px-2" style={{ fontFamily: "'Cormorant Infant', serif" }}>
                    <Preview>{previewText}</Preview>
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px] flex justify-center font-cursive" style={{ fontFamily: "'Cormorant Infant', serif" }}>
                            <h3 className="text-2xl"style={{ fontFamily: "'Cormorant Infant', serif" }}>Nectar</h3>
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Welcome to <strong>{username}</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello {username},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>{invitedByUsername}</strong> (
                            <Link
                                href={`mailto:${invitedByEmail}`}
                                className="text-blue-600 no-underline"
                            >
                                {invitedByEmail}
                            </Link>
                            ) Welcomes you to <strong>Nectar</strong> have a lovely day{" "}
                            check our e-commerce and find your favourite drink!
                        </Text>
                        <Section>
                                    <Img
                                        className=""
                                        src={userImage}
                                        width="64"
                                        height="64"
                                        alt={`${username}'s profile picture`}
                                    />
                        </Section>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href={inviteLink}
                            >
                                Visit
                            </Button>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                            or copy and paste this URL into your browser:{" "}
                            <Link href={inviteLink} className="text-blue-600 no-underline">
                                {inviteLink}
                            </Link>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{" "}
                            <span className="text-black">{username}</span>. This invite was
                            sent from <span className="text-black">{inviteFromIp}</span>{" "}
                            located in{" "}
                            <span className="text-black">{inviteFromLocation}</span>. If you
                            were not expecting this invitation, you can ignore this email. If
                            you are concerned about your account's safety, please reply to
                            this email to get in touch with us.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

Greeting.PreviewProps = {
    username: "alanturing",
    userImage: `${baseUrl}/static/vercel-user.png`,
    invitedByUsername: "Alan",
    invitedByEmail: "alan.turing@example.com",
    teamName: "Enigma",
    teamImage: `${baseUrl}/static/vercel-team.png`,
    inviteLink: "https://vercel.com",
    inviteFromIp: "204.13.186.218",
    inviteFromLocation: "São Paulo, Brazil",
} as VercelInviteUserEmailProps;

export default Greeting;
