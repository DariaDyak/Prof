const SmoothScrollLink = ({
  to,
  children,
  offset = 0,
  duration = 1000,
  className = '',
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.querySelector(to);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;
