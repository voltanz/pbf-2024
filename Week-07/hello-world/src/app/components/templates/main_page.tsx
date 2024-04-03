import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading>Title</Heading>
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
