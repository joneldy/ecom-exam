import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  display: string;
  changeDisplay: (a: string) => void;
}

const DisplayOption = ({ changeDisplay, display }: IProps) => {
  const handleChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    status: string
  ) => {
    e.preventDefault();
    changeDisplay(status);
  };

  return (
    <div className="btn-group">
      <a
        href="/"
        className={`btn btn-outline-primary ${display === 'list' && 'active'}`}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          handleChange(e, 'list')
        }
      >
        <FontAwesomeIcon icon={faList} />
      </a>
      <a
        href="/"
        className={`btn btn-outline-primary ${display === 'grid' && 'active'}`}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          handleChange(e, 'grid')
        }
      >
        <FontAwesomeIcon icon={faTh} />
      </a>
    </div>
  );
};

export default DisplayOption;
