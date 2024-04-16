import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactsPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Contacts</Heading>
            <Post title="Ahmad Bima Tristan Ibrahim" body="2141720077" />
            <Post title="Email" body="bimatristan.me@.com" />
            <Post title="Phone" body="+6285156552045" />
        </Section2>
    )
}