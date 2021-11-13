import { FooterProps } from '../../Types';
import { mapToIconComponents } from '../../Utils';

const Footer = (props: FooterProps) => {
    const mapping: any[] = mapToIconComponents(props.socialMedia);
    return (
        <footer data-id='footer-component'>
            {mapping}
            <figure>
                <figcaption><cite>Albert Einstein:</cite></figcaption>
                <blockquote cite="https://www.azquotes.com/quote/369274">
                    Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.
                </blockquote>
            </figure>
        </footer>
    )
}

export default Footer;