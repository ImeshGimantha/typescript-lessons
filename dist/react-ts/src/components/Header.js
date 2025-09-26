import { jsx as _jsx } from "react/jsx-runtime";
const Header = (props) => (_jsx("header", { children: _jsx("h1", { style: { color: props.color ? props.color : 'blue' }, children: props.title }) }));
export default Header;
