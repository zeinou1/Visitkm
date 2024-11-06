


import PropTypes from 'prop-types';

const Soutitre = ({subtitle}) => {
  return (
    <h3 className='section__subtitle mt-5 dark:text-white '>{subtitle}</h3>
  )
}
Soutitre.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Soutitre