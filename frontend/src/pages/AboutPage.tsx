import Modal from "@components/Modal";
import { FC } from "react";

type Props = {
    show: boolean;
    onClose: () => void;
}
const AboutPage: FC<Props> = ({show, onClose}) => {
    return (
        <Modal onClose={onClose} show={show} style={{width: 300, height: 300, alignItems: 'center', justifyContent: 'center'}}>
            Hello Go WG!!
        </Modal>
    )
};

export default AboutPage