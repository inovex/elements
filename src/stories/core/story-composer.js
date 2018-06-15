// A function that adds a wrapper around the story to apply
// common styles that should be used for each story.
import './story-composer.scss';

export default () => ({
  render: h => <div class="ino-story-composer"><story /></div>
});