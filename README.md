# React Accessible Font Awesome Components
A small library which automatically adds a visually hidden text node, and an `aria-hidden` tag
to [Font Awesome](https://fortawesome.github.io) icons.  The markup aims to follow the pattern laid out
in [this blog post](https://www.filamentgroup.com/lab/bulletproof_icon_fonts.html).

## Installation
`npm install react-accessible-fa`

## Usage
Usage is straightforward.  First, make sure that your app includes the font-awesome CSS link somewhere.

```
import { AccessibleFAIcon as Icon } from './AccessibleFAIcon'

class Example extends React.Component {
  render() {
    return (
      <Icon animations={['spin']} icon="spinner" size="2x">
        Loading...
      </Icon>
    )
  }
}
```

ouputs to:
```
<div id="example">
  <span style="display:inline-block;" tabindex="0">
    <span style="clip:rect(1px, 1px, 1px, 1px);position:absolute !important;height:1px;width:1px;overflow:hidden;">
      Loading...
    </span>
    <i aria-hidden="true" class="fa fa-spinner fa-2x fa-spin"></i>
  </span>
</div>
```

## Props
**Note** don't include the `fa` prefix in your props, the component adds that for you.
* `icon` - required; the class of the icon to be displayed.
* `animations` - an array of animation classes.
* `size` - the size class you want to use.
* `tabIndex` - sets the `tabindex` value. Default is 1.
* `text` - passed in as children. If no text is supplied, the icon name will be used instead.

## License
The MIT License (MIT)
Copyright (c) 2015 Kevin Whitaker
