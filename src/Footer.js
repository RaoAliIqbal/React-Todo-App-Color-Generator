
import PropTypes from 'prop-types';


function Footer(props){
    return (
        <div>
            <p>This is {props.fname} {props.lname}</p>
        </div>
    );
}

Footer.propTypes={
    lname:PropTypes.string
}

export default Footer;