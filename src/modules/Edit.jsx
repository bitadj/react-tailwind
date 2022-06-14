import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Edit({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      {children}
      <button type="button" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </div>
  );
}

Edit.propTypes = {
  children: PropTypes.node.isRequired,
};
