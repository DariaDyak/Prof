// plugins/focus-reset-plugin.js
module.exports = function({ addBase, addUtilities }) {
  addBase({
    'button:focus': {
      outline: 'none !important',
      boxShadow: 'none !important',
    },
    'button:focus-visible': {
      outline: 'none !important',
      boxShadow: 'none !important',
    },
  });
  
  addUtilities({
    '.focus-reset': {
      '&:focus': {
        outline: 'none !important',
        boxShadow: 'none !important',
      },
      '&:focus-visible': {
        outline: 'none !important',
        boxShadow: 'none !important',
      },
    },
  });
};