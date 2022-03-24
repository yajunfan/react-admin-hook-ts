import mixin from 'style-mixin';

export const m = mixin({
  margin: function($margin = '10px') {
    return {
      'margin':$margin
    }
  }
});

export const p = mixin({
  padding: function($padding = '10px') {
    return {
      'margin':$padding
    }
  }
});
