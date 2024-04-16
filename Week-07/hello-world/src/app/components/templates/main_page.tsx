import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading>Title</Heading>
            <Post title="Ahmad Bima Tristan Ibrahim" body="2141720077" />
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
            </Section>
            <Section>
                <Heading>Sub-Heading</Heading>
                <Heading>Sub-Heading</Heading>
                <Heading>Sub-Heading</Heading>
            </Section>
            <Section>
                <Heading>Sub-sub-Heading</Heading>
                <Heading>Sub-sub-Heading</Heading>
                <Heading>Sub-sub-Heading</Heading>
            </Section>
        </Section>
    );
}
