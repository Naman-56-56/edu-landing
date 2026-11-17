import { useEffect } from 'react';

const HEADER = 64; // sticky navbar height
const GAP = 20; // breathing room below the cards
const CARD_IDS = ['school', 'college', 'health'];

/**
 * Links to #verticals / #school / #college / #health land so that the whole
 * card, including its "Explore" link, is on screen without further scrolling.
 * If the section heading fits too, it is shown; otherwise the card's bottom
 * edge is aligned to the bottom of the screen.
 */
function scrollToVertical(id, behavior = 'smooth') {
  const section = document.getElementById('verticals');
  const grid = section?.querySelector('[data-verticals-grid]');
  if (!section || !grid) return false;

  const pageY = (el) => el.getBoundingClientRect().top + window.scrollY;
  const cards = CARD_IDS.map((c) => document.getElementById(c)).filter(Boolean);
  const oneRow = cards.length > 1 && Math.abs(cards[0].offsetTop - cards[cards.length - 1].offsetTop) < 4;

  let top;
  let bottomEl;
  if (id === 'verticals' || oneRow) {
    top = pageY(section) - HEADER;
    bottomEl = oneRow ? grid : null; // stacked: just go to the section start
  } else {
    const card = document.getElementById(id);
    if (!card) return false;
    top = pageY(card) - HEADER - 16;
    bottomEl = card;
  }

  if (bottomEl) {
    const bottom = pageY(bottomEl) + bottomEl.offsetHeight;
    top = Math.max(top, bottom + GAP - window.innerHeight);
  }

  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function useVerticalAnchors() {
  useEffect(() => {
    const targets = new Set(['verticals', ...CARD_IDS]);

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest?.('a[href^="#"]');
      const id = link?.getAttribute('href').slice(1);
      if (!id || !targets.has(id)) return;
      if (scrollToVertical(id)) {
        e.preventDefault();
        history.pushState(null, '', `#${id}`);
      }
    };

    document.addEventListener('click', onClick);

    // Opening the page directly on e.g. /#health
    const initial = window.location.hash.slice(1);
    let timer;
    if (targets.has(initial)) timer = setTimeout(() => scrollToVertical(initial, 'auto'), 300);

    return () => {
      document.removeEventListener('click', onClick);
      clearTimeout(timer);
    };
  }, []);
}
