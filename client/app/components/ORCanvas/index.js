import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectImage,
  makeSelectResponse,
} from 'containers/HomePage/redux/selectors';

const drawResponse = (response, ctx) => {
  ctx.lineWidth = '4';
  ctx.strokeStyle = 'blue';
  response.map(data => {
    if (data.show)
      ctx.rect(data.rect.x, data.rect.y, data.rect.width, data.rect.height);
    return data;
  });
  ctx.stroke();
};

class ORCanvas extends React.Component {
  componentDidUpdate() {
    const ctx = document.getElementById('ORCanvas').getContext('2d');
    const img = new Image();
    img.src = this.props.imageUrl;
    img.onload = () => {
      document.getElementById('ORCanvas').width = img.width;
      document.getElementById('ORCanvas').height = img.height;
      ctx.drawImage(img, 0, 0);
      drawResponse(this.props.response, ctx);
      document.getElementById('ORImage').src = document
        .getElementById('ORCanvas')
        .toDataURL();
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <canvas id="ORCanvas" style={{ display: 'none' }} />
        <img id="ORImage" src="" height="300" alt="ORImage" />
      </div>
    );
  }
}

ORCanvas.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  imageUrl: makeSelectImage(),
  response: makeSelectResponse(),
});

export default connect(
  mapStateToProps,
  null,
)(ORCanvas);
