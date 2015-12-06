import React from 'react'

export class AccessibleFAIcon extends React.Component {
  render() {
    const props = this.props
    const size = `fa-${props.size}` || ''
    const anims = props.animations.map((a) => `fa-${a}`).join(' ')
    const text = props.children || props.icon

    const readerTextStyle = {
      clip: 'rect(1px, 1px, 1px, 1px)',
      position: 'absolute !important',
      height: '1px',
      width: '1px',
      overflow: 'hidden',
    }

    const wrapStyle = {
      display: 'inline-block',
    }

    return (
      <span style={wrapStyle} tabIndex={props.tabIndex}>
        <span style={readerTextStyle}>
          {text}
        </span>
        <i aria-hidden={true} className={`fa fa-${props.icon} ${size} ${anims}`} />
      </span>
    )
  }
}

AccessibleFAIcon.propTypes = {
  animations: React.PropTypes.array,
  icon: React.PropTypes.string.isRequired,
  size: React.PropTypes.string,
  tabIndex: React.PropTypes.integer,
}

AccessibleFAIcon.defaultProps = {
  animations: [],
  tabIndex: 0,
}
