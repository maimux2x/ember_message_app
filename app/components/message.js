import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';

export default class Message extends Component {
  substring = (string, options) => string.substring(options.start, options.end);
}
