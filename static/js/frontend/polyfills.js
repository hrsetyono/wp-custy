import 'intersection-observer'

// Basic polyfill for object-fit.
// Covers __only__ object-fit: cover and object-position: 50% 50%;
// Doesn't work as expected
import 'objectFitPolyfill/dist/objectFitPolyfill.basic.min.js'

IntersectionObserver.prototype.POLL_INTERVAL = 500
