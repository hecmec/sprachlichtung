// Predefined tooltip models for easy reuse
const textColor = 'hsl(0, 0%, 20%)';
const borderRadius = '8px';
const borderWidth = '4px';
const blueHue = '207';
const greenHue = '122';
const orangeHue = '42';
const redHue = '0';

export const text = {
  backgroundColor: 'var(--ifm-color-secondary-contrast-background)',
  border: `${borderWidth} solid var(--ifm-color-secondary-dark)`,
  color: 'var(--ifm-color-secondary-contrast-foreground)',
}
export const info = {
  backgroundColor: 'var(--ifm-color-info-contrast-background)',
  border: `${borderWidth} solid var(--ifm-color-info-dark)`,
  color: 'var(--ifm-color-info-contrast-foreground)',
};

export const success = {
  backgroundColor: 'var(--ifm-color-success-contrast-background)',
  border: `${borderWidth} solid var(--ifm-color-success-dark)`,
  color: 'var(--ifm-color-success-contrast-foreground)',
};

export const warning = {
  backgroundColor: 'var(--ifm-color-warning-contrast-background)',
  border: `${borderWidth} solid var(--ifm-color-warning-dark)`,
  color: 'var(--ifm-color-warning-contrast-foreground)',
};

// export const error = {
//   backgroundColor: `hsl(${redHue}, 78%, 90%)`, // Red
//   border: `${borderWidth} solid hsl(${redHue}, 78%, 50%)`,
//   borderRadius: borderRadius,
//   color: textColor,
// };
export const error = {
  backgroundColor: 'var(--ifm-color-danger-contrast-background)',
  border: `${borderWidth} solid var(--ifm-color-danger-dark)`,
  color: 'var(--ifm-color-danger-contrast-foreground)',
};

/**
 * A special model to allow full customization.
 * @param {React.CSSProperties} styles The custom styles to apply.
 * @returns {React.CSSProperties}
 */
export const custom = (styles) => ({
    ...styles
});

export const video = {
  backgroundColor: 'var(--ifm-color-secondary-contrast-background)',
  border: `${borderWidth} solid var(--ifm-color-secondary-dark)`,
  color: 'var(--ifm-color-secondary-contrast-foreground)',
  width: '600px'
}

// Teacher model with static image (placed in static/img)
export const teacher = {
  backgroundColor: 'hsl(0, 0%, 100%)',
  color: 'hsl(0, 0%, 20%)',
  border: '3px solid hsl(0, 0%, 60%)',
  borderRadius: '8px',
  paddingTop: '30px',
  paddingLeft: '10px',
  // image displayed inside the tooltip (rendered as an inline img to avoid overlap)
  image: '/img/kompass.svg',
  // decorative by default; set a string to provide accessible alt text
  imageAlt: '',
  imageSize: '70px',
  imageRight: '10px',
  imageBottom: '6px',
  minWidth: '50px',
};


// Teacher model with static image (placed in static/img)
export const suricate = {
  backgroundColor: '#0d491fff',
  /* fallback shorthand */
  background: '#ffffff',
  color: 'hsl(0, 0%, 20%)',
  border: '3px solid hsl(0, 0%, 40%)',
  borderRadius: '8px',
  paddingTop: '30px',
  paddingLeft: '10px',
  // image displayed inside the tooltip (rendered as an inline img to avoid overlap)
  image: '/img/kompass.svg',
  // decorative by default; set a string to provide accessible alt text
  imageAlt: '',
  imageSize: '70px',
  imageRight: '10px',
  imageBottom: '6px',
  minWidth: '50px',
};
