import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section level={1}>
            <Heading>Judul</Heading>
            <Section level={2}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
            </Section>
            <Section level={3}>
                <Heading>Sub-Heading</Heading>
                <Heading>Sub-Heading</Heading>
                <Heading>Sub-Heading</Heading>
            </Section>
            <Section level={4}>
                <Heading>Sub-sub-Heading</Heading>
                <Heading>Sub-sub-Heading</Heading>
                <Heading>Sub-sub-Heading</Heading>
            </Section>
        </Section>
    );
}
