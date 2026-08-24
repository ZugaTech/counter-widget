/* ============================================================
   COUNTER WIDGET — APPLICATION LOGIC
   ------------------------------------------------------------
   Author: Moyosore Ogunde
   Project: Counter Widget (Interview Assessment)
   Description: Vanilla JS counter with increment, decrement,
   and reset functionality. Uses defensive coding and
   accessibility best practices.
   ============================================================ */

/* ============================================================
   STATE MANAGEMENT
   ============================================================ */

/**
 * Current counter state.
 * Kept as a module-level variable for simplicity and clarity.
 * @type {number}
 */
let count = 0;

/* ============================================================
   DOM ELEMENT REFERENCES
   ============================================================ */

/**
 * Retrieves and caches DOM elements with defensive null-checking.
 * Throws a descriptive error if any required element is missing.
 * @returns {Object} Object containing all DOM references
 * @throws {Error} If any required element is not found
 */
function getElements() {
  const elements = {
    counterValue: document.getElementById('counterValue'),
    btnIncrement: document.getElementById('btnIncrement'),
    btnDecrement: document.getElementById('btnDecrement'),
    btnReset: document.getElementById('btnReset'),
  };

  // Validate all elements exist before proceeding
  const missing = Object.entries(elements).filter(([_, el]) => !el);
  if (missing.length > 0) {
    const names = missing.map(([key]) => key).join(', ');
    throw new Error(`Missing required DOM elements: ${names}`);
  }

  return elements;
}

/* ============================================================
   UI UPDATE LOGIC
   ============================================================ */

/**
 * Updates the counter display with an optional animation.
 * The "bump" animation provides visual feedback without
 * distracting from the core interaction.
 *
 * @param {Object} elements - Cached DOM element references
 * @param {boolean} [animate=false] - Whether to trigger animation
 */
function updateDisplay(elements, animate = false) {
  elements.counterValue.textContent = count;

  if (animate) {
    // Remove and re-add class to restart CSS animation
    elements.counterValue.classList.remove('bump');
    void elements.counterValue.offsetWidth; // Trigger reflow
    elements.counterValue.classList.add('bump');

    // Cleanup after animation completes
    setTimeout(() => {
      elements.counterValue.classList.remove('bump');
    }, 150);
  }
}

/* ============================================================
   EVENT HANDLERS
   ============================================================ */

/**
 * Increments the counter by 1.
 */
function increment(elements) {
  count += 1;
  updateDisplay(elements, true);
}

/**
 * Decrements the counter by 1.
 * Note: No lower bound enforced; negative values are allowed.
 */
function decrement(elements) {
  count -= 1;
  updateDisplay(elements, true);
}

/**
 * Resets the counter to 0.
 */
function reset(elements) {
  count = 0;
  updateDisplay(elements, true);
}

/* ============================================================
   EVENT REGISTRATION
   ============================================================ */

/**
 * Binds all event listeners to their respective buttons.
 * Uses arrow functions to preserve lexical scope.
 *
 * @param {Object} elements - Cached DOM element references
 */
function bindEvents(elements) {
  elements.btnIncrement.addEventListener('click', () => increment(elements));
  elements.btnDecrement.addEventListener('click', () => decrement(elements));
  elements.btnReset.addEventListener('click', () => reset(elements));

  // Keyboard accessibility: Enter and Space trigger buttons
  elements.btnIncrement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      increment(elements);
    }
  });

  elements.btnDecrement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      decrement(elements);
    }
  });

  elements.btnReset.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      reset(elements);
    }
  });
}

/* ============================================================
   APPLICATION INITIALIZATION
   ============================================================ */

/**
 * Initializes the counter widget.
 * Wraps initialization in try/catch to handle DOM errors gracefully.
 */
function init() {
  try {
    const elements = getElements();
    bindEvents(elements);
    updateDisplay(elements, false);
  } catch (error) {
    console.error('Counter widget failed to initialize:', error.message);
  }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
