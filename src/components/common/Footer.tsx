import { FooterProps } from '../../Types';
import { mapToIconComponents } from '../../Utils';

const Footer = (props: FooterProps) => {
    const mapping: any[] = mapToIconComponents(props.socialMedia);
    return (
        <footer>
            {mapping}
        </footer>
    )
}

export default Footer;