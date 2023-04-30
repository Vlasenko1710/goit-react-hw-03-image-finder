import { ButtonLoad } from "./Button.styled";
export const Button = ({ onClick }) => {
    return (
        <ButtonLoad onClick={onClick } type="button">Load more</ButtonLoad>
    );
 };