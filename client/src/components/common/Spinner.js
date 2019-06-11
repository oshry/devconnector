import spinner from './spinner.gif';

import React, {Component} from 'react';

class Spinner extends Component {
    render() {
        return (
            <div>
                <img
                    src={spinner}
                    style={{ width: '200px', margin: 'auto', display: 'block' }}
                    alt="Loading..."
                />
            </div>
        );
    }
}

export default Spinner;
