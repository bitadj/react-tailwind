import { Link } from 'react-router-dom';
import { VoiceRecorder } from '../modules';

export default function Profile() {
  return (
    <div>
      <VoiceRecorder />
      <ul>
        <li>
          <Link to="edit">Edit Phone</Link>
        </li>
        <li>
          <Link to="edit">Edit Email</Link>
        </li>
      </ul>
    </div>
  );
}
