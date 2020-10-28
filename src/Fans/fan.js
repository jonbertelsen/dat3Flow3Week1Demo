import PropTypes from 'prop-types';

function Fan(props) {
    const { navn, alder } = props
    return (
        <span>
            { (navn === 'Jon') ? 'Hej Jon' : 'Du er ikke Jon'} ({ alder || 'Ukendt '} år)
        </span>
    )
}

Fan.propTypes = {
    navn: PropTypes.string,
    alder: PropTypes.number
}

Fan.defaultProps = {
    navn: 'Ukendt navn'
};

export default Fan